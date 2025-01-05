import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ahsan Ullah</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            MERN Stack Developer Building Scalable Web Solutions
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Crafting Modern Web Solutions with the MERN Stack to Deliver Seamless and Impactful User Experiences
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors sm:px-4 sm:py-2 sm:text-sm sm:rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors sm:px-4 sm:py-2 sm:text-sm sm:rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
