import { useEffect, useState } from "react" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
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
            const res = await api.get(`/tasks`)
            setTasks(res.data)
        } catch (err: any) {
            console.log("error while fetching task ", err)
            toast.error("Failed to load tasks")
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
        <div className="space-y-6 flex flex-col w-screen px-12 pt-3.5">
            <div className="flex  justify-between items-center ">
                <div>
                    <h2 className="text-3xl font-bold ">Assigned Tasks</h2>
                    <p className="text-muted-foreground">Track and manage all assigned  tasks</p>
                </div>
              
            </div>

            <Card>
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                            <CardTitle>Task Directory</CardTitle>
                            <CardDescription>All tasks assigned by admins</CardDescription>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search by employee..."
                                    className="pl-8"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && fetchTasks()}
                                />
                            </div>

                            <Select value={status} onValueChange={setStatus}>
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                            </Select>


                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    {loading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-spin h-8 w-8 border-b-2 border-primary rounded-full" />
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Employee</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Due</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Priority</TableHead>
                                    <TableHead>Assigned By</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {tasks.map((task) => (
                                    <TableRow key={task._id}>
                                        <TableCell className="font-semibold">{task.employeeName}</TableCell>
                                        <TableCell>{task.description}</TableCell>
                                        <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                                        </TableCell>
                                        <TableCell className="text-xs text-gray-500">
                                            {task.createdBy}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
