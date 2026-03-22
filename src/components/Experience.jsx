import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, BadgeCheck, ExternalLink } from 'lucide-react';

const tabs = [
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'achievements', label: 'Certifications', icon: <Award size={18} /> },
];

const data = {
    experience: [
        {
            role: 'Web Developer Intern',
            company: 'The Developers Arena',
            period: 'Ongoing (6 Months)',
            desc: 'Working on responsive web development and backend integration.'
        },
        {
            role: 'Python Programming Intern',
            company: 'Senstron Systems Pvt Ltd',
            period: 'Completed',
            desc: 'Gained expertise in Python programming and system development.'
        },
        {
            role: 'Web Development Intern',
            company: 'SkillDzire',
            period: 'Completed',
            desc: 'Foundational training in web technologies.'
        }
    ],
    education: [
        {
            degree: 'B.Tech CSE (AI)',
            institution: 'Aditya College of Engineering',
            period: '3rd Year',
            desc: 'Specializing in Artificial Intelligence.'
        },
        {
            degree: 'MPC',
            institution: 'Krishna Reddy Siddartha Junior College',
            period: 'Completed',
            desc: 'Intermediate Education.'
        },
        {
            degree: 'Secondary Education',
            institution: 'Goutham E.M High School',
            period: 'Completed',
            desc: 'Schooling.'
        }
    ],
    achievements: [
        { title: 'Python', issuer: 'GeeksforGeeks', type: 'Certification' },
        { title: 'Scalar', issuer: 'Google For Startups', type: 'Certification' },
        { title: 'Generative AI', issuer: 'GeeksforGeeks', type: 'Certification' },
        { title: 'Entrepreneurship', issuer: 'MSME', type: 'Certification' },
        { title: 'GenAI Data Analytics', issuer: 'Tata Forage', type: 'Certification' },
        { title: 'Figma UI/UX Project Course', issuer: 'Udemy', type: 'Certification' }
    ]
};

export default function Experience() {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <section id="experience" className="py-16 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">Resume</h2>
                    <h3 className="text-4xl font-bold text-slate-900 mb-4">My Journey</h3>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Animated Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all relative z-10 whitespace-nowrap ${activeTab === tab.id ? 'text-white' : 'text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-slate-100'
                                }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-500/30"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Experience & Education Timeline */}
                            {(activeTab === 'experience' || activeTab === 'education') && (
                                <div className="space-y-12 relative px-4">
                                    {/* Animated Timeline Line */}
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: "100%" }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        className="absolute left-[34px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-200 via-slate-200 to-transparent"
                                    ></motion.div>

                                    {data[activeTab].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
                                            className="relative pl-16 group"
                                        >
                                            {/* Timeline Dot */}
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 200 }}
                                                className="absolute left-[26px] top-0 w-4 h-4 rounded-full bg-white border-[3px] border-blue-500 z-10 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:scale-125 transition-transform duration-300"
                                            >
                                                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                                            </motion.div>

                                            {/* Card */}
                                            <motion.div
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
                                            >
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4 relative z-10">
                                                    <div>
                                                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                            {item.role || item.degree}
                                                        </h4>
                                                        <p className="text-base font-medium text-slate-500 mt-1">{item.company || item.institution}</p>
                                                    </div>
                                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 whitespace-nowrap">
                                                        <Calendar size={14} />
                                                        {item.period}
                                                    </span>
                                                </div>
                                                <p className="text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* Certifications (Grid Layout) */}
                            {activeTab === 'achievements' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.achievements.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                                            whileHover={{
                                                scale: 1.03,
                                                y: -5,
                                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                            }}
                                            className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-100 transition-all duration-300 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <div className="relative z-10 flex items-start gap-5">
                                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                    {item.type === 'Award' ? <Award size={24} /> : <BadgeCheck size={24} />}
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors truncate pr-4">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors"></span>
                                                        <span>{item.issuer}</span>
                                                    </div>
                                                </div>

                                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-400">
                                                    <ExternalLink size={18} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
