import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    // 1. Manual Projects Data (Displayed First)
    const manualProjects = [
        {
            id: 'manual-1',
            title: "Android Based Medicare Alert",
            category: "Healthcare Tech",
            description: "A medical emergency alert system using geo-fencing technology to trigger alerts when a patient enters or exits a specific location.",
            tech: ["Android", "IoT", "Geo-Fencing", "Java"],
            github: "#",
            homepage: "",
            image: "/projects/medicare_alert.png",
            budget: "₹2 CR",
            developer: "Anna University & Apollo Hospital Chennai",
            stats: [],
            featured: true
        },
        {
            id: 'manual-2',
            title: "Affirm Data Solutions",
            category: "Business Intelligence",
            description: "Analysed business data to provide actionable insights. (MBA Project - Nov 2022)",
            tech: ["Data Analysis", "Business Intelligence", "MBA"],
            github: "#",
            homepage: "",
            image: "/projects/affirm_data.png",
            budget: "₹75k",
            developer: "MBA Project",
            stats: [],
            featured: true
        }
    ];

    const [projects, setProjects] = useState(manualProjects);

    // 2. Fetch Remaining Projects from GitHub
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/RAJESWARI1999/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch from GitHub');
                }

                const data = await response.json();

                // Safety Check: Ensure data is an array
                if (!Array.isArray(data)) {
                    console.error("GitHub API returned non-array:", data);
                    return;
                }

                const projectData = await Promise.all(
                    data
                        .filter(repo => !['PavanRasipogula', 'Project_R'].includes(repo.name))
                        .map(async (repo) => {
                            // Image Mapping
                            // Description Mapping
                            let description = repo.description || "No description available.";
                            const name = repo.name.toLowerCase();

                            if (name.includes('amazon')) {
                                description = "Comprehensive dashboard analyzing Amazon sales trends, revenue metrics, and customer purchasing behavior.";
                                imageUrl = '/projects/amazon_sales.png'; // Updated to simpler name if needed, but 'amazon_sales_analysis.png' was previous
                            } else if (name.includes('hr-analytics') || name.includes('hr_analytics')) {
                                description = "HR dashboard visualizing employee attrition, satisfaction scores, and retention strategies.";
                                imageUrl = '/projects/hr_analytics.png';
                            } else if (name.includes('bank') && name.includes('loan')) {
                                description = "Financial analysis dashboard tracking loan applications, approval rates, and credit risk assessment.";
                                imageUrl = '/projects/bank_loan_analysis.png';
                            } else if (name.includes('ev-analysis') || name.includes('ev_analysis')) {
                                description = "Data analysis of Electric Vehicle market trends, adoption rates, and charging infrastructure growth.";
                                imageUrl = '/projects/ev_analysis.png';
                            }

                            // Standardized Data Structure
                            return {
                                id: repo.id,
                                title: (repo.name || 'Untitled').replace(/-/g, ' ').toUpperCase(),
                                category: "GitHub Project",
                                description: description,
                                tech: Array.isArray(repo.topics) ? repo.topics : [], // Safe Access
                                github: repo.html_url || '#',
                                homepage: repo.homepage || '',
                                image: imageUrl,
                                stats: [], // Default to empty array
                                featured: false,
                                budget: null,
                                developer: null
                            };
                        })
                );

                // Merge: Manual Projects + Fetched Projects
                setProjects(prev => {
                    const combined = [...manualProjects, ...projectData];
                    // Optional: Remove duplicates based on ID if necessary, but here we just combine
                    return combined;
                });

            } catch (error) {
                console.error("Error fetching projects:", error);
                // Fallback to manual projects only if fetch fails
                setProjects(manualProjects);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white tracking-tight">Key Projects</h2>
                <p className="text-gray-400 mt-2">Selected works from GitHub demonstrating data expertise.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.slice(0, 4).map((project) => (
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
                            <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold text-white mb-2 leading-tight">
                                {project.title}
                            </motion.h3>

                            {/* Meta Badges (Budget/Developer) */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.budget && (
                                    <span className="px-2 py-0.5 rounded-md bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-medium">
                                        {project.budget}
                                    </span>
                                )}
                                {project.developer && (
                                    <span className="px-2 py-0.5 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium truncate max-w-[200px]">
                                        {project.developer}
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {/* Safe Map with Array Check */}
                                {Array.isArray(project.tech) && project.tech.slice(0, 3).map((t, i) => (
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
                                                className="w-full h-full object-fill"
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
                                                {/* Safe Map for Stats */}
                                                {Array.isArray(project.stats) && project.stats.map((stat, i) => (
                                                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                                                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                        <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {/* Safe Map for Tech */}
                                                {Array.isArray(project.tech) && project.tech.map((t, i) => (
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
