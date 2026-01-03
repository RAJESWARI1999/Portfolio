import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

const ThreadsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12a7 7 0 1 0-7 7A7 7 0 0 0 19 12z"></path>
        <path d="M19 12v3.5A2.5 2.5 0 0 1 16.5 18a2.5 2.5 0 0 1-2.5-2.5V12"></path>
        <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 5.5 1.5 7.5 4"></path>
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                alert("Message Sent Successfully!");
            } else {
                setStatus('error');
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            alert("Something went wrong.");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Column: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block px-4 py-2 rounded-full glass border border-white/10 mb-6">
                        <span className="text-primary-glow text-sm font-medium tracking-wide">GET IN TOUCH</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Let's work <br /> <span className="text-primary-glow">together.</span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        I am currently available for new opportunities in Data Engineering and Business Intelligence.
                        Let's create something meaningful.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-medium">Mail Me</h4>
                                <a href="mailto:rajishalini1999@gmail.com" className="text-xl text-white font-semibold hover:text-primary-glow transition-colors">rajishalini1999@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-medium">Call Me</h4>
                                <a href="tel:+916374423740" className="text-xl text-white font-semibold hover:text-primary-glow transition-colors">+91 637 442 3740</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm mb-1 uppercase tracking-wider font-medium">Location</h4>
                                <span className="text-xl text-white font-semibold">Bangalore, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                        {[
                            { Icon: Linkedin, href: "https://www.linkedin.com/in/rajeswari-sivakumar1999/", color: "hover:bg-[#0077b5]" },
                            { Icon: Github, href: "https://github.com/RAJESWARI1999", color: "hover:bg-[#333]" },
                            { Icon: Instagram, href: "https://www.instagram.com/raji.official_1999", color: "hover:bg-[#E4405F]" },
                            { Icon: ThreadsIcon, href: "https://www.threads.net/@raji.official_1999", color: "hover:bg-black" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent transition-all duration-300 ${social.color}`}
                            >
                                {social.Icon === ThreadsIcon ? <ThreadsIcon /> : <social.Icon size={20} />}
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1a0b2e] border border-white/5 p-8 md:p-10 rounded-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <h3 className="text-2xl font-bold text-white mb-8">Send a message</h3>

                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Project Inquiry"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                        </button>
                    </form>
                </motion.div>
            </div>

            <div className="text-center mt-24 text-sm text-gray-600 border-t border-white/5 pt-8">
                <p>© 2026 Rajeswari Sivakumar. Crafted with <span className="text-red-500">❤</span> by <a href="https://github.com/PavanRasipogula" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pavan Rasipogula</a></p>
            </div>
        </section>
    );
};

export default Contact;
