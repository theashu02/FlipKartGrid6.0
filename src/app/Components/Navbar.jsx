"use client"
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = {
    "About Us": [],
    "Documentation": [],
    "Contact Us": [],
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Function to handle navigation
  const handleNavigation = (category) => {
    if (category === "Documentation") {
      router.push("/documentation");
    }
    if (category === "Contact Us") {
      router.push("/ContactUs");
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FGR</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Flipkart Grid Robotics 6.0
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {Object.entries(menuItems).map(([category, items]) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown('')}
              >
                <motion.div
                  className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(category)}
                >
                  <span>{category}</span>
                  {items.length > 0 && <ChevronDown size={16} />}
                </motion.div>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === category && items.length > 0 && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute top-full -left-2 w-48 bg-white rounded-lg shadow-lg py-2"
                    >
                      {items.map((item) => (
                        <motion.a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.div className="lg:hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="lg:hidden"
            >
              {Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="py-2">
                  <div 
                    className="font-medium text-gray-900 px-4 py-2 cursor-pointer"
                    onClick={() => handleNavigation(category)}
                  >
                    {category}
                  </div>
                  {items.map((item) => (
                    <motion.a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}