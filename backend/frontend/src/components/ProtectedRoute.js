"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const AuthContext_1 = require("@/contexts/AuthContext");
const react_1 = require("react");
const ProtectedRoute = () => {
    const { user, isLoading } = (0, AuthContext_1.useAuth)();
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center min-h-screen", children: (0, jsx_runtime_1.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary" }) }));
    }
    if (!user) {
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "/admin/login", replace: true });
    }
    // if (requiredRole && user.role !== requiredRole) {
    //     // return <Navigate to="/admin" replace />
    //     return <div>You Don't have permission to acces this route</div>
    // }
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
};
exports.default = ProtectedRoute;
//# sourceMappingURL=ProtectedRoute.js.map