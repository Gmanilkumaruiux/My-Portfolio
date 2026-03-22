import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Zap, Map } from 'lucide-react';

const achievements = [
    {
        id: 1,
        title: "Runners— Amaravathi Quantum Vally Hackathon",
        icon: <Award size={32} className="text-purple-600" />
    },
    {
        id: 2,
        title: "first Price in Sai Sankethika 2K24 A National Level Tech Fest",
        icon: <Trophy size={32} className="text-blue-600" />
    },
    {
        id: 3,
        title: "Paticipated in Mits-ASHV-2K25 Technical Fest",
        icon: <Star size={32} className="text-yellow-500" />
    },
    {
        id: 4,
        title: "Hackathon — Lovable 24-Hours Vibe Coding Hackathon",
        icon: <Zap size={32} className="text-blue-500" />
    },
    {
        id: 5,
        title: "Participated in Smart India Hackathon",
        icon: <Award size={32} className="text-indigo-600" />
    },
    {
        id: 6,
        title: "Research & Development Cell Member",
        icon: <Map size={32} className="text-green-500" />
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-16 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-2">Milestones</h2>
                    <h3 className="text-4xl font-bold text-slate-900">Milestones & Moments</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto px-2 md:px-0">
                    {achievements.map((item, index) => {
                        // Determine layout: First 2 items wide (3 cols), next 3 items medium (2 cols), last item centered
                        let colSpanClass = "md:col-span-2";
                        if (index < 2) colSpanClass = "md:col-span-3";
                        if (index === 5) colSpanClass = "md:col-span-2 md:col-start-3"; // Center the last item

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                className={`bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 h-full hover:border-purple-100 ${colSpanClass}`}
                            >
                                <div className="mb-4 p-3 bg-slate-50 rounded-full group-hover:bg-purple-50 transition-colors duration-300">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 leading-snug w-full px-2" title={item.title}>
                                    {item.title}
                                </h4>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
