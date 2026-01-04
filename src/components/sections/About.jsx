import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profile1 from "../../assets/Profiles/profile1.jpeg";
import profile2 from "../../assets/Profiles/profile2.jpeg";
import profile3 from "../../assets/Profiles/profile3.jpeg";
import profile4 from "../../assets/Profiles/profile4.jpeg";

const About = () => {
    const images = [profile1, profile2, profile3, profile4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16 text-center"
            >
                About Me
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Left Column: Content (Bio, Stats, Skills) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 space-y-10"
                >
                    {/* Bio Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-glow text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Senior Data Analyst
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white leading-tight">
                            Transforms <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Complex Data</span> into Actionable Business Decisions.
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            With over <strong>4+ years</strong> of experience in the US mortgage sector (AFRM), I specialize in designing robust data architectures and optimizing ETL processes.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My focus is on enabling self-service analytics that empower senior management to make faster, smarter decisions.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/5">
                        <div className="">
                            <span className="block text-3xl font-bold text-white mb-1">4+</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Years Exp</span>
                        </div>
                        <div className="">
                            <span className="block text-3xl font-bold text-white mb-1">20+</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Projects</span>
                        </div>
                        <div className="">
                            <span className="block text-3xl font-bold text-white mb-1">₹2CR</span>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">Budgets</span>
                        </div>
                    </div>

                    {/* Skills Minimal */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-widest">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {['SQL', 'Tableau', 'Power BI', 'Python', 'Informatica', 'Excel VBA', 'Looker', 'Snowflake'].map((tech) => (
                                <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#1a0b2e] border border-white/10 text-gray-300 text-sm hover:border-primary/50 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Masonry Grid Gallery */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 h-full"
                >
                    <div className="grid grid-cols-2 gap-4 h-[600px]">
                        {/* Column 1 */}
                        <div className="space-y-4 pt-12">
                            <div className="relative group overflow-hidden rounded-2xl h-64 border border-white/5 shadow-2xl">
                                <img src={profile1} alt="Profile 1" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#130420]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-48 border border-white/5 shadow-2xl">
                                <img src={profile2} alt="Profile 2" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <div className="relative group overflow-hidden rounded-2xl h-48 border border-white/5 shadow-2xl">
                                <img src={profile3} alt="Profile 3" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-64 border border-white/5 shadow-2xl">
                                <img src={profile4} alt="Profile 4" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#130420]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            {/* Decorative element (optional) */}
                            <div className="h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl border border-white/5 backdrop-blur-sm flex items-center justify-center">
                                <span className="text-4xl">✨</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
