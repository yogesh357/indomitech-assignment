import mongoose, { Document, Schema, type Date } from "mongoose";

export interface ITask extends Document {
    employeeName: string;
    description: string;
    priority: "low" | "medium" | "high";
    status: "pending" | "in-progress" | "completed";
    dueDate: Date
    createdBy: mongoose.Types.ObjectId;
}

const TaskSchema = new Schema<ITask>(
    {
        employeeName: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "medium"
        },

        status: {
            type: String,
            enum: ["pending", "in-progress", "completed"],
            default: "pending",
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        dueDate: {
            type: Date,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model<ITask>("Task", TaskSchema);
