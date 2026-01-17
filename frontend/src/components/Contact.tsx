import { Globe, Mail } from "lucide-react";

const ContactSection = () => {
    return (
        <section className=" w-full py-24 h-[90vh] flex items-center bg-slate-950 text-slate-200 ">

            <div className="relative z-10 container mx-auto px-6 md:px-20 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                                Contact TaskManager
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                We’d love to hear from you. Reach out for support, feedback, or
                                collaboration opportunities.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-800">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-orange-500">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">Headquarters</p>
                                    <p className="text-slate-500 text-sm">Planet Earth, Solar System</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-purple-500">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-white">Email Us</p>
                                    <a href="mailto:support@taskmanager.org" className="text-slate-500 text-sm hover:text-orange-400 transition-colors">
                                        support@taskmanager.org
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute -left-12 top-0 bottom-0 w-px bg-linear-to-b from-slate-800 via-slate-800 to-transparent"></div>

                        <div className="prose prose-invert prose-lg">
                            <p className="text-slate-400 leading-8">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex similique architecto temporibus quos, error, veniam reiciendis accusantium eligendi nam natus maiores ipsum dignissimos cum labore et illo quasi! Nemo."
                            </p>
                            <p className="text-slate-500 text-sm mt-6 italic">
                                — The TaskManager Team
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
