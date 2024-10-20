'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCameraRetro, FaFileAlt, FaTag, FaClipboardList, FaBoxOpen, FaCheckCircle } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const StepCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="flex items-center mb-4"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: delay, duration: 0.5 }}
      >
        <Icon className="text-blue-600 w-8 h-8" />
        <h3 className="text-2xl font-bold text-gray-800 ml-2">{title}</h3>
      </motion.div>
      <motion.p 
        className="text-gray-600"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default function ProductDescription() {
  return (
    <motion.section 
      className="bg-gray-50 py-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl font-extrabold font-sticknobills text-gray-800 md:text-[70px] tracking-wider mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
          >
            Product Description
          </motion.h2>
          <motion.p 
            className="text-lg font-consolas font-light text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Our smart vision technology uses a highly effective algorithm to detect and match product attributes.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-10 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <StepCard 
            icon={FaCameraRetro} 
            title="1. OCR to Detect Image" 
            description="First, we apply Optical Character Recognition (OCR) technology to analyze the image and extract key data from the product."
            delay={0.2}
          />
          <StepCard 
            icon={FaFileAlt} 
            title="2. Convert Data into String" 
            description="After detecting the image, we convert the extracted data into a string format for easier processing."
            delay={0.4}
          />
          <StepCard 
            icon={FaTag} 
            title="3. Brand Matching" 
            description="Using a custom-built algorithm, we match the extracted string data with the brand of the product."
            delay={0.6}
          />
          <StepCard 
            icon={FaClipboardList} 
            title="4. Category and Flavor Detection" 
            description="Next, we categorize the product and identify its flavor to ensure precise classification."
            delay={0.8}
          />
          <StepCard 
            icon={FaBoxOpen} 
            title="5. Product Type Identification" 
            description="Our algorithm further identifies the type of product based on the provided data."
            delay={1.0}
          />
          <StepCard 
            icon={FaCheckCircle} 
            title="6. Final Output" 
            description="If the product matches our database, we provide the final output with the product name, type, and category."
            delay={1.2}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}