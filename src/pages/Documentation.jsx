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

const Documentation = () => {
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
        {/* Services */}
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={itemVariants}
      >
        
        {["Photo Editing Automation", "Form Filling Templates", "Document Management", "Customer Data Storage"].map((service, idx) => (
          <motion.div 
            key={idx}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(99,51,255,0.4)" }}
          >
            <h2 className="text-xl font-semibold mb-2">{service}</h2>
            <p className="text-gray-400">High-quality {service.toLowerCase()} to boost your business.</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Documentation;
