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

        const tasks = await EmployeeTask.find({ createdBy: userId })
            .sort({ createdAt: -1 });

        res.json(tasks);
    } catch (error: any) {
        res.status(500).json({
            message: "Failed to fetch tasks",
            error: error.message,
        });
    }
};
