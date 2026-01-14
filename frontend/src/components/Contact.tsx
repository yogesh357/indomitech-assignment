const ContactSection = () => {
    return (
        <section className="min-h-[70vh]  px-6 md:px-20 flex items-center bg-green-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Contact TaskManager
                    </h2>

                    <p className="text-gray-600">
                        We’d love to hear from you. Reach out for support, feedback, or
                        collaboration opportunities.
                    </p>

                    <div className="text-sm text-gray-700">
                        <p>
                            <span className="font-medium">Address:</span> On Earth
                        </p>
                        <p>
                            <span className="font-medium">Email:</span> support@taskmanager.org
                        </p>
                    </div>
                </div>

                <div className="text-gray-800 leading-relaxed">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex similique architecto temporibus quos, error, veniam reiciendis accusantium eligendi nam natus maiores ipsum dignissimos cum labore et illo quasi! Nemo.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;
