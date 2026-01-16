import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import api from "@/lib/axios"
import { AlertCircle, CalendarIcon, Loader2, Sparkles, User } from "lucide-react"

const taskSchema = z.object({
    title: z.string().min(3, "Task title is required"),
    description: z.string().min(5, "Task description is required"),
    employeeName: z.string().min(1, "Employee is required"),
    priority: z.enum(["low", "medium", "high"]),
    status: z.enum(["pending", "in-progress", "completed"]),
    dueDate: z.string().min(1, "Due date is required"),
})

type TaskFormData = z.infer<typeof taskSchema>

export default function TaskCreate() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const form = useForm<TaskFormData>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            priority: "medium",
            status: "pending",
        },
    })


    const onSubmit = async (data: TaskFormData) => {
        setLoading(true)
        try {
            await api.post("/tasks/assign", data)
            toast.success("Task assigned successfully")
            navigate("/admin/employees/tasks")
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Failed to assign task")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container mx-auto max-w-4xl pt-24 pb-20 px-4">
            <div className="mb-10 text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                    Assign New {"  "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-500">Tasks</span>
                </h2>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="relative group">
                        <Card className="relative border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                            <CardContent className="p-6 md:p-8 space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                                    <FormField
                                        control={form.control}
                                        name="employeeName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-300 flex items-center gap-2">
                                                    <User className="w-4 h-4 " /> Employee Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Select employee..."
                                                        className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600h-11 transition-all"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Priority */}
                                    <FormField
                                        control={form.control}
                                        name="priority"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-300 flex items-center gap-2">
                                                    Priority
                                                </FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-950 border-slate-800 text-slate-200 h-11  ">
                                                            <SelectValue placeholder="Select level" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className="bg-slate-900 border-slate-800 text-slate-200">
                                                        <SelectItem value="low" className=" focus:bg-slate-700">Low Priority</SelectItem>
                                                        <SelectItem value="medium" className=" focus:bg-slate-700  ">Medium Priority</SelectItem>
                                                        <SelectItem value="high" className=" focus:bg-slate-700  ">High Priority</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Due Date */}
                                    <FormField
                                        control={form.control}
                                        name="dueDate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-300 flex items-center gap-2">
                                                    <CalendarIcon className="w-4 h-4 text-white" /> Due Date
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="date"
                                                        className="bg-slate-950 border-slate-800 text-slate-200 h-11  flex flex-row-reverse justify-end"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Status */}
                                    <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-slate-300">Initial Status</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-slate-950 border-slate-800 text-slate-200 h-11 ">
                                                            <SelectValue placeholder="Set status" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className="bg-slate-900 border-slate-800 text-slate-200">
                                                        <SelectItem value="pending" className="focus:bg-slate-700">Pending</SelectItem>
                                                        <SelectItem value="in-progress" className="focus:bg-slate-700">In Progress</SelectItem>
                                                        <SelectItem value="completed" className="focus:bg-slate-700">Completed</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage className="text-red-400" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-300 text-base font-semibold">Task Title</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="e.g. create Landing Page Hero Section"
                                                    className="bg-slate-950 border-black/70 text-slate-200 placeholder:text-slate-600 h-12 text-lg font-medium "
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-400" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-slate-300">Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Provide detailed instructions..."
                                                    className="bg-slate-950 border-slate-800 text-slate-200 placeholder:text-slate-600 min-h-36 resize-y "
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-400" />
                                        </FormItem>
                                    )}
                                />

                            </CardContent>
                        </Card>
                    </div>

                    {/* 4. Action Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 pt-4">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={() => navigate("/admin/employees/tasks")}
                            className="text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="bg-linear-to-r from-orange-600 to-purple-600 hover:from-orange-500 hover:to-purple-500 text-white font-bold shadow-lg shadow-orange-500/20 transition-all hover:scale-105 min-w-36"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Assigning...
                                </>
                            ) : (
                                "Assign Task"
                            )}
                        </Button>
                    </div>

                </form>
            </Form>
        </div>
    )
}
