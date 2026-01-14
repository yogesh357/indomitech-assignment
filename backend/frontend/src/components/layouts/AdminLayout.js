"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const AuthContext_1 = require("@/contexts/AuthContext");
// import Sidebar from '../Sidebar'
const Header_1 = __importDefault(require("../Header"));
const lucide_react_1 = require("lucide-react");
const AdminLayout = () => {
    const { user } = (0, AuthContext_1.useAuth)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-background", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Sidebar, {}), (0, jsx_runtime_1.jsxs)("div", { className: "lg:pl-72", children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)("main", { className: "py-10", children: (0, jsx_runtime_1.jsx)("div", { className: "px-4 sm:px-6 lg:px-8", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) }) })] })] }));
};
exports.default = AdminLayout;
//# sourceMappingURL=AdminLayout.js.map