import { motion } from 'framer-motion';
import { 
  Zap, 
  FileText, 
  UserCheck, 
  BarChart2, 
  ShoppingCart, 
  PieChart, 
  Clipboard, 
  TrendingUp, 
  Layers, 
  Search
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 rounded-full p-3 mr-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function Features() {
    const features = [
        {
            icon: Zap,
            title: "Faster Billing",
            description: "Reduce processing time with streamlined billing operations, ensuring quick transactions."
        },
        {
            icon: FileText,
            title: "Simplified Billing",
            description: "Implement OCR technology to automatically extract data from invoices, minimizing manual input."
        },
        {
            icon: UserCheck,
            title: "Decreased Manual Work",
            description: "Automate routine tasks and reduce manual data entry, freeing your team to focus on strategic initiatives."
        },
        {
            icon: ShoppingCart,
            title: "Increase Order Capacity",
            description: "Handle a higher volume of orders daily with improved efficiency, ensuring customer satisfaction."
        },
        {
            icon: BarChart2,
            title: "Enhanced Reporting",
            description: "Generate detailed reports with real-time insights to make informed business decisions and improve performance."
        },
        {
            icon: TrendingUp,
            title: "Improved Customer Satisfaction",
            description: "Enhance customer experience with faster service, accurate order processing, and timely deliveries."
        },
        {
            icon: Layers,
            title: "Efficient Inventory Management",
            description: "Streamline inventory control with real-time tracking, minimizing stockouts and overstock situations."
        },
        {
            icon: PieChart,
            title: "Real-Time Analytics",
            description: "Access live data insights and analytics, enabling proactive decision-making and quick response to market trends."
        },
        {
            icon: Search,
            title: "Count Products Using OCR",
            description: "Leverage OCR technology to automatically count and categorize products, improving inventory accuracy and reducing errors."
        }
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    className="font-raleway text-4xl font-bold text-center mb-12 text-gray-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Designed for Quick Commerce Industry
                </motion.h2>
                <div className="font-consolas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}