'use client'
import { motion } from 'framer-motion';
import { Leaf, Zap, Database, Brain, BarChart2, Share2 } from 'lucide-react';

const FreshnessDetection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    { title: "Data Collection", icon: Database, color: "text-blue-500" },
    { title: "Preprocessing", icon: Zap, color: "text-yellow-500" },
    { title: "Model Training", icon: Brain, color: "text-purple-500" },
    { title: "Freshness Detection", icon: Leaf, color: "text-green-500" },
    { title: "Real-Time Monitoring", icon: BarChart2, color: "text-red-500" },
    { title: "Open Source", icon: Share2, color: "text-indigo-500" }
  ];

  return (
    <div className="font-consolas bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center justify-center p-5">
      <motion.div 
        initial="initial"
        animate="animate"
        className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold mb-4 text-center"
            variants={fadeIn}
          >
            Advanced Freshness Detection System
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center font-light"
            variants={fadeIn}
          >
            Revolutionizing produce freshness prediction with AI and open-source collaboration
          </motion.p>
        </div>

        <div className="p-8 md:p-12 lg:p-16">
          <motion.p 
            className="text-lg md:text-xl text-gray-600 text-center mb-12"
            variants={fadeIn}
          >
            Our cutting-edge system leverages open-source datasets, advanced AI models, and continuous improvement to accurately predict and enhance the shelf life of fresh fruits and vegetables.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105"
                variants={fadeIn}
                custom={index}
              >
                <div className={`${step.color} rounded-full p-3 inline-block mb-4`}>
                  <step.icon size={24} />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">{`Step ${index + 1}: ${step.title}`}</h2>
                <p className="text-gray-600">
                  {getStepDescription(step.title)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const getStepDescription = (title) => {
  switch (title) {
    case "Data Collection":
      return "Utilizing open-source datasets to gather comprehensive information on fresh produce characteristics and shelf life patterns.";
    case "Preprocessing":
      return "Cleaning and enhancing data to optimize model learning capabilities, ensuring high-quality input for our AI systems.";
    case "Model Training":
      return "Leveraging open-source machine learning frameworks to fine-tune state-of-the-art AI models for precise freshness detection.";
    case "Freshness Detection":
      return "Deploying trained models to predict shelf life in real-time, providing accurate assessments of produce quality.";
    case "Real-Time Monitoring":
      return "Continuous quality assessment to minimize waste and ensure peak freshness throughout the supply chain.";
    case "Open Source":
      return "Step one, data collection, and step three, model training, are taken from the open-source project.";
    default:
      return "";
  }
};

export default FreshnessDetection;