import React from 'react';
import { motion } from "framer-motion";
import Hero from '../components/Hero';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.2
    }
  },
  exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250, damping: 20 } }
};

const Home = () => {
  return (
    <motion.div
      className="overflow-hidden min-h-screen bg-[#0a0a0c]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>

     
      <motion.div 
        className="p-8 text-center text-white"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          whileHover={{ scale: 1.03, color: "#a78bfa" }}
        >
          Welcome to QuickForm
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Build forms, automate workflows, and grow your business effortlessly.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Home;
