import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile, onClick }) => {
  const baseClasses = "relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors";
  const mobileClasses = "block px-4 py-2 text-lg";
  const desktopClasses = "inline-block";

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
};

export default NavLink;