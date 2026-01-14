"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const lucide_react_1 = require("lucide-react");
const Footer_1 = __importDefault(require("@/components/Footer"));
const Navbar_1 = __importDefault(require("@/components/Navbar"));
const react_router_dom_1 = require("react-router-dom");
const LandingPage = () => {
    const features = [
        {
            title: "Secure Admin Authentication",
            description: "Role-based login system that ensures only authorized administrators can access and manage employee data.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.ShieldCheck, { className: "h-8 w-8" }),
        },
        {
            title: "Employee Management",
            description: "Create, view, update, and manage employees directly from the admin dashboard.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Users, { className: "h-8 w-8" }),
        },
        {
            title: "Task Assignment",
            description: "Assign tasks to employees and track their progress in real time.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.ClipboardList, { className: "h-8 w-8" }),
        },
        {
            title: "Backend API Integration",
            description: "All data is powered by a REST API with secure authentication and persistent storage.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Server, { className: "h-8 w-8" }),
        },
        {
            title: "Role-Based Access",
            description: "Admins and employees only see what they are allowed to access.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.UserCog, { className: "h-8 w-8" }),
        },
        {
            title: "Scalable Architecture",
            description: "Built with React, Node.js, and modern best practices to scale with your business.",
            icon: (0, jsx_runtime_1.jsx)(lucide_react_1.Layers, { className: "h-8 w-8" }),
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen bg-linear-to-b from-background to-muted/30 ", children: (0, jsx_runtime_1.jsxs)("div", { className: '', children: [(0, jsx_runtime_1.jsxs)("section", { className: "container mx-auto px-4 py-20 text-center", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight mb-6", children: ["Streamline Your Workflow with", ' ', (0, jsx_runtime_1.jsx)("span", { className: "bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent", children: "TaskManager" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto mb-10", children: "A modern HR and employee management platform that helps businesses manage staff, assign tasks, and track productivity through a secure admin dashboard." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { size: "lg", className: "text-lg px-8", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/admin/login", children: "Admin Login" }) }), (0, jsx_runtime_1.jsx)(button_1.Button, { size: "lg", variant: "outline", className: "text-lg px-8 ", asChild: true, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/admin/employees", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Rocket, { className: "mr-2 h-5 w-5" }), "View Employee Module"] }) })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "container mx-auto px-4 py-20", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl font-bold text-center mb-4", children: "Powerful Features" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto", children: "Built for businesses that need security, structure, and scalability." }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => ((0, jsx_runtime_1.jsxs)(card_1.Card, { className: "border-2 border-gray-600 bg-linear-to-bl from-white to-gray-200", children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)("div", { className: "text-primary mb-4", children: feature.icon }), (0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: feature.title })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { children: (0, jsx_runtime_1.jsx)(card_1.CardDescription, { className: "text-base", children: feature.description }) })] }, index))) })] }), (0, jsx_runtime_1.jsx)("section", { className: "container mx-auto px-4 py-20 text-center", children: (0, jsx_runtime_1.jsx)(card_1.Card, { className: "max-w-4xl mx-auto bg-linear-to-r from-primary/10 to-purple-500/10", children: (0, jsx_runtime_1.jsxs)(card_1.CardContent, { className: "pt-12 pb-12", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl font-bold mb-6", children: "Try the Admin Dashboard Live" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Log in as an admin and explore the employee management system with real Backend Integration." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { size: "lg", asChild: true, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/admin/login", children: "Login as Admin" }) }), (0, jsx_runtime_1.jsx)(button_1.Button, { size: "lg", variant: "outline", asChild: true, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/admin/employees", children: "Open Employee Module" }) })] })] }) }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }) }));
};
exports.default = LandingPage;
//# sourceMappingURL=LandingPage.js.map