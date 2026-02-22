import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileLoadingImg from '../assets/Profiles/profile2.jpeg';

const Loader = ({ onLoaded }) => {
    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            onLoaded();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onLoaded]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#130420]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <div className="flex flex-col items-center">
                {/* CSS Pulse Animation */}
                <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                    <img src={profileLoadingImg} alt="Loading Profile" className="w-16 h-16 rounded-full object-cover z-10" />
                    <div className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-t-transparent border-r-primary-glow border-b-transparent border-l-transparent rounded-full animate-spin-reverse"></div>
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white tracking-[0.2em]">RAJESWARI</h2>
                    <p className="text-primary-glow text-sm tracking-[0.5em] mt-2 font-light">Loading...</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
