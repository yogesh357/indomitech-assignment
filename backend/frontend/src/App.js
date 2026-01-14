"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const AuthContext_1 = require("@/contexts/AuthContext");
const LandingPage_1 = __importDefault(require("@/pages/LandingPage"));
const TaskList_1 = __importDefault(require("@/pages/admin/employees/TaskList"));
const TaskCreate_1 = __importDefault(require("@/pages/admin/employees/TaskCreate"));
const ProtectedRoute_1 = __importDefault(require("@/components/ProtectedRoute"));
const sonner_1 = require("sonner");
const Login_1 = __importDefault(require("./components/Login"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Dashboard_1 = __importDefault(require("./pages/admin/Dashboard"));
const UnderDevelopment_1 = __importDefault(require("./components/UnderDevelopment"));
const Signup_1 = __importDefault(require("./components/Signup"));
function App() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(AuthContext_1.AuthProvider, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(LandingPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/admin/login", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/admin/signup", element: (0, jsx_runtime_1.jsx)(Signup_1.default, {}) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/admin", element: (0, jsx_runtime_1.jsx)(ProtectedRoute_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/admin/employees/tasks", element: (0, jsx_runtime_1.jsx)(TaskList_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/admin/task/assign", element: (0, jsx_runtime_1.jsx)(TaskCreate_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/pricing', element: (0, jsx_runtime_1.jsx)(UnderDevelopment_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/tasks', element: (0, jsx_runtime_1.jsx)(UnderDevelopment_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/contact', element: (0, jsx_runtime_1.jsx)(UnderDevelopment_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/features', element: (0, jsx_runtime_1.jsx)(UnderDevelopment_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/*', element: (0, jsx_runtime_1.jsx)("div", { children: "route not found" }) })] }), (0, jsx_runtime_1.jsx)(sonner_1.Toaster, {})] }) }) }));
}
exports.default = App;
//# sourceMappingURL=App.js.map