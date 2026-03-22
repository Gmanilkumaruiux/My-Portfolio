import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, GraduationCap, Rocket } from 'lucide-react';

export default function About() {
    const cards = [
        {
            icon: <GraduationCap size={24} className="text-blue-600" />,
            title: "Engineering",
            desc: "B.Tech CSE (AI) Student"
        },
        {
            icon: <Palette size={24} className="text-purple-600" />,
            title: "Design",
            desc: "Pixel-Perfect UI/UX"
        },
        {
            icon: <Code size={24} className="text-green-600" />,
            title: "Development",
            desc: "React & Modern Frontend"
        },
        {
            icon: <Rocket size={24} className="text-orange-600" />,
            title: "Innovation",
            desc: "Building Impactful Products"
        }
    ];

    return (
        <section id="about" className="py-16 bg-white relative overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">About Me</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Design-Driven <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Creative Engineer.
                            </span>
                        </h3>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            I don't just write code; I build experiences. As a <strong>CSE (AI)</strong> student, I bridge the gap between abstract design principles and efficient technical execution.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            My goal is simple: to create digital products that look beautiful and work flawlessly.
                        </p>
                    </motion.div>

                    {/* Right Column: Animated Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 1)",
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                className="p-6 bg-slate-50 border border-slate-100 rounded-2xl transition-all cursor-default"
                            >
                                <div className="p-3 bg-white rounded-xl shadow-sm inline-block mb-4">
                                    {card.icon}
                                </div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1">{card.title}</h4>
                                <p className="text-slate-500 text-sm font-medium">{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
