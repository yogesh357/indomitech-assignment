import type { Request, Response } from "express";
import EmployeeTask from "../models/EmployeeTask.js";

export const createTask = async (req: Request, res: Response) => {
    try {
        const userId = req.user!.id;
        const { employeeName, description, dueDate, priority, status } = req.body;
        if (!employeeName || !description || !dueDate) {
            return res.status(400).json({
                message: "Employee name, description and due date are required",
            });
        }

        const task = await EmployeeTask.create({
            employeeName,
            description,
            dueDate,
            priority: priority || "medium",
            status: status || "pending",
            createdBy: userId,
        });

        res.status(200).json({
            message: "Task assigned successfully",
            task,
        });
    } catch (error: any) {
        res.status(500).json({
            message: "Failed to create task",
            error: error.message,
        });
    }
};

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const userId = req.user!.id;

        const page = Math.max(parseInt(req.query.page as string) || 1, 1);
        const limit = Math.min(parseInt(req.query.limit as string) || 5, 50);
        const search = typeof req.query.search === "string"
            ? req.query.search.trim()
            : "";
        const skip = (page - 1) * limit;
        const status = typeof req.query.status === "string"
            ? req.query.status.trim()
            : "";

        const filter: any = {
            createdBy: userId,
        };

        if (search) {
            filter.$or = [
                { employeeName: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
            ];
        }
        if (status && status !== "all") {
            filter.status = status;
        }

        const [tasks, totalTasks] = await Promise.all([
            EmployeeTask.find(filter)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit),
            EmployeeTask.countDocuments(filter),
        ]);


        res.status(200).json({
            data: tasks,
            pagination: {
                total: totalTasks,
                page,
                totalPages: Math.ceil(totalTasks / limit),
            },

        });
    } catch (error: any) {
        res.status(500).json({
            message: "Failed to fetch tasks",
            error: error.message,
        });
    }
};
