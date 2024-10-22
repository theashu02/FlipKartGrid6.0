"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Section = ({ title, children }) => (
    <motion.section
        className="mb-12 bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">{title}</h2>
        {children}
    </motion.section>
);

const CodeBlock = ({ children }) => {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(children);
            toast.success('Copied to clipboard!');
            setTimeout(() => setCopySuccess(''), 2000);
        } catch (err) {
            toast.error('Failed to copy!');
        }
    };

    return (
        <motion.pre
            className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm my-4 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <code className="font-mono">{children}</code>
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded hover:from-green-600 hover:to-teal-600 focus:outline-none transition-all duration-300"
            >
                Copy
            </button>
            {copySuccess && (
                <span className="absolute top-2 left-2 text-green-300 text-sm">{copySuccess}</span>
            )}
        </motion.pre>
    );
};

const FeatureList = ({ features }) => (
    <ul className="space-y-2">
        {features.map((feature, index) => (
            <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <span className="text-green-500 mr-2">•</span>
                <span className="text-gray-700">{feature}</span>
            </motion.li>
        ))}
    </ul>
);

const StepList = ({ steps }) => (
    <ol className="space-y-6">
        {steps.map((step, index) => (
            <motion.li
                key={index}
                className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <h3 className="font-bold text-lg text-green-700 mb-2">{index + 1}. {step.title}</h3>
                <p className="text-gray-700 mb-2">{step.description}</p>
                {step.code && <CodeBlock>{step.code}</CodeBlock>}
            </motion.li>
        ))}
    </ol>
);

export default function Documentation2() {
    const features = [
        "Real-Time Detection: Use live webcam feed to detect rotten products in real-time",
        "Image Detection: Upload images to quickly detect rotten fruits or vegetables",
        "YOLO Model: Leverages YOLOv8 model for object detection",
        "Scalable: Can be expanded to include more types of produce and different detection models",
        "Customizable: Allows for fine-tuning and deployment of different models for higher accuracy"
    ];

    const setupSteps = [
        {
            title: "Clone the Repository",
            description: "Open your terminal and run:",
            code: "git clone https://github.com/Utkarsh-Shivhare/Freshness_detection.git\ncd Freshness_Detection"
        },
        {
            title: "Set up Virtual Environment",
            description: "On macOS/Linux:",
            code: "python3 -m venv venv\nsource venv/bin/activate"
        },
        {
            title: "Install Dependencies",
            description: "Install the required Python packages:",
            code: "pip install -r requirements.txt"
        },
        {
            title: "Run the Application",
            description: "Start the Flask server:",
            code: "python app.py"
        }
    ];

    const usageSteps = [
        {
            title: "Live Feed Detection",
            description: "For real-time detection using webcam:",
            code: "python FreshnessDetection_live.py"
        },
        {
            title: "Image Detection",
            description: "For processing uploaded images:",
            code: "python FreshnessDetection_image.py"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f4f4f4] py-12 px-4 sm:px-6 lg:px-8">
            {/* <Toaster position="top-center" /> */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 py-8 px-8">
                    <motion.h1
                        className="text-4xl font-extrabold text-white text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Freshness Detection for QuickCommerce
                    </motion.h1>
                </div>
                <div className="p-8">
                    <Section title="Overview">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            This project provides an automated solution to quickly detect and filter out rotten fruits and vegetables at the warehouse level for QuickCommerce platforms. It leverages object detection models to ensure that only fresh products are delivered to customers, preventing the delivery of spoiled or subpar produce.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            While the current system does not cover all types of fruits and vegetables, it can be expanded with more data and models to enhance accuracy and effectiveness. The system uses publicly available data from Roboflow for model training and refinement.
                        </p>
                    </Section>

                    <Section title="Features">
                        <FeatureList features={features} />
                    </Section>

                    <Section title="Installation">
                        <StepList steps={setupSteps} />
                    </Section>

                    <Section title="Usage">
                        <StepList steps={usageSteps} />
                    </Section>

                    <Section title="Future Enhancements">
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">•</span>
                                <span>Expand the dataset to include more fruits and vegetables</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">•</span>
                                <span>Implement real-time data capture for model refinement</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">•</span>
                                <span>Integrate a dashboard for visualizing detection results and generating reports</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2 font-bold">•</span>
                                <span>Experiment with different models or custom-trained models for improved accuracy</span>
                            </li>
                        </ul>
                    </Section>
                </div>
            </div>
        </div>
    );
}