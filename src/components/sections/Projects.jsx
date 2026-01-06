import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    // 1. Academic Projects (Ordered Chronologically/Education Level)
    const academicProjects = [
        {
            id: 'btech',
            title: "Android Based Medicare Alert",
            category: "B.Tech Project",
            description: "Developed an Android-based medical emergency alert system using geo-fencing sensors. The system monitors patient location and triggers alerts to caregivers/hospitals when boundaries are crossed.",
            tech: ["Android", "IoT", "Geo-Fencing", "Java"],
            github: "https://github.com/RAJESWARI1999",
            homepage: "",
            image: "/projects/medicare_alert.png",
            budget: null,
            developer: "Anna University",
            stats: [],
            featured: true
        },
        {
            id: 'mba',
            title: "Employee Work-Life Balance Study",
            category: "MBA Project",
            description: "A comprehensive study on employee work-life balance at Zolostays. Analyzed survey data to identify stress factors and recommended HR policy implementations for better retention.",
            tech: ["HR Analytics", "SPSS", "Data Analysis"],
            github: "https://github.com/RAJESWARI1999",
            homepage: "",
            image: "/projects/mba_zolostays.png",
            budget: null,
            developer: "Zolostays",
            stats: [],
            featured: true
        },
        {
            id: 'ms',
            title: "Mixed Job Scheduler for Cloud",
            category: "MS Project",
            description: "Proposed and simulated a 'Mixed Job Scheduler Scheme' for cloud computing environments to optimize resource allocation and reduce latency in high-traffic corporate networks.",
            tech: ["Cloud Computing", "Scheduling Algorithms", "Simulation"],
            github: "https://github.com/RAJESWARI1999",
            homepage: "",
            image: "/projects/ms_cloud.png",
            budget: null,
            developer: "Academic Research",
            stats: [],
            featured: true
        },
        {
            id: 'phd',
            title: "AI-Driven Behavioral Analytics",
            category: "PhD Project",
            description: "Advanced research on 'AI-Driven Behavioral Analytics' for decision-making in business organizations. Utilizing deep learning models to predict consumer behavior and optimize strategic decisions.",
            tech: ["Artificial Intelligence", "Behavioral Science", "Machine Learning", "Python"],
            github: "https://github.com/RAJESWARI1999",
            homepage: "",
            image: "/projects/phd_ai.png",
            budget: null,
            developer: "Doctoral Research",
            stats: [],
            featured: true
        }
    ];

    const [projects, setProjects] = useState(academicProjects);

    // 2. Fetch 2 Items from GitHub
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Fetch user repos
                const response = await fetch('https://api.github.com/users/RAJESWARI1999/repos?sort=updated&per_page=10');
                if (!response.ok) throw new Error('Failed to fetch');

                const data = await response.json();

                if (!Array.isArray(data)) return;

                const fetchedProjects = data
                    .filter(repo => !['PavanRasipogula', 'Project_R'].includes(repo.name))
                    .slice(1, 3) // Limit to exactly 2 GitHub projects
                    .map(repo => {
                        let imageUrl = `https://opengraph.githubassets.com/1/${repo.full_name}`;
                        let description = repo.description || "No description available.";
                        let tech = Array.isArray(repo.topics) ? repo.topics : [];
                        const name = repo.name.toLowerCase();

                        // Custom Mappings (Rich Content for Key Projects)
                        if (name.includes('amazon')) {
                            description = "End-to-end analysis of Amazon sales data. Key insights include revenue trends by region, top-performing product categories, and customer purchasing patterns.";
                            imageUrl = '/projects/amazon_sales.png';
                            tech = ["Power BI", "Data Analysis", "SQL", "Dashboarding"];
                        }
                        else if (name.includes('hr-analytics') || name.includes('hr_analytics')) {
                            description = "HR Attrition Dashboard identifying key factors behind employee turnover. Provides visualizations for satisfaction scores, tenure analysis, and retention recommendations.";
                            imageUrl = '/projects/hr_dashboard.png';
                            tech = ["Tableau", "HR Analytics", "Predictive Modeling", "Statistics"];
                        }
                        else if (name.includes('bank') && name.includes('loan')) {
                            description = "Credit Risk Assessment Dashboard. Tracks loan application volumes, approval/rejection rates, and bad debt ratios to optimize financial decision-making.";
                            imageUrl = '/projects/bank_loan.png';
                            tech = ["Power BI", "Financial Analysis", "Risk Assessment", "DAX"];
                        }
                        else if (name.includes('ev-analysis') || name.includes('ev_analysis') || (name.includes('electric') && name.includes('vehicle'))) {
                            description = "Market analysis of Electric Vehicles (EVs) focusing on adoption rates, charging infrastructure growth, and comparative battery performance trends.";
                            imageUrl = '/projects/ev_analysis.png';
                            tech = ["Python", "Pandas", "Matplotlib", "Market Research"];
                        }

                        // Standardized Data Structure
                        return {
                            id: repo.id,
                            title: (repo.name || 'Untitled').replace(/-/g, ' ').toUpperCase(),
                            category: "GitHub Project",
                            description: description,
                            tech: tech,
                            github: repo.html_url || '#',
                            homepage: repo.homepage || '',
                            image: imageUrl,
                            stats: [],
                            featured: false,
                            budget: null,
                            developer: null
                        };
                    });

                // Append GitHub projects to Academic projects
                setProjects([...academicProjects, ...fetchedProjects]);

            } catch (error) {
                console.error("Error fetching projects:", error);
                setProjects(academicProjects); // Fallback
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-12 px-6 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-white tracking-tight">Academic & Key Projects</h2>
                <p className="text-gray-400 mt-2">A timeline of research and development from B.Tech to PhD.</p>
            </div>

            {/* 3-Column Grid Layout (2x3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div
                        layoutId={`card-${project.id}`}
                        key={project.id}
                        onClick={() => setSelectedId(project.id)}
                        className="group relative bg-[#1a0b2e] border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-500"
                    >
                        {/* Image overlay */}
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent z-10 opactiy-60"></div>
                            <motion.img
                                layoutId={`image-${project.id}`}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                                {project.github && project.github !== '#' && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors text-white"
                                        title="View on GitHub"
                                    >
                                        <Github size={16} />
                                    </a>
                                )}
                                <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-xs font-medium text-white">{project.category}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 relative z-20 -mt-8">
                            <motion.h3 layoutId={`title-${project.id}`} className="text-lg font-bold text-white mb-2 leading-tight min-h-[3rem]">
                                {project.title}
                            </motion.h3>

                            {/* Meta Badges (Developer/Location) */}
                            {project.developer && (
                                <div className="mb-3">
                                    <span className="px-2 py-0.5 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-medium uppercase tracking-wide">
                                        {project.developer}
                                    </span>
                                </div>
                            )}

                            <p className="text-gray-400 text-sm mb-4 line-clamp-3 min-h-[4.5rem]">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {/* Safe Map with Array Check */}
                                {Array.isArray(project.tech) && project.tech.slice(0, 3).map((t, i) => (
                                    <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/5">
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
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 px-4"
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                            {projects.map((project) => (
                                project.id === selectedId && (
                                    <motion.div
                                        layoutId={`card-${project.id}`}
                                        key={project.id}
                                        className="bg-[#130420] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl pointer-events-auto custom-scrollbar"
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
