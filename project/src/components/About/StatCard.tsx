import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  inView: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, inView }) => {
  return (
    <motion.div
      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.40 }}
    >
      <div className="text-blue-600 dark:text-blue-400 mb-2">{icon}</div>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">
        {inView ? <CountUp end={value} duration={2.5} /> : '0'}
      </div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </motion.div>
  );
};

export default StatCard;