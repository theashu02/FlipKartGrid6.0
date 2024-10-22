"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Section = ({ title, children }) => (
    <motion.section
        className="mb-12 bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">{title}</h2>
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
                className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 py-1 rounded hover:from-blue-600 hover:to-indigo-600 focus:outline-none transition-all duration-300"
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
                <span className="text-indigo-500 mr-2">•</span>
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
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <h3 className="font-bold text-lg text-indigo-700 mb-2">{index + 1}. {step.title}</h3>
                <p className="text-gray-700 mb-2">{step.description}</p>
                {step.code && <CodeBlock>{step.code}</CodeBlock>}
            </motion.li>
        ))}
    </ol>
);

export default function Documentation1() {
    const features = [
        "OCR Integration: Extracts text from product images.",
        "Product Matching: Matches OCR output with product inventory using fuzzy matching and FAISS search for fast and accurate results.",
        "Multi-Image Upload: Supports uploading multiple images for batch processing.",
        "Flask Web Interface: Provides a simple web interface to upload images and view detected products."
    ];

    const setupSteps = [
        {
            title: "Clone the Repository",
            description: "Open your terminal and run:",
            code: "git clone https://github.com/Utkarsh-Shivhare/OCR_Inventory_Management.git\ncd OCR_INVENTORY_MANAGER"
        },
        {
            title: "Install Python and Virtual Environment (Optional)",
            description: "On macOS/Linux:",
            code: "python3 -m venv venv\nsource venv/bin/activate"
        },
        {
            title: "Install Dependencies",
            description: "Install the required Python packages by running:",
            code: "pip install -r requirements.txt"
        },
        {
            title: "Prepare the Inventory",
            description: "Ensure your Excel file (Product_Inventory.xlsx) has the following structure: Brand, Product Name"
        },
        {
            title: "Run the Application",
            description: "Start the Flask server by running:",
            code: "python app.py"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f4f4f4] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8 px-8">
                    <motion.h1
                        className="text-4xl font-extrabold text-white text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        OCR Inventory Manager
                    </motion.h1>
                </div>
                <div className="p-8">
                    <Section title="Overview">
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            This project demonstrates how to manage inventory and create bills using an OCR-based system integrated with Flask. The app automates the process of reading product details from images, extracting text using OCR, and matching those details against a product inventory stored in an Excel file.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Manually feeding product details into a system can be time-consuming and error-prone. This project provides an automated solution to manage inventory using OCR (Optical Character Recognition) technology. By uploading product images, the app extracts text data and matches it against a pre-existing inventory, helping businesses generate bills and track inventory automatically.
                        </p>
                    </Section>

                    <Section title="Features">
                        <FeatureList features={features} />
                    </Section>

                    <Section title="How to Set Up the Application">
                        <StepList steps={setupSteps} />
                    </Section>

                    <Section title="Using the App">
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2 font-bold">1.</span>
                                <span>Upload product images via the web interface.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2 font-bold">2.</span>
                                <span>The app will extract text from the images using OCR and attempt to match the extracted text with products in the inventory.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-500 mr-2 font-bold">3.</span>
                                <span>If a match is found, the product details will be displayed, and you can generate a bill from the selected products.</span>
                            </li>
                        </ul>
                    </Section>
                </div>
            </div>
        </div>
    );
}