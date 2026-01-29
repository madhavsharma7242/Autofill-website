import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  const items = [
    { title: "Customer Support", desc: "Get help with services, billing, or issues." },
    { title: "Email Us", desc: "support@quickform.in" },
    { title: "Business Enquiries", desc: "partner with QuickForm for growth." },
    { title: "Response Time", desc: "We usually respond within 24 hours." },
  ];

  return (
    <motion.div className="p-10 min-h-screen bg-[#0a0a0c] text-white" variants={containerVariants} initial="hidden" animate="show">
      <motion.h1 className="text-4xl font-bold mb-8 text-center" variants={itemVariants}>
        Contact Us
      </motion.h1>

      <motion.div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <motion.div key={i} className="bg-[#1c1f33] rounded-xl p-6" variants={itemVariants}>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
