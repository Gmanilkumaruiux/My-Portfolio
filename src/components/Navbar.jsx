import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Sparkles, Briefcase, Rocket, Send, Trophy } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const links = [
        { name: 'Home', href: '#home', id: 'home', icon: <Home size={18} /> },
        { name: 'About', href: '#about', id: 'about', icon: <User size={18} /> },
        { name: 'Skills', href: '#skills', id: 'skills', icon: <Sparkles size={18} /> },
        { name: 'Experience', href: '#experience', id: 'experience', icon: <Briefcase size={18} /> },
        { name: 'Achievements', href: '#achievements', id: 'achievements', icon: <Trophy size={18} /> },
        { name: 'Projects', href: '#projects', id: 'projects', icon: <Rocket size={18} /> },
        { name: 'Contact', href: '#contact', id: 'contact', icon: <Send size={18} /> },
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
        );

        links.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [links]);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-gradient cursor-pointer">GMK</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${activeSection === link.id ? 'text-white' : 'text-slate-600 hover:text-blue-600'
                                        }`}
                                    onClick={() => setActiveSection(link.id)}
                                >
                                    {activeSection === link.id && (
                                        <motion.span
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-md"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {link.icon}
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "100dvh" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
                >
                    <div className="px-6 py-8 space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`w-full px-4 py-4 rounded-2xl text-lg font-medium transition-all flex items-center gap-4 ${activeSection === link.id
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                                    }`}
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveSection(link.id);
                                }}
                            >
                                <div className={`p-2 rounded-full ${activeSection === link.id ? 'bg-blue-200/50' : 'bg-slate-100'}`}>
                                    {link.icon}
                                </div>
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
