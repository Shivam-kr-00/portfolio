import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'projects', 'contact'];  // Added 'skills'
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <motion.header
            className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-md z-10 border-b border-gray-800"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="flex justify-between items-center py-4 px-8 max-w-7xl mx-auto">
                {/* Logo */}
                <motion.div
                    className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                >
                    Shivam
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {[
                            { id: 'hero', label: 'Home' },
                            { id: 'about', label: 'About' },
                            { id: 'skills', label: 'Skills' },  // Already added
                            { id: 'projects', label: 'Projects' },
                            { id: 'contact', label: 'Contact' }
                        ].map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className={`font-semibold transition-colors ${
                                        activeSection === id
                                            ? 'text-orange-400'
                                            : 'text-white hover:text-orange-400'
                                    }`}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Resume Button */}
                    <motion.a
                        href="https://drive.google.com/file/d/1eVxxGQG3LU287O6hB4mBtF_tXxmieGHV/view?usp=drive_link"  // Your Google Drive link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Resume
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Resume Button for Mobile */}
                    <motion.a
                        href="https://drive.google.com/file/d/1eVxxGQG3LU287O6hB4mBtF_tXxmieGHV/view?usp=drive_link"  // Your Google Drive link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Resume
                    </motion.a>
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-black bg-opacity-95 backdrop-blur-md border-t border-gray-800"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ul className="flex flex-col space-y-4 py-4 px-8">
                        {[
                            { id: 'hero', label: 'Home' },
                            { id: 'about', label: 'About' },
                            { id: 'skills', label: 'Skills' },  // Added here
                            { id: 'projects', label: 'Projects' },
                            { id: 'contact', label: 'Contact' }
                        ].map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className={`block w-full text-left font-semibold transition-colors ${
                                        activeSection === id
                                            ? 'text-orange-400'
                                            : 'text-white hover:text-orange-400'
                                    }`}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
