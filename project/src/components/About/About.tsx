import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Code, Database, Layout } from 'lucide-react';
import StatCard from './StatCard';
import profilepic from './IMG_8793-removebg-preview.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-72 h-50 mx-auto rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
                  <img
                    src={profilepic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With over 1 years of experience in web development, I specialize in building
                scalable applications using the MERN stack. My passion lies in creating
                intuitive user interfaces and optimizing application performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <StatCard
                  icon={<Code size={24} />}
                  value={10}
                  label="Projects"
                  inView={inView}
                />
                <StatCard
                  icon={<Database size={24} />}
                  value={20}
                  label="APIs Built"
                  inView={inView}
                />
                <StatCard
                  icon={<Layout size={24} />}
                  value={2}
                  label="Years"
                  inView={inView}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

