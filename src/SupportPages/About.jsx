import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
};

const About = () => {
  const items = [
    { title: "What is QuickForm?", desc: "QuickForm is an AI-powered automation platform designed for cybercafes and service centers." },
    { title: "Our Mission", desc: "To simplify digital services using AI and automation." },
    { title: "Who We Serve", desc: "Cybercafes, agents, CSC centers, and document service providers." },
    { title: "Why QuickForm?", desc: "Fast processing, smart automation, and reliable results." },
  ];

  return (
    <motion.div className="p-10 min-h-screen bg-[#0a0a0c] text-white" variants={containerVariants} initial="hidden" animate="show">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" variants={itemVariants}>
       
      </motion.h1>

      <motion.div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#1c1f33] rounded-xl p-6"
            variants={itemVariants}
            whileHover={{ scale: 1.03, backgroundColor: "#272b47" }}
          >
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
