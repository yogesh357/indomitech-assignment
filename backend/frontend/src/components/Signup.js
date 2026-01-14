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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const zod_1 = require("@hookform/resolvers/zod");
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const react_router_dom_1 = require("react-router-dom");
const zod_2 = __importDefault(require("zod"));
const form_1 = require("./ui/form");
const label_1 = require("./ui/label");
const input_1 = require("./ui/input");
const button_1 = require("./ui/button");
const AuthContext_1 = require("@/contexts/AuthContext");
const signupSchema = zod_2.default.object({
    name: zod_2.default.string(),
    email: zod_2.default.string().email(),
    password: zod_2.default.string().min(6),
});
function Signup() {
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });
    const onSubmit = () => { };
    const { user } = (0, AuthContext_1.useAuth)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (user) {
            navigate("/admin", { replace: true });
        }
    }, [user]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "max-h-screen h-[90vh] flex items-center justify-center bg-slate-50  overflow-y-hidden", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-md  h-[75vh]  rounded-2xl border border-slate-200 bg-white px-8 py-3 shadow-xl", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-8 text-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold tracking-tight text-slate-900 font-serif", children: "Admin Signup" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm text-slate-500", children: "Register to manage employees and tasks" })] }), (0, jsx_runtime_1.jsx)(form_1.Form, { ...form, children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6", children: [(0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "name", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { className: "text-slate-700", children: "Name" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "jonny deep", className: "h-11", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "email", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { className: "text-slate-700", children: "Email" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "jonnydeep@gmail.com", className: "h-11", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(form_1.FormField, { control: form.control, name: "password", render: ({ field }) => ((0, jsx_runtime_1.jsxs)(form_1.FormItem, { children: [(0, jsx_runtime_1.jsx)(form_1.FormLabel, { className: "text-slate-700", children: "Password" }), (0, jsx_runtime_1.jsx)(form_1.FormControl, { children: (0, jsx_runtime_1.jsx)(input_1.Input, { placeholder: "******", className: "h-11", ...field }) }), (0, jsx_runtime_1.jsx)(form_1.FormMessage, {})] })) }), (0, jsx_runtime_1.jsx)(button_1.Button, { type: "submit", className: "w-full h-11 rounded-lg text-base font-medium bg-linear-to-bl from-black/90 to-gray-500", children: "Sign In" })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center mt-6 cursor-pointer", onClick: () => navigate('/admin/login'), children: ["Already have account? ", (0, jsx_runtime_1.jsx)("span", { className: "text-blue-500", children: "  Login" })] })] }) }));
}
exports.default = Signup;
//# sourceMappingURL=Signup.js.map