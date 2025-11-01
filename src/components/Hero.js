import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-black px-8 relative overflow-hidden pt-16 md:pt-0">
            {/* Subtle background gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>

            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 z-10 max-w-6xl">
                {/* Profile Picture */}
                <motion.div
                    className="flex-shrink-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">
                        {/* Gradient Border Wrapper */}
                        <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-1">
                            <img
                                src="https://res.cloudinary.com/dahpi68b7/image/upload/v1761992771/Shivam_qz0hlu.jpg"
                                alt="Shivam - Profile Picture"
                                className="w-full h-full rounded-full object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Hi, I'm Shivam
                    </h1>
                    <p className="text-xl lg:text-2xl mb-8 text-gray-400 max-w-2xl">
                        MERN-Stack Developer | React Enthusiast | Building the Future of Web
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                        <motion.button
                            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>
                        <motion.a
                            href="#contact"
                            className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all"
                            whileHover={{ scale: 1.05 }}
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;