import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-8 py-16">
            <motion.div
                className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Text Content */}
                <motion.div
                    className="text-center lg:text-left"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Hi, I'm Shivam, a passionate full-stack developer with over 1 years of experience crafting innovative web solutions. I specialize in React,and Node.js, turning ideas into seamless digital experiences.
                    </p>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee. I believe in clean code, user-centric design, and continuous learning.
                    </p>
                    <motion.a
                        href="#projects"
                        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold inline-block shadow-lg hover:shadow-xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See My Work
                    </motion.a>
                </motion.div>

                {/* Image or Visual Element */}
                <motion.div
                    className="flex justify-center lg:justify-end"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="relative">
                        <img
                            src="https://cdn.dribbble.com/userupload/45347355/file/51b79b04241912441c157102e273d678.png?resize=2048x1536&vertical=center"  // Replace with your about image or illustration
                            alt="Shivam working on code"
                            className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl border border-gray-700"
                        />
                        {/* Optional: Overlay or Icon */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end justify-center pb-6">
                            <div className="text-white text-center">
                                <h3 className="text-xl font-semibold">MERN-Stack Developer</h3>
                             {/* <p className="text-sm text-gray-300">Mern Stack | Node.js | React</p> */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
