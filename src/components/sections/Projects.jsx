import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    const projects = [
        {
            id: 1,
            title: "HR Analytics Dashboard",
            category: "Process Optimization",
            description: "A deep dive into workforce metrics using Power BI. Analyzed attrition, retention rates, and employee satisfaction to provide actionable insights for HR management.",
            tech: ["Power BI", "DAX", "Data Modeling"],
            image: "/projects/hr_dashboard.png",
            github: "https://github.com/RAJESWARI1999/-HR-Analytics-Dashboard-A-Deep-Dive-into-Workforce-Metrics",
            stats: [
                { label: "Attrition Reduced", value: "15%" },
                { label: "Data Accuracy", value: "99%" }
            ]
        },
        {
            id: 2,
            title: "Bank Loan Analysis",
            category: "Financial Risk",
            description: "Comprehensive analysis of loan data across US states. Identified regional trends, default risks, and approved loan distributions to assist banking strategies.",
            tech: ["Tableau", "SQL", "Excel"],
            image: "/projects/bank_loan.png",
            github: "https://github.com/RAJESWARI1999/-Bank-Loan-Report-Dashboard-US-Bank-States-Power-BI-",
            stats: [
                { label: "Loan Vol Analyzed", value: "$5M+" },
                { label: "Risk Factors", value: "12" }
            ]
        },
        {
            id: 3,
            title: "Electric Vehicle Analysis",
            category: "Market Research",
            description: "Analyzed the EV market growth, battery technology trends, and adoption rates. Visualized key performance indicators for sustainable transport strategies.",
            tech: ["Power BI", "Python", "Data Viz"],
            image: "/projects/ev_analysis.png",
            github: "https://github.com/RAJESWARI1999/Electric-Vehicle-Analysis-Dashboard---2024",
            stats: [
                { label: "Market Growth", value: "35%" },
                { label: "Models Tracked", value: "50+" }
            ]
        },
        {
            id: 4,
            title: "Amazon Sales Analysis",
            category: "E-Commerce",
            description: "Evaluated sales performance, product trends, and regional demand. Created an interactive dashboard to track revenue growth and seasonality.",
            tech: ["Power BI", "SQL", "Forecasting"],
            image: "/projects/amazon_sales.png",
            github: "https://github.com/RAJESWARI1999/-Amazon-Sales-Analysis-Dashboard-2024-",
            stats: [
                { label: "Sales Growth", value: "22%" },
                { label: "Regions Mapped", value: "Global" }
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white tracking-tight">Key Projects</h2>
                <p className="text-gray-400 mt-2">Selected works from GitHub demonstrating data expertise.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.id}`}
                        key={project.id}
                        onClick={() => setSelectedId(project.id)}
                        className="group relative bg-[#1a0b2e] border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-500"
                    >
                        {/* Image overlay */}
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent z-10 opactiy-60"></div>
                            <motion.img
                                layoutId={`image-${project.id}`}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                <span className="text-xs font-medium text-white">{project.category}</span>
                            </div>
                        </div>

                        <div className="p-8 relative z-20 -mt-12">
                            <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">
                                {project.title}
                            </motion.h3>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://github.com/RAJESWARI1999?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white border-b border-primary hover:text-primary-glow transition-all pb-1 group"
                >
                    View All Projects <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                            {projects.map((project) => (
                                project.id === selectedId && (
                                    <motion.div
                                        layoutId={`card-${project.id}`}
                                        key={project.id}
                                        className="bg-[#130420] w-full max-w-3xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl pointer-events-auto"
                                    >
                                        <div className="relative h-64 md:h-80">
                                            <motion.img
                                                layoutId={`image-${project.id}`}
                                                src={project.image}
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                                            >
                                                <X size={24} />
                                            </button>
                                        </div>

                                        <div className="p-8 md:p-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    <motion.h3 layoutId={`title-${project.id}`} className="text-3xl font-bold text-white mb-2">
                                                        {project.title}
                                                    </motion.h3>
                                                    <span className="text-primary-glow font-medium">{project.category}</span>
                                                </div>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-3 bg-white/5 hover:bg-primary hover:text-white rounded-full transition-all border border-white/10"
                                                >
                                                    <Github size={24} />
                                                </a>
                                            </div>

                                            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                                {project.description}
                                            </p>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                                {project.stats.map((stat, i) => (
                                                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                                                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                        <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 text-white text-sm border border-white/10">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
