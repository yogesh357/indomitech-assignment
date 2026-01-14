"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskCreate;
const jsx_runtime_1 = require("react/jsx-runtime");
// import { useState, useEffect } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { useNavigate } from 'react-router-dom'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { Textarea } from '@/components/ui/textarea'
// import { toast } from 'sonner'
// import axiosInstance from '@/lib/axios.ts'
// const employeeSchema = z.object({
//     username: z.string().min(1, 'User name is required'),
//     department: z.string().min(1, 'Department is required'),
//     position: z.string().min(1, 'Position is required'),
//     salary: z.number().min(0, 'Salary must be positive'),
//     hireDate: z.string().min(1, 'Hire date is required'),
//     phone: z.string().min(10, 'Phone number is required'),
//     address: z.string().min(1, 'Address is required'),
//     skills: z.string(),
//     status: z.enum(['active', 'on-leave', 'terminated']),
//     managerId: z.string().optional(),
// })
// type EmployeeFormData = z.infer<typeof employeeSchema>
// const EmployeeCreate = () => {
//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(false)
//     const [users, setUsers] = useState<any[]>([])
//     const form = useForm<EmployeeFormData>({
//         resolver: zodResolver(employeeSchema),
//         defaultValues: {
//             skills: '',
//             status: 'active',
//         },
//     })
//     useEffect(() => {
//         fetchUsers()
//     }, [])
//     const fetchUsers = async () => {
//         try {
//             const response = await axiosInstance.get('/users')
//             setUsers(response.data)
//         } catch (error) {
//             console.error('Failed to fetch users:', error)
//         }
//     }
//     const onSubmit = async (data: EmployeeFormData) => {
//         setLoading(true)
//         try {
//             const employeeData = {
//                 ...data,
//                 skills: data.skills.split(',').map(skill => skill.trim()).filter(skill => skill),
//             }
//             await axiosInstance.post('/employees', employeeData)
//             toast.success("'Employee created successfully'")
//             navigate('/admin/employees')
//         } catch (error: any) {
//             toast.error(error.response?.data?.message || 'Failed to create employee')
//         } finally {
//             setLoading(false)
//         }
//     }
//     return (
//         <div className="space-y-6 mt-6 mx-20">
//             <div className='text-center'>
//                 <h2 className="text-3xl font-bold ">Add New Employee</h2>
//                 <p className="font-semibold text-gray-700">
//                     Fill in the details to add a new employee to your organization.
//                 </p>
//             </div>
//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)}>
//                     <div className="grid gap-6">
//                         <Card>
//                             <CardHeader>
//                                 <CardTitle>Basic Information</CardTitle>
//                                 <CardDescription>
//                                     Employee's basic information and contact details
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent className="space-y-4">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                     <FormField
//                                         control={form.control}
//                                         name="username"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>User </FormLabel>
//                                                 <Input placeholder="employee name" {...field} />
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <FormField
//                                         control={form.control}
//                                         name="department"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Department </FormLabel>
//                                                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                                     <FormControl>
//                                                         <SelectTrigger>
//                                                             <SelectValue placeholder="Select department" />
//                                                         </SelectTrigger>
//                                                     </FormControl>
//                                                     <SelectContent>
//                                                         <SelectItem value="Web developer">Web developer</SelectItem>
//                                                         <SelectItem value="Marketing">Marketing</SelectItem>
//                                                         <SelectItem value="Sales">Sales</SelectItem>
//                                                         <SelectItem value="HR">HR</SelectItem>
//                                                         <SelectItem value="Finance">Finance</SelectItem>
//                                                         <SelectItem value="Operations">Operations</SelectItem>
//                                                     </SelectContent>
//                                                 </Select>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <FormField
//                                         control={form.control}
//                                         name="position"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Position </FormLabel>
//                                                 <FormControl>
//                                                     <Input placeholder="e.g., Software Engineer" {...field} />
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <FormField
//                                         control={form.control}
//                                         name="salary"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Salary </FormLabel>
//                                                 <FormControl>
//                                                     <Input
//                                                         type="number"
//                                                         placeholder="e.g., 75000"
//                                                         {...field}
//                                                         onChange={e => field.onChange(parseFloat(e.target.value) || 0)}
//                                                     />
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <FormField
//                                         control={form.control}
//                                         name="hireDate"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Hire Date </FormLabel>
//                                                 <FormControl>
//                                                     <Input type="date" {...field} />
//                                                 </FormControl>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                     <FormField
//                                         control={form.control}
//                                         name="status"
//                                         render={({ field }) => (
//                                             <FormItem>
//                                                 <FormLabel>Status </FormLabel>
//                                                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                                                     <FormControl>
//                                                         <SelectTrigger>
//                                                             <SelectValue placeholder="Select status" />
//                                                         </SelectTrigger>
//                                                     </FormControl>
//                                                     <SelectContent>
//                                                         <SelectItem value="active">Active</SelectItem>
//                                                         <SelectItem value="on-leave">On Leave</SelectItem>
//                                                         <SelectItem value="terminated">Terminated</SelectItem>
//                                                     </SelectContent>
//                                                 </Select>
//                                                 <FormMessage />
//                                             </FormItem>
//                                         )}
//                                     />
//                                 </div>
//                                 <FormField
//                                     control={form.control}
//                                     name="phone"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Phone Number </FormLabel>
//                                             <FormControl>
//                                                 <Input placeholder="+1 (555) 123-4567" {...field} />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />
//                                 <FormField
//                                     control={form.control}
//                                     name="address"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Address </FormLabel>
//                                             <FormControl>
//                                                 <Textarea placeholder="Full address" {...field} />
//                                             </FormControl>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />
//                                 <FormField
//                                     control={form.control}
//                                     name="skills"
//                                     render={({ field }) => (
//                                         <FormItem>
//                                             <FormLabel>Skills</FormLabel>
//                                             <FormControl>
//                                                 <Input
//                                                     placeholder="e.g., JavaScript, React, Node.js (comma separated)"
//                                                     {...field}
//                                                 />
//                                             </FormControl>
//                                             <FormDescription>
//                                                 Enter skills separated by commas
//                                             </FormDescription>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />
//                             </CardContent>
//                         </Card>
//                         <div className="flex justify-end gap-4">
//                             <Button
//                                 type="button"
//                                 variant="outline"
//                                 onClick={() => navigate('/admin/employees')}
//                             >
//                                 Cancel
//                             </Button>
//                             <Button type="submit" disabled={loading}>
//                                 {loading ? 'Creating...' : 'Create Employee'}
//                             </Button>
//                         </div>
//                     </div>
//                 </form>
//             </Form>
//         </div>
//     )
// }
// export default EmployeeCreate
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const zod_1 = require("@hookform/resolvers/zod");
const zod_2 = require("zod");
const react_router_dom_1 = require("react-router-dom");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const form_1 = require("@/components/ui/form");
const input_1 = require("@/components/ui/input");
const select_1 = require("@/components/ui/select");
const textarea_1 = require("@/components/ui/textarea");
const sonner_1 = require("sonner");
const axios_1 = __importDefault(require("@/lib/axios"));
const taskSchema = zod_2.z.object({
    title: zod_2.z.string().min(3, "Task title is required"),
    description: zod_2.z.string().min(5, "Task description is required"),
    employeeName: zod_2.z.string().min(1, "Employee is required"),
    priority: zod_2.z.enum(["low", "medium", "high"]),
    status: zod_2.z.enum(["pending", "in-progress", "completed"]),
    dueDate: zod_2.z.string().min(1, "Due date is required"),
});
function TaskCreate() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(taskSchema),
        defaultValues: {
            priority: "medium",
            status: "pending",
        },
    });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await axios_1.default.post("/tasks", data);
            sonner_1.toast.success("Task assigned successfully");
            navigate("/admin/employee/tasks");
        }
        catch (err) {
            sonner_1.toast.error(err.response?.data?.message || "Failed to assign task");
        }
        finally {
            setLoading(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-6 mt-6 mx-20", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold", children: "Assign New Task" }), (0, jsx_runtime_1.jsx)("p", { className: "font-semibold text-gray-700", children: "Assign work to employees and track their progress" })] }), (0, jsx_runtime_1.jsx)(form_1.Form, { ...form, children: (0, jsx_runtime_1.jsx)("form", { onSubmit: form.handleSubmit(onSubmit), children: (0, jsx_runtime_1.jsxs)("div", { className: "grid gap-6", children: [(0, jsx_runtime_1.jsx)(card_1.Card, { children: (0, jsx_runtime_1.jsxs)(card_1.CardContent, { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "employeeName", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { children: "Employee name" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "enter name of employee to which task is going to assign . . . ", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "priority", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { children: "Priority" }), (0, jsx_runtime_1.jsxs)(select_1.Select, { onValueChange: field.onChange, defaultValue: field.value, children: [(0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select priority" }) }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "low", children: "Low" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "medium", children: "Medium" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "high", children: "High" })] })] }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "dueDate", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { children: "Due Date" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(input_1.Input, { type: "date", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "status", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { children: "Status" }), (0, jsx_runtime_1.jsxs)(select_1.Select, { onValueChange: field.onChange, defaultValue: field.value, children: [(0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select status" }) }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "pending", children: "Pending" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "in-progress", children: "In Progress" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "completed", children: "Completed" })] })] }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) })] }), (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "title", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { children: "Task Title" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "e.g. Build login page", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "description", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { children: "Description" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { placeholder: "Describe the task...", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-end gap-4", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { type: "button", variant: "outline", onClick: () => navigate("/admin/employees/tasks"), children: "Cancel" }), (0, jsx_runtime_1.jsx)(button_1.Button, { type: "submit", disabled: loading, children: loading ? "Assigning..." : "Assign Task" })] })] }) }) })] }));
}
//# sourceMappingURL=TaskCreate.js.map