"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';



const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            details: ["ashutoshchauhan1919@gmail.com", "utkarshshivhare26@gmail.com"],
            color: "bg-blue-50"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            details: ["+91 9555986066", "+91 8960370500"],
            color: "bg-green-50"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            details: ["Madan Mohan Malaviya University Of Technology", "Uttar Pradesh, Gorakhpur, 273010"],
            color: "bg-purple-50"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            details: ["Monday - Friday", "Sat-Sun: Closed"],
            color: "bg-orange-50"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                        </p>

                    </motion.div>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            variants={itemVariants}
                            onHoverStart={() => setActiveSection(index)}
                            onHoverEnd={() => setActiveSection(null)}
                            className={`relative p-6 rounded-xl shadow-lg bg-white overflow-hidden group`}
                        >
                            <div className={`absolute inset-0 ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${activeSection === index ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                                {info.details.map((detail, i) => (
                                    <p key={i} className="text-gray-600">{detail}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-gray-100 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <MapPin className="w-16 h-16 text-gray-400" />
                        </div>
                    </motion.div>



                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors duration-200"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-colors duration-200 resize-none"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full px-6 py-3 rounded-lg bg-violet-600 text-white font-medium 
                  ${isSubmitting ? 'opacity-80' : 'hover:bg-violet-700'} 
                  transition-colors duration-200 flex items-center justify-center space-x-2`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Success Dialog */}
            {/* <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Message Sent Successfully!</AlertDialogTitle>
                        <AlertDialogDescription>
                            Thank you for contacting us. We'll get back to you as soon as possible.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => setShowSuccess(false)}>
                            Close
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog> */}


        </div>
    );
};

export default ContactPage;