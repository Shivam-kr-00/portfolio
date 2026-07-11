import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Node.js', level: 95, icon: '🟢' },
        { name: 'MongoDB', level: 90, icon: '🍃' },
        { name: 'Express.js', level: 95, icon: '🚀' },
        {name:'REST API', level: 95, icon: '🔄'},
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'DSA', level: 95, icon: '🧠' },
        { name: 'C++', level: 90, icon: '⚡' },
        { name: 'Java', level: 50, icon: '☕' },
        {name:'PYTHON', level: 80, icon: '🐍'},
        { name: 'Socket.io', level: 85, icon: '🔌' },
        {name:'JEST', level: 80, icon: '🧪'},
        {nmae:'SUPERTEST', level: 80, icon: '🧪'},
        {name:'POSTMAN', level: 90, icon: '🧪'},
        { name: 'Git', level: 90, icon: '📚' },
        {name:'DOCKER', level: 60, icon: '🐳'},
    ];

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-black px-8 py-16">
            <motion.h2
                className="text-5xl font-bold mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                My Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-card-gradient p-6 rounded-2xl shadow-2xl border border-gray-700 hover:border-orange-400 transition-all duration-300 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="text-4xl mb-4">{skill.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                            <motion.div
                                className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <p className="text-sm text-gray-400">{skill.level}%</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
