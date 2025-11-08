import React from "react";

const tips = [
    {
        title: "Choose What You Love",
        description: "Select volunteer opportunities that match your interests and skills to stay motivated and make a bigger impact.",
        icon: "💖"
    },
    {
        title: "Be Consistent",
        description: "Regular participation helps build trust and makes a lasting difference in the community.",
        icon: "⏰"
    },
    {
        title: "Communicate Clearly",
        description: "Always stay in touch with organizers and fellow volunteers to ensure smooth coordination.",
        icon: "💬"
    },
    {
        title: "Learn and Adapt",
        description: "Be open to learning new skills and adapting to different situations to maximize your contribution.",
        icon: "📚"
    },
    {
        title: "Respect Everyone",
        description: "Treat fellow volunteers, beneficiaries, and organizers with kindness and respect at all times.",
        icon: "🤝"
    },
    {
        title: "Share Your Experience",
        description: "Inspire others by sharing your volunteering journey and the impact you’ve made.",
        icon: "📣"
    }
];

const Tips = () => {
    return (
        <section className="py-16 my-50 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-black text-center mb-12">Tips for Volunteers</h2>
                
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {tips.map((tip, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-start">
                            <div className="text-4xl mb-4">{tip.icon}</div>
                            <h3 className="text-xl text-black font-semibold mb-2">{tip.title}</h3>
                            <p className="text-gray-700">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tips;
