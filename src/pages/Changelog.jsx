import React from 'react';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.2
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
};

const Changelog = () => {
  const updates = [
    { version: "v1.3.0", date: "Jan 2026", details: "Added mobile menu animations and gradient buttons." },
    { version: "v1.2.5", date: "Dec 2025", details: "Updated UI with hover effects and service cards." },
    { version: "v1.2.0", date: "Nov 2025", details: "Initial support and documentation pages with animations." },
  ];

  return (
    <motion.div 
      className="p-8 min-h-screen bg-[#0a0a0c] text-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1 
        className="text-3xl font-bold mb-6"
        variants={itemVariants}
      >
        {/* Changelog */}
      </motion.h1>

      <motion.div className="space-y-6" variants={itemVariants}>
        {updates.map((update, idx) => (
          <motion.div 
            key={idx} 
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(99,51,255,0.4)" }}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{update.version}</h2>
              <span className="text-gray-400 text-sm">{update.date}</span>
            </div>
            <p className="text-gray-400">{update.details}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Changelog;
