import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', icon: Home, href: '#home' },
        { name: 'About', icon: User, href: '#about' },
        { name: 'Projects', icon: Briefcase, href: '#projects' },
        { name: 'Contact', icon: Mail, href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center bg-bg-card backdrop-blur-md rounded-2xl border border-white/10 px-6 py-3 shadow-glass">
                {/* Brand/Logo */}
                <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <img src="/logo.png" alt="Analyst Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20 shadow-lg" />
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-text-muted hover:text-white transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-glow transition-all group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-white p-2 hover:text-primary-glow transition-colors"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 bg-[#130420] flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white bg-white/5 p-3 rounded-full hover:bg-white/10"
                        >
                            <X size={24} />
                        </button>

                        {links.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="flex items-center gap-3 text-2xl text-white hover:text-primary-glow font-light"
                            >
                                <link.icon size={28} />
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
