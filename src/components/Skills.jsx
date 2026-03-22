import React from 'react';
import { motion } from 'framer-motion';
import {
    Palette, Layout, Type, Eye,
    Code, Atom, Wind, Flame, GitBranch,
    Monitor, Search, PenTool
} from 'lucide-react';

const skills = [
    { name: "User Research", icon: <Search size={32} className="text-blue-600" /> },
    { name: "Wireframing", icon: <Layout size={32} className="text-indigo-600" /> },
    { name: "Visual Design", icon: <Eye size={32} className="text-purple-600" /> },
    { name: "Color Theory", icon: <Palette size={32} className="text-pink-600" /> },
    { name: "Figma & Miro", icon: <PenTool size={32} className="text-rose-500" /> },
    { name: "Frontend Dev", icon: <Code size={32} className="text-emerald-600" /> },
    { name: "React", icon: <Atom size={32} className="text-cyan-500" /> },
    { name: "Typography", icon: <Type size={32} className="text-slate-700" /> }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-slate-50 relative overflow-visible">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">Skills</h2>
                    <h3 className="text-3xl font-bold text-slate-900">My Toolkit</h3>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{
                                scale: 1.05,
                                y: -8,
                                rotate: index % 2 === 0 ? 1 : -1,
                                backgroundColor: "rgba(255, 255, 255, 1)",
                                boxShadow: "0 25px 30px -5px rgba(59, 130, 246, 0.15), 0 10px 10px -5px rgba(59, 130, 246, 0.1)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-4 group cursor-default relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                            <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative">
                                {React.cloneElement(skill.icon, {
                                    className: `${skill.icon.props.className} group-hover:text-white transition-colors duration-300`,
                                    size: 28
                                })}
                            </div>
                            <h4 className="font-bold text-slate-700 text-sm md:text-base text-center group-hover:text-blue-700 transition-colors">
                                {skill.name}
                            </h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
