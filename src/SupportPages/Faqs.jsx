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
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
};

const Faqs = () => {
  const faqs = [
    { title: "What is QuickForm?", desc: "AI automation for cybercafes." },
    { title: "Who can use it?", desc: "Cybercafes, agents, and service centers." },
    { title: "Does it edit photos?", desc: "Yes, with AI background & size automation." },
    { title: "How can I contact support?", desc: "Reach out via our Contact Us page for personalized help." },
    { title: "Where can I learn more?", desc: "Check the About Us page to learn more about QuickForm." },
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
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-[#1c1f33] rounded-xl p-6 cursor-pointer transition-all"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 18px rgba(99,51,255,0.3)",
              backgroundColor: "#272b47",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <h3 className="font-semibold text-lg mb-1">{faq.title}</h3>
            <p className="text-gray-400">{faq.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Faqs;
