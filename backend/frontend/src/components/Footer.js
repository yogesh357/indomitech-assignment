"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
function Footer() {
    const footerItems = [
        {
            section: "Company",
            links: [
                {
                    name: "About Us",
                    path: "/about-us",
                },
                {
                    name: "Contact",
                    path: "/contact",
                },
                {
                    name: "Careers",
                    path: "/careers",
                },
                {
                    name: "Blog",
                    path: "/blog",
                },
            ],
        },
        {
            section: "Product",
            links: [
                {
                    name: "Features",
                    path: "/features",
                },
                {
                    name: "Pricing",
                    path: "/pricing",
                },
                {
                    name: "Integrations",
                    path: "/integrations",
                },
                {
                    name: "Changelog",
                    path: "/changelog",
                },
            ],
        },
        {
            section: "Resources",
            links: [
                {
                    name: "Documentation",
                    path: "/docs",
                },
                {
                    name: "Support",
                    path: "/support",
                },
                {
                    name: "FAQs",
                    path: "/faqs",
                },
                {
                    name: "Community",
                    path: "/community",
                },
            ],
        },
        {
            section: "Legal",
            links: [
                {
                    name: "Privacy Policy",
                    path: "/privacy-policy",
                },
                {
                    name: "Terms of Service",
                    path: "/terms",
                },
                {
                    name: "Cookie Policy",
                    path: "/cookies",
                },
            ],
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("footer", { className: "  px-10 py-16", children: [(0, jsx_runtime_1.jsx)("div", { className: 'border border-black  mb-5' }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto", children: footerItems.map((section) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-black font-semibold mb-4", children: section.section }), (0, jsx_runtime_1.jsx)("ul", { className: "space-y-3", children: section.links.map((link) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: link.path, className: "hover:text-gray-400 transition-colors", children: link.name }) }, link.path))) })] }, section.section))) }), (0, jsx_runtime_1.jsxs)("div", { className: "border-t border-slate-800 mt-12 pt-6 text-center text-sm", children: ["\u00A9 ", new Date().getFullYear(), " TaskManager. All rights reserved."] })] }));
}
exports.default = Footer;
//# sourceMappingURL=Footer.js.map