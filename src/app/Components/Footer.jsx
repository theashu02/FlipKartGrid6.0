'use client'
import React from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  const controls = useAnimation();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  React.useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.footer 
      className="bg-gray-800 text-white py-4 overflow-hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Text */}
        <motion.div 
          className="mb-4 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.p 
            className="text-sm"
            whileHover={{ scale: 1.05 }}
          >
            &copy; {currentYear} Made by{' '}
            <motion.a 
              href="https://github.com/theashu02/OCR_Inventory_Management" 
              className="text-blue-400 hover:underline"
              whileHover={{ color: "#60A5FA" }}
              whileTap={{ scale: 0.95 }}
            >
              @TeamNexus
            </motion.a>
            . All rights reserved.
          </motion.p>
        </motion.div>

        {/* Right: Buttons for Star and Fork */}
        <motion.div 
          className="flex space-x-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/Utkarsh-Shivhare/OCR_Inventory_Management"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              ⭐ Star
            </motion.span>
          </motion.a>
          <motion.a
            href="https://github.com/Utkarsh-Shivhare/OCR_Inventory_Management/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05, backgroundColor: "#059669" }}
            whileTap={{ scale: 0.95 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              🍴 Fork
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;