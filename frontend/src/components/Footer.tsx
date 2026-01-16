import { Command, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {

    const footerItems = [
        {
            section: "Product",
            links: [
                { name: "Features", path: "/features" },
                { name: "Integrations", path: "/integrations" },
                { name: "Pricing", path: "/pricing" },
                { name: "Changelog", path: "/changelog" },
            ],
        },
        {
            section: "Resources",
            links: [
                { name: "Documentation", path: "/docs" },
                { name: "API Reference", path: "/api" },
                { name: "Community", path: "/community" },
                { name: "Help Center", path: "/help" },
            ],
        },
        {
            section: "Company",
            links: [
                { name: "About", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
            ],
        },
    ];

    return (
        <footer className="relative bg-slate-950 pt-20 pb-10 border-t border-slate-800 overflow-hidden">
 
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1px bg-linear-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>

            {/* Background Grid Pattern (Low Opacity) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                                <Command className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                TaskManager
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Streamlining workflows for the next generation of businesses.
                            Secure, scalable, and designed for speed.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid (Takes up remaining 4 columns) */}
                    <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {footerItems.map((section) => (
                            <div key={section.section}>
                                <h4 className="text-slate-100 font-bold tracking-wide mb-6 text-sm uppercase">
                                    {section.section}
                                </h4>

                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.path}>
                                            <Link
                                                to={link.path}
                                                className="text-slate-400 text-sm hover:text-orange-400 transition-colors duration-200 block hover:translate-x-1"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span>All Systems Operational</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <span>© {new Date().getFullYear()} TaskManager Inc.</span>
                        <div className="flex gap-6">
                            <Link to="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                            <Link to="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
