import { Link } from 'react-router-dom';

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

    return (
        <footer className="  px-10 py-16">
            <div className='border border-black  mb-5' />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {footerItems.map((section) => (
                    <div key={section.section}>
                        <h4 className="text-black font-semibold mb-4">
                            {section.section}
                        </h4>

                        <ul className="space-y-3">
                            {section.links.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="hover:text-gray-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm">
                © {new Date().getFullYear()} TaskManager. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
