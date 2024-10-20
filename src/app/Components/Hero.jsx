// 'use client'
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import three from './../images/3.jpeg';

// export default function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const buttonVariants = {
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 0px 15px rgba(59,130,246,0.5)",
//       transition: { duration: 0.3, yoyo: Infinity },
//     },
//   };

//   return (
//     <motion.section
//       className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-24 min-h-screen flex items-center"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//         <motion.div className="mr-auto place-self-center lg:col-span-7" variants={itemVariants}>
//           <motion.h1
//             className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
//             variants={itemVariants}
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600">
//               Smart Vision Technology
//             </span>
//             <br />
//             <span className="text-gray-800">
//               Quality Control
//             </span>
//           </motion.h1>
//           <motion.p
//             className="max-w-2xl font-consolas mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl"
//             variants={itemVariants}
//           >
//             Smart vision technology automates quality control by using advanced imaging to detect product quantity and defects. It streamlines inspection with real-time visual analysis.
//           </motion.p>
//           <motion.button
//             className="inline-flex items-center justify-center px-5 py-3 font-consolas mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
//             variants={buttonVariants}
//             whileHover="hover"
//             whileTap={{ scale: 0.95 }}
//           >
//             Get started
//             <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//               <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </motion.button>
//         </motion.div>
//         <motion.div
//           className="hidden lg:mt-0 lg:col-span-5 lg:flex"
//           variants={imageVariants}
//         >
//           <motion.div
//             className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
//             whileHover={{ scale: 1.05, rotate: 2 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Image
//               src={three}
//               alt="Smart Vision Technology"
//               layout="responsive"
//               className="rounded-3xl"
//             />
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import three from './../images/3.jpeg';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(59,130,246,0.5)",
      transition: { duration: 0.3, yoyo: Infinity },
    },
  };

  const handleGetStartedClick = () => {
    if (containerRef.current) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-24 min-h-screen flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div className="mr-auto place-self-center lg:col-span-7" variants={itemVariants}>
          <motion.h1
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600">
              Smart Vision Technology
            </span>
            <br />
            <span className="text-gray-800">
              Quality Control
            </span>
          </motion.h1>
          <motion.p
            className="max-w-2xl font-consolas mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl"
            variants={itemVariants}
          >
            Smart vision technology automates quality control by using advanced imaging to detect product quantity and defects. It streamlines inspection with real-time visual analysis.
          </motion.p>
          <motion.button
            className="inline-flex items-center justify-center px-5 py-3 font-consolas mr-3 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStartedClick}
          >
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
        <motion.div
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          variants={imageVariants}
        >
          <motion.div
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={three}
              alt="Smart Vision Technology"
              layout="responsive"
              className="rounded-3xl"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}