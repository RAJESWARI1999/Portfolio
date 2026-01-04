import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

// Threads Icon Component (Custom SVG)
const ThreadsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12a7 7 0 1 0-7 7A7 7 0 0 0 19 12z"></path>
        <path d="M19 12v3.5A2.5 2.5 0 0 1 16.5 18a2.5 2.5 0 0 1-2.5-2.5V12"></path>
        <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 5.5 1.5 7.5 4"></path>
    </svg>
);

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#130420]">
            {/* Abstract Background Gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
                <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-indigo-900/20 rounded-full blur-[80px]"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >


                    <div className="inline-block px-4 py-2 rounded-full glass border border-white/10 mb-4">
                        <span className="text-primary-glow text-sm font-medium tracking-wide">SENIOR ANALYST</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
                        <span className="text-white">Rajeswari</span> <br />
                        <span className="text-gradient">Sivakumar</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-muted mt-4 max-w-2xl mx-auto font-light">
                        Data Visualization Expert | SQL & Power BI Specialist
                        <br />
                        <span className="text-sm opacity-60">Bridging data and decisions with Power BI & Informatica</span>
                    </p>

                    <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
                        {[
                            { Icon: Github, href: "https://github.com/RAJESWARI1999", color: "hover:text-white" },
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/rajeswari-sivakumar1999/", color: "hover:text-blue-400" },
                            { Icon: Instagram, href: "https://www.instagram.com/raji.official_1999", color: "hover:text-pink-500" },
                            { Icon: Mail, href: "mailto:rajishalini1999@gmail.com", color: "hover:text-primary-glow" },
                            { Icon: ThreadsIcon, href: "https://www.threads.net/@raji.official_1999", color: "hover:text-white" }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, translateY: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-4 rounded-full neu-btn text-gray-400 transition-colors ${social.color}`}
                            >
                                {social.Icon === ThreadsIcon ? <ThreadsIcon /> : <social.Icon size={24} />}
                            </motion.a>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center gap-6">
                        <motion.a
                            href="/resume.pdf"
                            download="Rajeswari_Sivakumar_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-glow text-white font-semibold shadow-lg shadow-primary/30 transition-all cursor-pointer"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
