import type { Request, Response, NextFunction } from 'express';
import User from '../models/User.js';
import { ErrorResponse } from '../middleware/errorHandler.js';
import jwt from 'jsonwebtoken';

const generateToken = (id: string) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }

    if (!process.env.JWT_EXPIRE) {
        throw new Error("JWT_EXPIRE is not defined");
    }

    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d'
        },

    );
};


export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(new ErrorResponse('User already exists', 400));
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        user.lastLogin = new Date();
        await user.save();

        const token = generateToken(user._id.toString());
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Error while user register"
        });
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new ErrorResponse('Please provide email and password', 400));
        }

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return next(new ErrorResponse('Invalid credentials', 401));
        }

        if (!user.isActive) {
            return next(new ErrorResponse('Account is deactivated', 401));
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return next(new ErrorResponse('Invalid credentials', 401));
        }

        user.lastLogin = new Date();
        await user.save();

        const token = generateToken(user._id.toString());
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Error while user login"
        });
    }
};

export const getMe = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.user?.id;
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            message: "Error while getting current user "
        });
    }
};

export const logout = async (req: Request, res: Response) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({
        success: true,
        message: 'Logged out successfully',
    });
};