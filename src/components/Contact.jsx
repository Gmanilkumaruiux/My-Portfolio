import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
    const contacts = [
        {
            icon: <Mail size={24} />,
            label: "Email Me",
            value: "manilkumarinfo@gmail.com",
            href: "mailto:manilkumarinfo@gmail.com",
            color: "text-blue-600",
            bg: "bg-blue-50",
            hoverBorder: "group-hover:border-blue-400",
            hoverShadow: "group-hover:shadow-blue-200"
        },
        {
            icon: <Phone size={24} />,
            label: "Call Me",
            value: "+91 9014942224",
            href: "tel:9014942224",
            color: "text-green-600",
            bg: "bg-green-50",
            hoverBorder: "group-hover:border-green-400",
            hoverShadow: "group-hover:shadow-green-200"
        },
        {
            icon: <Linkedin size={24} />,
            label: "Connect",
            value: "LinkedIn Profile",
            href: "https://www.linkedin.com/in/manil-kumar-g-0133b42b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            color: "text-sky-600",
            bg: "bg-sky-50",
            hoverBorder: "group-hover:border-sky-400",
            hoverShadow: "group-hover:shadow-sky-200"
        },
        {
            icon: <Github size={24} />,
            label: "Explore Code",
            value: "GitHub Profile",
            href: "https://github.com/Gmanilkumaruiux",
            color: "text-slate-800",
            bg: "bg-slate-100",
            hoverBorder: "group-hover:border-slate-400",
            hoverShadow: "group-hover:shadow-slate-300"
        }
    ];

    return (
        <section id="contact" className="py-16 bg-white border-t border-slate-100 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">Get in Touch</h2>
                    <h3 className="text-4xl font-bold text-slate-900 mb-6">Let's Work Together</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
                        Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contacts.map((contact, index) => (
                        <motion.a
                            key={index}
                            href={contact.href}
                            target={contact.href.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className={`group flex flex-col items-center p-5 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 ${contact.hoverShadow} hover:shadow-xl ${contact.hoverBorder}`}
                        >
                            <div className={`p-4 sm:p-5 rounded-full mb-4 sm:mb-6 ${contact.bg} ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                                {contact.icon}
                            </div>
                            <span className="text-slate-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2 uppercase tracking-wide">{contact.label}</span>
                            <span className={`text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-center break-all`}>{contact.value}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
