import '../app/globals.css'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Documentation1 from '@/app/Components/Documentation1';
import Documentation2 from '@/app/Components/Documentation2';
import { Toaster, toast } from 'react-hot-toast';

const DashboardLayout = () => {
  const [activeDoc, setActiveDoc] = useState('doc1');
  const [isHovering, setIsHovering] = useState(null);
  const [viewMode, setViewMode] = useState('list');
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Toaster position="top-center" />
      {/* Fixed Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 flex flex-col ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        {/* Toggle Collapse Button */}
        <button 
          onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
          className="p-4 hover:bg-gray-50 flex items-center justify-center"
        >
          <svg
            className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
              isSidebarCollapsed ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Logo Area */}
        <div className="p-4 border-b">
          <h1 className={`font-bold bg-clip-text font-raleway text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 ${
            isSidebarCollapsed ? 'text-lg text-center' : 'text-xl'
          }`}>
            {isSidebarCollapsed ? 'NP' : 'Nexus Product'}
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 pt-4 overflow-y-auto">
          <button
            onClick={() => setActiveDoc('doc1')}
            onMouseEnter={() => setIsHovering('doc1')}
            onMouseLeave={() => setIsHovering(null)}
            className={`w-full p-3 flex items-center gap-3 transition-colors duration-200 relative
              ${activeDoc === 'doc1' 
                ? 'text-violet-600 bg-violet-50' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
          >
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            {!isSidebarCollapsed && <span className='font-raleway'>OCR Manager</span>}
            {activeDoc === 'doc1' && !isSidebarCollapsed && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute right-0 top-0 h-full w-1 bg-violet-600 rounded-l"
                initial={false}
              />
            )}
          </button>

          <button
            onClick={() => setActiveDoc('doc2')}
            onMouseEnter={() => setIsHovering('doc2')}
            onMouseLeave={() => setIsHovering(null)}
            className={`w-full p-3 flex items-center gap-3 transition-colors duration-200 relative
              ${activeDoc === 'doc2' 
                ? 'text-violet-600 bg-violet-50' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
          >
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {!isSidebarCollapsed && <span className='font-raleway'>Freshness Detection</span>}
            {activeDoc === 'doc2' && !isSidebarCollapsed && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute right-0 top-0 h-full w-1 bg-violet-600 rounded-l"
                initial={false}
              />
            )}
          </button>
        </nav>
      </div>

      {/* Main Content - With margin to account for fixed sidebar */}
      <div 
        className={`flex-1 transition-all duration-300 ${
          isSidebarCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#f4f4f4]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDoc}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeDoc === 'doc1' ? (
                  <div className="transform-gpu">
                    <Documentation1 />
                  </div>
                ) : (
                  <div className="transform-gpu">
                    <Documentation2 />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;