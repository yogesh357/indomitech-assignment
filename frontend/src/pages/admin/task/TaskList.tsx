import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, Search } from "lucide-react"
import api from "@/lib/axios"
import { toast } from "sonner"

interface Task {
    _id: string
    employeeName: string
    description: string
    priority: "low" | "medium" | "high"
    status: "pending" | "in-progress" | "completed"
    dueDate: string
    createdBy: string
}


export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState("")

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        try {
            const res = await api.get('/tasks')
            setTasks(res.data)
        } catch (err: any) {
            console.log("error while fetching task ", err)
            toast.error(err.response?.data?.message || 'Failed to load tasks')
        } finally {
            setLoading(false)
        }
    }

    const getStatusColor = (status: string) => {
        if (status === "completed") return "bg-green-100 text-green-900"
        if (status === "in-progress") return "bg-blue-100 text-blue-900"
        return "bg-yellow-100 text-yellow-900"
    }

    const getPriorityColor = (priority: string) => {
        if (priority === "high") return "bg-red-100 text-red-800"
        if (priority === "medium") return "bg-orange-100 text-orange-800"
        return "bg-gray-100 text-gray-800"
    }

    return (
        <div className="container mx-auto px-4 py-24 w-full max-w-7xl  ">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight ">
                        Assigned Tasks
                    </h2>
                    <p className="text-slate-400 mt-1">Track and manage employee workloads.</p>
                </div>
            </div>

            <Card className="relative border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden group">

                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>

                <CardHeader className="border-b border-slate-800/50 pb-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div>
                            <CardTitle className="text-xl text-white flex items-center gap-2">
                                Task Directory
                            </CardTitle>
                            <CardDescription className="text-slate-500">
                                Filter by status or search by employee name
                            </CardDescription>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <div className="relative  ">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                                <Input
                                    placeholder="Search employees..."
                                    className="pl-9 w-full sm:w-64 bg-slate-950 border-slate-800 text-slate-200   placeholder:text-slate-600"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <Select value={status} onValueChange={setStatus}>
                                <SelectTrigger className="w-full sm:w-40 bg-slate-950 border-slate-800 text-slate-200  ">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-900 border-slate-800 text-slate-200">
                                    <SelectItem value="all" className="focus:bg-slate-700">All Status</SelectItem>
                                    <SelectItem value="pending" className="focus:bg-slate-700">Pending</SelectItem>
                                    <SelectItem value="in-progress" className="focus:bg-slate-700">In Progress</SelectItem>
                                    <SelectItem value="completed" className="focus:bg-slate-700">Completed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="px-4">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-slate-500 gap-4">
                            <div className="animate-spin h-8 w-8 border-b-2 border-orange-500 rounded-full" />
                            <p>Loading tasks...</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader className="bg-slate-950/50">
                                    <TableRow className="border-slate-800 hover:bg-transparent">
                                        <TableHead className="text-slate-400 font-medium h-12">Employee</TableHead>
                                        <TableHead className="text-slate-400 font-medium">Task Description</TableHead>
                                        <TableHead className="text-slate-400 font-medium">Due Date</TableHead>
                                        <TableHead className="text-slate-400 font-medium">Status</TableHead>
                                        <TableHead className="text-slate-400 font-medium">Priority</TableHead>
                                        <TableHead className="text-slate-400 font-medium text-right pr-6">Assigned By</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {tasks.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={6} className="text-center py-10 text-slate-500">
                                                No tasks found matching your criteria.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        tasks.map((task) => (
                                            <TableRow
                                                key={task._id}
                                                className="border-slate-800 hover:bg-slate-800/30 transition-colors group/row "
                                            >
                                                <TableCell className="font-medium text-slate-200">
                                                    <div className="flex items-center gap-2">

                                                        {task.employeeName}
                                                    </div>
                                                </TableCell>

                                                <TableCell className="text-slate-400 max-w-50 truncate">
                                                    {task.description}
                                                </TableCell>

                                                <TableCell className="text-slate-400">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-3.5 h-3.5 text-slate-600" />
                                                        {new Date(task.dueDate).toLocaleDateString()}
                                                    </div>
                                                </TableCell>

                                                <TableCell>
                                                    <Badge variant="outline" className={`px-2 py-1 rounded-md border ${getStatusColor(task.status)}`}>
                                                        {task.status}
                                                    </Badge>
                                                </TableCell>

                                                <TableCell>
                                                    <Badge variant="outline" className={`px-2 py-1 rounded-md border capitalize ${getPriorityColor(task.priority)}`}>
                                                        {task.priority}
                                                    </Badge>
                                                </TableCell>

                                                <TableCell className="text-slate-500 text-right pr-6 text-xs font-mono">
                                                    <span className="bg-slate-900 px-2 py-1 rounded border border-slate-800">
                                                        {task.createdBy}
                                                    </span>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
