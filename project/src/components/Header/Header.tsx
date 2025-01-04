import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import NavLink from './NavLink';
import ScrollProgress from './ScrollProgress';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-xl border-b' : 'bg-transparent'} 
        md:${theme === 'light' ? 'bg-white' : 'bg-transparent'}`}
    >
      <ScrollProgress />
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#home"
            className="text-2xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Ahsan Ullah
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home" className="text-gray-900 dark:text-white">Home</NavLink>
            <NavLink href="#about" className="text-gray-900 dark:text-white">About</NavLink>
            <NavLink href="#projects" className="text-gray-900 dark:text-white">Projects</NavLink>
            <NavLink href="#contact" className="text-gray-900 dark:text-white">Contact</NavLink>

            {/* GitHub and LinkedIn Icons */}
            <a
              href="https://github.com/hAhsanullah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahsanullah-farooqi-full-stack-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className={`md:hidden py-4 ${theme === 'light' ? 'bg-white' : 'bg-transparent'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <NavLink href="#home" mobile onClick={() => setIsMenuOpen(false)} className="text-gray-900 dark:text-white">Home</NavLink>
              <NavLink href="#about" mobile onClick={() => setIsMenuOpen(false)} className="text-gray-900 dark:text-white">About</NavLink>
              <NavLink href="#projects" mobile onClick={() => setIsMenuOpen(false)} className="text-gray-900 dark:text-white">Projects</NavLink>
              <NavLink href="#contact" mobile onClick={() => setIsMenuOpen(false)} className="text-gray-900 dark:text-white">Contact</NavLink>

              {/* Theme Toggle Button for Mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={20} />
                    <span>Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun size={20} />
                    <span>Light Mode</span>
                  </>
                )}
              </button>

              {/* Mobile Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/HAhsanUllah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ahsanullah-farooqi-full-stack-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
