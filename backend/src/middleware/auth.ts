import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

interface JwtPayload {
    id: string;
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Not authenticated",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not Found ",
            });
        }

        req.user = user;
        next();
    } catch {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};
