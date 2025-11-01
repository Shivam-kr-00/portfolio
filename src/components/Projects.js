import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Fashion Hub',
            description: 'A full-stack e-commerce platform built with the MERN stack, featuring user authentication, product management, secure payments, and an admin dashboard.',
            techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay', 'Redis', 'Cloudinary', 'Jwt'],
            image: 'https://res.cloudinary.com/dahpi68b7/image/upload/v1761992244/Screenshot_2025-11-01_154700_iaf5ae.png',
            liveLink: 'https://faishon-e-commerce-1.onrender.com/',
            githubLink: 'https://github.com/Shivam-kr-00/Faishon-E-commerce'  // Replace with actual GitHub link
        },
        {
            title: 'Feel Talk(Chatt App)',
            description: 'A real-time chat application with MERN stack, including user registration, and instant messaging features by using Socket.io for real-time communication.',
            techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'Jwt'],
            image: 'https://res.cloudinary.com/dahpi68b7/image/upload/v1761992135/Screenshot_2025-10-31_225313_yraphi.png',
            liveLink: 'https://mernstack-chatapp-ylu2.onrender.com',
            githubLink: 'https://github.com/Shivam-kr-00/MernStack-ChatApp'  // Replace with actual GitHub link
        },
        {
            title: 'Movie Finder',
            description: 'A Basic React-based web application that allows users to search for movies using the OMDB API.',
            techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
            image: 'https://res.cloudinary.com/dahpi68b7/image/upload/v1761992089/Screenshot_2025-10-31_201949_auv59j.png',
            liveLink: 'https://react-movie-two-tan.vercel.app/',
            githubLink: 'https://github.com/Shivam-kr-00/React-Movie'  // Replace with actual GitHub link
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 px-8 py-16">
            <motion.h2
                className="text-5xl font-bold mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                My Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-card-gradient p-6 rounded-2xl shadow-2xl border border-gray-700 hover:border-orange-400 transition-all duration-300 overflow-hidden group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.02 }}
                    >
                        <motion.div
                            className="relative overflow-hidden rounded-xl mb-6"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                            />
                        </motion.div>
                        <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            <motion.a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex-1 text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Project
                            </motion.a>
                            <motion.a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 flex-1 text-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Code
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
