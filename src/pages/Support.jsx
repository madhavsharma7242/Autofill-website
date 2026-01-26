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

const Support = () => {
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
        {/* Support */}
      </motion.h1>

      <motion.div 
        className="space-y-6"
        variants={itemVariants}
      >
        
        {[
          { title: "FAQs", description: "Find answers to the most frequently asked questions." },
          { title: "Contact Us", description: "Reach out to our team for personalized support." },
          { title: "Documentation", description: "Explore our guides and tutorials for detailed help." }
        ].map((section, idx) => (
          <motion.div 
            key={idx}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-shadow"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(99,51,255,0.4)" }}
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-400">{section.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Support;
