"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const AuthContext_1 = require("@/contexts/AuthContext");
const dropdown_menu_1 = require("@/components/ui/dropdown-menu");
const navItems = [
    {
        name: "Home",
        link: "/",
        image: lucide_react_1.Home
    },
    {
        name: "Features",
        link: "/features",
        image: lucide_react_1.File
    },
    {
        name: "Pricing",
        link: "/pricing",
        image: lucide_react_1.IndianRupee
    },
    {
        name: "Contact",
        link: "/contact",
        image: lucide_react_1.Contact
    },
    {
        name: "Add Task",
        link: "/admin/task/assign",
        image: lucide_react_1.UserPlus
    },
    {
        name: "Tasks List",
        link: "/admin/employees/tasks",
        image: lucide_react_1.ClipboardList
    },
];
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, react_1.useState)(false);
    const location = (0, react_router_dom_1.useLocation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user, logout } = (0, AuthContext_1.useAuth)();
    const isActiveLink = (link) => {
        return location.pathname === link;
    };
    const handleNavClick = (link) => {
        navigate(link);
        setIsMobileMenuOpen(false);
    };
    return ((0, jsx_runtime_1.jsx)("nav", { className: "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex h-16 items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2 cursor-pointer", onClick: () => handleNavClick('/'), children: [(0, jsx_runtime_1.jsx)("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary to-purple-600", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Building, { className: "h-6 w-6 text-white" }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'text-xl bg-linear-to-bl from-violet-600 to-gray-800 bg-clip-text text-transparent font-bold ', children: [(0, jsx_runtime_1.jsx)("span", { className: " ", children: "Task" }), (0, jsx_runtime_1.jsx)("span", { className: " ", children: "Manager" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "hidden lg:ml-10 lg:flex lg:items-center lg:space-x-1", children: navItems.map((item) => {
                                        const Icon = item.image;
                                        const isActive = isActiveLink(item.link);
                                        return ((0, jsx_runtime_1.jsxs)(button_1.Button, { variant: isActive ? "default" : "ghost", className: `relative px-4 ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:text-primary'}`, onClick: () => handleNavClick(item.link), children: [(0, jsx_runtime_1.jsx)(Icon, { className: "mr-2 h-4 w-4" }), item.name, isActive && ((0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary" }))] }, item.name));
                                    }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4", children: [(0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", size: "icon", className: "relative", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Bell, { className: "h-5 w-5" }), (0, jsx_runtime_1.jsx)("span", { className: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white", children: "3" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "hidden lg:flex items-center space-x-4 border-l pl-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-right", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium text-gray-900", children: "Active Projects" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500", children: "12 running" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-right", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium text-gray-900", children: "Team Members" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500", children: "45 online" })] })] }), user ? ((0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-primary/10", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold text-primary", children: user.name?.charAt(0).toUpperCase() || 'U' }) }), (0, jsx_runtime_1.jsxs)("div", { className: "hidden md:block text-left", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium", children: user.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500", children: user.role })] }), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "h-4 w-4" })] }) }), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuContent, { align: "end", className: "w-56", children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuLabel, { children: "My Account" }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { onClick: () => navigate('/admin'), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.BarChart, { className: "mr-2 h-4 w-4" }), "Dashboard"] }), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { onClick: () => navigate('/admin/employees'), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Users, { className: "mr-2 h-4 w-4" }), "Manage Employees"] }), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { onClick: () => navigate('/admin/employees/create'), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.UserPlus, { className: "mr-2 h-4 w-4" }), "Add New Employee"] }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Settings, { className: "mr-2 h-4 w-4" }), "Settings"] }), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { className: "text-red-600", onClick: () => {
                                                        logout();
                                                        setIsMobileMenuOpen(false);
                                                    }, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.LogOut, { className: "mr-2 h-4 w-4" }), "Logout"] })] })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", onClick: () => navigate('/admin/login'), children: "Login" }), (0, jsx_runtime_1.jsx)(button_1.Button, { onClick: () => navigate('/'), children: "Get Started" })] })), (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", size: "icon", className: "lg:hidden", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), children: isMobileMenuOpen ? ((0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "h-6 w-6" })) : ((0, jsx_runtime_1.jsx)(lucide_react_1.Menu, { className: "h-6 w-6" })) })] })] }), isMobileMenuOpen && ((0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden border-t mt-2 py-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative mb-4", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" }), (0, jsx_runtime_1.jsx)("input", { type: "search", placeholder: "Search...", className: "pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-1", children: [navItems.map((item) => {
                                    const Icon = item.image;
                                    const isActive = isActiveLink(item.link);
                                    return ((0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", className: `w-full justify-start ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-700'}`, onClick: () => handleNavClick(item.link), children: [(0, jsx_runtime_1.jsx)(Icon, { className: "mr-3 h-4 w-4" }), item.name] }, item.name));
                                }), user && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "pt-4 border-t", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-3 px-4 py-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary/20 to-primary/10", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold text-primary text-lg", children: user.name?.charAt(0).toUpperCase() || 'U' }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "font-medium", children: user.name }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-500", children: user.email }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-primary", children: user.role })] })] }) }), (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", className: "w-full justify-start text-red-600", onClick: () => {
                                                logout();
                                                setIsMobileMenuOpen(false);
                                            }, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.LogOut, { className: "mr-3 h-4 w-4" }), "Logout"] })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 grid grid-cols-2 gap-4 border-t pt-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-bold text-gray-900", children: "12" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500", children: "Active Projects" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-bold text-gray-900", children: "48" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500", children: "Team Members" })] })] })] }))] }) }));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map