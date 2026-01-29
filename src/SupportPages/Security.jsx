import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
};

const Security = () => {
  const items = [
    { title: "Secure Infrastructure", desc: "Our systems use industry-standard security protocols." },
    { title: "Data Encryption", desc: "All sensitive data is encrypted end-to-end." },
    { title: "AI Safety", desc: "AI processes are monitored and controlled." },
    { title: "Regular Monitoring", desc: "Continuous system monitoring prevents threats." },
    { title: "Security Audits", desc: "Routine audits ensure platform safety." },
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
            className="bg-[#1c1f33] rounded-xl p-6 cursor-pointer"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 18px rgba(99,51,255,0.3)",
              backgroundColor: "#272b47",
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

export default Security;
