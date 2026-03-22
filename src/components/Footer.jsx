import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ChevronUp, Heart } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <Github size={20} />, href: "https://github.com/Gmanilkumaruiux", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/manil-kumar-g-0133b42b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
        { icon: <Mail size={20} />, href: "mailto:manilkumarinfo@gmail.com", label: "Email" },
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">G Manil Kumar</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Crafting digital experiences that merge design and technology. Let's build something amazing together.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="grid grid-cols-2 gap-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA Column */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Stay Connected</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Open for opportunities and collaborations.
                        </p>
                        <a
                            href="mailto:manilkumarinfo@gmail.com"
                            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-blue-700 transition-all inline-flex items-center gap-2"
                        >
                            <Mail size={16} />
                            Send an Email
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col items-center gap-4">
                    <p className="text-sm text-white text-center">
                        © {new Date().getFullYear()} Galla Manil Kumar. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                    >
                        Back to Top <ChevronUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
