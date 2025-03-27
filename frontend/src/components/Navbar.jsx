import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Create Post", path: "/create-post" },
    { name: "Profile", path: "/profile" },
    { name: "Auth", path: "/auth" },
  ];

  return (
    <nav className="bg-[#0f0f0f] text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/" className="text-2xl font-bold tracking-wider text-teal-400">
            BlogSphere
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg transition-all duration-300 ${
                  isActive ? "text-teal-400 font-semibold border-b-2 border-teal-400" : "hover:text-teal-300"
                }`
              }
              end
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="md:hidden bg-[#121212] px-4 py-4 space-y-4"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive ? "text-teal-400 font-semibold border-b-2 border-teal-400" : "hover:text-teal-300"
                }`
              }
              end
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
