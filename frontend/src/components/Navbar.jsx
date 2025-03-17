// src/components/Navbar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
   const [darkMode, setDarkMode] = useState(false);

   const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
   }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center transition-colors duration-500">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400"
      >
        Memories ✨
      </motion.h1>
      <div className="flex items-center space-x-6">
        <a href="/" className="hover:text-indigo-500 dark:text-white">Home</a>
        <a href="#create" className="hover:text-indigo-500 dark:text-white">Create</a>
        <motion.button
          whileTap={{ rotate: 360 }}
          onClick={toggleDark}
          className="focus:outline-none"
        >
          {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-white" />}
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
