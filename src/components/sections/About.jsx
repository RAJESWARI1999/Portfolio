import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
                {/* Left Column: Bio */}
                <div className="md:col-span-7 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white tracking-tight"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="prose prose-invert max-w-none"
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am a results-oriented <strong>Senior Analyst</strong> with over 4 years of experience specializing in the US mortgage sector (AFRM).
                            My expertise lies in designing and implementing robust data architectures, transforming complex datasets into actionable business intelligence.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mt-4">
                            My technical proficiency spans across <strong>SQL, Informatica, Tableau, and Power BI</strong>. I have a proven track record of
                            optimizing ETL processes and enabling self-service analytics for senior management, directly contributing to data-driven decision making.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-4 mt-8"
                    >
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">4+</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
                        </div>
                        <div className="w-px bg-white/10 mx-4"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">20+</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider">Projects</span>
                        </div>
                        <div className="w-px bg-white/10 mx-4"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">MBA</span>
                            <span className="text-sm text-gray-500 uppercase tracking-wider">Operations & HR</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Skills & Education */}
                <div className="md:col-span-5 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-300">SQL & Database Mgmt</span>
                                    <span className="text-primary-glow">95%</span>
                                </div>
                                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[95%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-300">Tableau & Power BI</span>
                                    <span className="text-primary-glow">90%</span>
                                </div>
                                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[90%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-300">Python (Pandas/NumPy)</span>
                                    <span className="text-primary-glow">85%</span>
                                </div>
                                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[85%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-300">Advanced Excel & VBA</span>
                                    <span className="text-primary-glow">90%</span>
                                </div>
                                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[90%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-300">ETL (Informatica)</span>
                                    <span className="text-primary-glow">88%</span>
                                </div>
                                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[88%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                Microsoft Power BI – DA 100
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                Tableau Desktop Specialist
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                Data Analytics Certification (Techtip24)
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
