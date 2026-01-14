"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskList;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const input_1 = require("@/components/ui/input");
const select_1 = require("@/components/ui/select");
const table_1 = require("@/components/ui/table");
const badge_1 = require("@/components/ui/badge");
const lucide_react_1 = require("lucide-react");
const axios_1 = __importDefault(require("@/lib/axios"));
const sonner_1 = require("sonner");
const demoTasks = [
    {
        _id: "2222222222222",
        employeeName: "Aarav Sharma",
        description: "Fix login issue on alumni portal",
        priority: "high",
        createdBy: "6965f92c9c0439c3fa06fc37",
        status: "in-progress",
        dueDate: "2026-01-15",
    },
    {
        _id: "22222222222dd22",
        employeeName: "Neha Patel",
        description: "Review alumni profile verification documents",
        priority: "medium",
        status: "pending",
        createdBy: "6965f92c9c0439c3fa06fc37",
        dueDate: "2026-01-18",
    },
    {
        _id: "222222222223d22",
        employeeName: "Rohit Verma",
        description: "Deploy latest backend API to production",
        priority: "high",
        status: "pending", createdBy: "6965f92c9c0439c3fa06fc37",
        dueDate: "2026-01-14",
    },
];
function TaskList() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [tasks, setTasks] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [search, setSearch] = (0, react_1.useState)("");
    const [status, setStatus] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        fetchTasks();
    }, []);
    const fetchTasks = async () => {
        try {
            const params = new URLSearchParams();
            if (search)
                params.append("search", search);
            if (status)
                params.append("status", status);
            const res = await axios_1.default.get(`/tasks`);
            setTasks(res.data);
        }
        catch (err) {
            console.log("error while fetching task ", err);
            sonner_1.toast.error("Failed to load tasks");
        }
        finally {
            setLoading(false);
        }
    };
    const getStatusColor = (status) => {
        if (status === "completed")
            return "bg-green-100 text-green-900";
        if (status === "in-progress")
            return "bg-blue-100 text-blue-900";
        return "bg-yellow-100 text-yellow-900";
    };
    const getPriorityColor = (priority) => {
        if (priority === "high")
            return "bg-red-100 text-red-800";
        if (priority === "medium")
            return "bg-orange-100 text-orange-800";
        return "bg-gray-100 text-gray-800";
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-6 flex flex-col w-screen px-12 pt-3.5", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex  justify-between items-center ", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold ", children: "Assigned Tasks" }), (0, jsx_runtime_1.jsx)("p", { className: "text-muted-foreground", children: "Track and manage all assigned  tasks" })] }) }), (0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsx)(card_1.CardHeader, { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col sm:flex-row justify-between gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Task Directory" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "All tasks assigned by admins" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Search, { className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" }), (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "Search by employee...", className: "pl-8", value: search, onChange: (e) => setSearch(e.target.value), onKeyDown: (e) => e.key === "Enter" && fetchTasks() })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { value: status, onValueChange: setStatus, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "w-40", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Status" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "all", children: "All" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "pending", children: "Pending" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "in-progress", children: "In Progress" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "completed", children: "Completed" })] })] })] })] }) }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { children: loading ? ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center py-10", children: (0, jsx_runtime_1.jsx)("div", { className: "animate-spin h-8 w-8 border-b-2 border-primary rounded-full" }) })) : ((0, jsx_runtime_1.jsxs)(table_1.Table, { children: [(0, jsx_runtime_1.jsx)(table_1.TableHeader, { children: (0, jsx_runtime_1.jsxs)(table_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(table_1.TableHead, { children: "Employee" }), (0, jsx_runtime_1.jsx)(table_1.TableHead, { children: "Description" }), (0, jsx_runtime_1.jsx)(table_1.TableHead, { children: "Due" }), (0, jsx_runtime_1.jsx)(table_1.TableHead, { children: "Status" }), (0, jsx_runtime_1.jsx)(table_1.TableHead, { children: "Priority" }), (0, jsx_runtime_1.jsx)(table_1.TableHead, { children: "Assigned By" })] }) }), (0, jsx_runtime_1.jsx)(table_1.TableBody, { children: tasks.map((task) => ((0, jsx_runtime_1.jsxs)(table_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(table_1.TableCell, { className: "font-semibold", children: task.employeeName }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { children: task.description }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { children: new Date(task.dueDate).toLocaleDateString() }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { children: (0, jsx_runtime_1.jsx)(badge_1.Badge, { className: getStatusColor(task.status), children: task.status }) }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { children: (0, jsx_runtime_1.jsx)(badge_1.Badge, { className: getPriorityColor(task.priority), children: task.priority }) }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { className: "text-xs text-gray-500", children: task.createdBy })] }, task._id))) })] })) })] })] }));
}
//# sourceMappingURL=TaskList.js.map