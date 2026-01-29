import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const pages = [
    { title: "FAQs", path: "/Support/faqs", description: "Find answers to the most frequently asked questions." },
    { title: "Contact Us", path: "/Support/contact", description: "Reach out to our team for personalized support." },
    { title: "About Us", path: "/Support/about", description: "Learn about our AI automation for cybercafes." },
    { title: "Privacy Policy", path: "/Support/privacy", description: "How we collect and protect your data." },
    { title: "Terms of Service", path: "/Support/terms", description: "Rules for using our platform." },
    { title: "Security", path: "/Support/security", description: "How we keep your data secure." },
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
      </motion.h1>

      <motion.div className="space-y-6" variants={itemVariants}>
        {pages.map((section, idx) => (
          <motion.div 
            key={idx}
            onClick={() => navigate(section.path)}
            className="bg-gray-900 p-6 rounded-xl shadow-lg cursor-pointer transition-shadow"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0px 8px 18px rgba(99,51,255,0.3)",
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-400">{section.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Support;
