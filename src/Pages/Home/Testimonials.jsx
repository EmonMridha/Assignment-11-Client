import React from "react";

const testimonials = [
    {
        name: "Sara Ahmed",
        role: "Volunteer",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "Voluntopia helped me find a local opportunity that made a real impact in my community!"
    },
    {
        name: "John Doe",
        role: "Volunteer",
        photo: "https://randomuser.me/api/portraits/men/46.jpg",
        quote: "I was able to contribute my skills to a project I really care about. Highly recommend!"
    },
    {
        name: "Mina Rahman",
        role: "Organizer",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "Thanks to Voluntopia, we found dedicated volunteers who made our event a success."
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 my-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-black text-center mb-12">What Our Volunteers Say</h2>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
                            <img
                                src={t.photo}
                                alt={t.name}
                                className="w-20 h-20 rounded-full mb-4 object-cover"
                            />
                            <p className="text-gray-700 mb-4">"{t.quote}"</p>
                            <h3 className="text-black font-semibold text-lg">{t.name}</h3>
                            <span className="text-sm text-gray-500">{t.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
