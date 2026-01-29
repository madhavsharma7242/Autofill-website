import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Privacy = () => {
  const items = [
    { title: "Data Collection", desc: "We collect only necessary data to provide our services." },
    { title: "Data Usage", desc: "Your information is used strictly for service improvement." },
    { title: "Data Protection", desc: "All user data is securely stored and protected." },
    { title: "Third-Party Sharing", desc: "We do not sell or misuse your personal data." },
    { title: "User Rights", desc: "You have full control over your personal information." },
  ];

  return (
    <motion.div
      className="p-10 min-h-screen bg-[#0a0a0c] text-white"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        variants={itemVariants}
      >
        
      </motion.h1>

      <motion.div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1c1f33] rounded-xl p-6 cursor-pointer transition-all"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 18px rgba(99,51,255,0.3)",
              backgroundColor: "#272b47",
              transition: { duration: 0.2 },
            }}
          >
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Privacy;
