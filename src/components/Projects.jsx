import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, BookOpen, Coffee, QrCode, Utensils } from 'lucide-react';

const majorProjects = [
    {
        title: 'AttendX',
        subtitle: 'QR Based Attendance System',
        description: 'Streamlined attendance for students & faculty.',
        tags: ['React', 'Firebase', 'QR Tech'],
        status: 'In Progress'
    },
    {
        title: 'StudyHub',
        subtitle: 'E-Learning Platform',
        description: 'Personalized learning with progress tracking.',
        tags: ['React', 'Tailwind', 'AI'],
        status: 'In Progress'
    },
    {
        title: 'BreakByte',
        subtitle: 'Smart Canteen System',
        description: 'Queue-free food ordering platform.',
        tags: ['React', 'Tailwind', 'Context'],
        status: 'In Progress'
    },
    {
        title: 'Flavor Haven',
        subtitle: 'Restaurant Interface',
        description: 'Premium dining brand presence.',
        tags: ['React', 'Tailwind', 'UI'],
        links: { demo: 'https://github.com/Gmanilkumaruiux/Flavor-Haven', github: 'https://github.com/Gmanilkumaruiux/Flavor-Haven' },
        status: 'Completed'
    },
    {
        title: 'Study Bot',
        subtitle: 'Smart Learning Assistant',
        description: 'Conversational chatbot for course discovery.',
        tags: ['JS', 'Tailwind', 'JSON'],
        links: { demo: 'https://github.com/Gmanilkumaruiux/StudyBot', github: 'https://github.com/Gmanilkumaruiux/StudyBot' },
        status: 'Completed'
    },
    {
        title: 'MCQ Generator',
        subtitle: 'Automated Question Tool',
        description: 'Generates MCQs automatically from text.',
        tags: ['JS', 'Tailwind', 'JSON'],
        links: { demo: 'https://github.com/Gmanilkumaruiux/MCQ-Generator-from-Text', github: 'https://github.com/Gmanilkumaruiux/MCQ-Generator-from-Text' },
        status: 'Completed'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">Portfolio</h2>
                    <h3 className="text-3xl font-bold text-slate-900">Featured Projects</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {majorProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col items-center text-center group"
                        >
                            <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>
                            <span className="text-sm font-medium text-slate-400 mb-6">{project.subtitle}</span>

                            <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto w-full flex justify-center">
                                {project.status === 'Completed' ? (
                                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition-colors"
                                        >
                                            <Github size={18} />
                                            <span>GitHub</span>
                                        </a>
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all"
                                        >
                                            <Zap size={18} />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                ) : (
                                    <div className="text-center py-2 px-6 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 italic text-sm">
                                        Building... Coming soon!
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
