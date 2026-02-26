import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const jobs = [
        {
            company: "Affirm Data Solutions",
            role: "MIS Reporting Analyst",
            location: "Bangalore",
            period: "Feb 2022 – Present",
            bullets: [
                "Led data analysis initiatives for US mortgage clients (AFRM).",
                "Developed and maintained self-service dashboards using Tableau and Power BI.",
                "Designed ETL architectures using Informatica to optimize data warehousing.",
                "Executed complex SQL queries for ad-hoc reporting and data validation."
            ]
        },
        {
            company: "Zolostays Property Solutions",
            role: "Process BDM (Business Analyst)",
            location: "Bangalore",
            period: "Jan 2021 – Feb 2022",
            bullets: [
                "Conducted business process analysis to improve operational efficiency.",
                "collaborated with stakeholders to define requirements and deliver data-driven solutions.",
                "Generated monthly performance reports to support strategic decision making."
            ]
        },
        {
            company: "E-Infotech",
            role: "Process Executive (Trainer)",
            location: "Coimbatore",
            period: "Feb 2020 - Jan 2021",
            bullets: [
                "Facilitated training sessions for new hires on process workflows.",
                "Managed process documentation and quality assurance metrics."
            ]
        }
    ];

    return (
        <section id="experience" className="pt-8 pb-12 px-6 max-w-5xl mx-auto">
            <div className="mb-16 border-b border-white/10 pb-8">
                <h2 className="text-4xl font-bold text-white tracking-tight">Professional Experience</h2>
                <p className="text-gray-400 mt-2">Detailed career progression and key achievements.</p>
            </div>

            <div className="space-y-16 relative">
                {/* Vertical Line */}
                <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 hidden md:block"></div>

                {jobs.map((job, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Date/Period Column */}
                        <div className="md:w-1/2 flex md:justify-end md:items-start">
                            <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start md:pl-12' : 'md:items-end md:pr-12'}`}>
                                <span className="text-primary-glow font-bold text-lg">{job.period}</span>
                                <span className="text-gray-500 text-sm">{job.location}</span>
                            </div>
                        </div>

                        {/* Center Dot */}
                        <div className="absolute left-[8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-[#130420] transform -translate-x-1/2 z-10 hidden md:block"></div>

                        {/* Content Column */}
                        <div className="md:w-1/2 flex flex-col">
                            <div className={`bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-primary/30 transition-all ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <h3 className="text-xl font-bold text-white max-w-xs">{job.role}</h3>
                                <div className="text-primary font-medium mb-4">{job.company}</div>

                                <ul className="space-y-2">
                                    {job.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="text-gray-300 text-sm leading-relaxed flex items-start">
                                            <span className="text-primary mr-2 mt-1.5 text-xs">●</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
