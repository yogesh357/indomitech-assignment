"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("@/components/ui/button");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Dashboard() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col justify-center items-center  h-screen', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'text-center ', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'font-bold text-2xl ', children: " Welcome to Admin Dashboard" }), (0, jsx_runtime_1.jsx)("h4", { className: 'text-gray-600 font-semibold', children: "Manage your all Employees and assigned tasks" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(button_1.Button, { onClick: () => navigate('/admin/task/assign'), children: "Assign New task" }), (0, jsx_runtime_1.jsx)(button_1.Button, { onClick: () => navigate('/admin/employees/tasks'), children: "Manage Task" })] })] }));
}
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map