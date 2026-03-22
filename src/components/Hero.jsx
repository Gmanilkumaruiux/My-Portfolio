
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const toRotate = ["UI/UX Designer", "Frontend Developer", "Creative Thinker"];

    useEffect(() => {
        let ticker = setTimeout(() => {
            tick();
        }, typingSpeed);

        return () => clearTimeout(ticker);
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(prev => prev / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(1500); // Pause at end
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(150);
        } else {
            setTypingSpeed(100);
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 pt-24 lg:pt-0">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-medium text-slate-600">Available for Work</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                            Hello, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Manil Kumar
                            </span> <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                        </h1>

                        <div className="text-2xl lg:text-3xl font-medium text-slate-500 mb-8 h-10">
                            <span className="text-slate-800 border-r-2 border-blue-600 pr-1">{text}</span>
                        </div>

                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Crafting pixel-perfect, engaging, and accessible digital experiences.
                            I blend design and code to build products that users love.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
                            <a href="#contact" className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                                Work With Me <ArrowDown size={18} />
                            </a>
                            <a href="#projects" className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm flex items-center justify-center gap-2">
                                Explore Work <ExternalLink size={18} />
                            </a>
                        </div>

                        <div className="flex items-center gap-4 text-slate-400">
                            <a href="https://github.com/Gmanilkumaruiux" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-600 hover:bg-white rounded-lg transition-all">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/manil-kumar-g-0133b42b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-2 hover:text-blue-600 hover:bg-white rounded-lg transition-all">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:manilkumarinfo@gmail.com" className="p-2 hover:text-blue-600 hover:bg-white rounded-lg transition-all">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                            {/* Decorative Blob Background */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob mix-blend-multiply filter blur-xl opacity-70"></div>

                            {/* Image Container with Blob Shape */}
                            <div className="relative w-full h-full overflow-hidden border-4 border-white shadow-2xl rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-float">
                                <img
                                    src={profileImg}
                                    alt="Manil Kumar"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Tech Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50"
                            >
                                <span className="text-blue-600"><ExternalLink size={24} /></span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50"
                            >
                                <span className="text-purple-600"><Mail size={24} /></span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
