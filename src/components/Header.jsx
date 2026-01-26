import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.12 } 
  }
};

const menuItem = {
  hidden: { opacity: 0, y: -15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  hover: { scale: 1.05 }
};

const socialIcon = {
  hover: { scale: 1.2, color: "#a78bfa" }
};

const mobileMenuVariants = {
  hidden: { x: "100%", opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 300, damping: 25, staggerChildren: 0.1 }
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // <-- Added

  const navLinks = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/Documentation", label: "Services we offer", icon: "📚" },
    { to: "/Support", label: "Support", icon: "❓" },
    { to: "/Changelog", label: "Changelog", icon: "📝" }
  ];

  const socialLinks = ["fab fa-discord","fab fa-twitter","fab fa-github"];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="flex items-center justify-between px-8 py-4 bg-[#0a0a0c] text-white border-b border-gray-800 relative"
    >
      <motion.div 
        className="flex items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.08 }}
      >
        <motion.div
          className="bg-[#6333FF] p-2 rounded-lg"
          whileHover={{ rotate: [0, 8, -8, 0], scale: 1.15 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
        >
          <svg 
            width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </motion.div>

        <motion.span 
          className="text-xl font-bold tracking-tight"
          whileHover={{ color: "#a78bfa", scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          QuickForm
        </motion.span>
      </motion.div>

      <motion.div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
        {navLinks.map((item, i) => (
          <motion.div key={i} variants={menuItem} whileHover="hover" className="relative cursor-pointer">
            <Link to={item.to} className="flex items-center gap-1.5 transition-colors duration-200">
              <span>{item.icon}</span> {item.label}
            </Link>
            <motion.div 
              layoutId="underline"
              className="absolute left-0 -bottom-1 h-[2px] bg-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-4 text-gray-400 border-r border-gray-700 pr-6">
          {socialLinks.map((icon, idx) => (
            <motion.a key={idx} href="#" className="transition-colors" whileHover={socialIcon.hover}>
              <i className={icon}></i>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/SignIn')} // <-- Updated
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Sign In
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.1, boxShadow: "0px 5px 20px rgba(99,51,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/SignUp')} // <-- Updated
            className="bg-gradient-to-r from-[#6333FF] to-[#8b5cf6] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Sign Up
          </motion.button>
        </div>
      </div>

      <div className="lg:hidden flex items-center gap-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none z-50">
          <motion.div animate={{ rotate: menuOpen ? 45 : 0 }} className="w-6 h-0.5 bg-white mb-1"></motion.div>
          <motion.div animate={{ opacity: menuOpen ? 0 : 1 }} className="w-6 h-0.5 bg-white mb-1"></motion.div>
          <motion.div animate={{ rotate: menuOpen ? -45 : 0 }} className="w-6 h-0.5 bg-white"></motion.div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed top-0 right-0 w-3/4 h-full bg-[#0a0a0c] z-40 p-8 flex flex-col gap-8"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <button onClick={() => setMenuOpen(false)} className="self-end text-white text-2xl font-bold">
              ✕
            </button>

            {navLinks.map((item, i) => (
              <motion.div 
                key={i} 
                variants={menuItem}
                whileHover={{ scale: 1.05 }}
                onClick={() => setMenuOpen(false)}
              >
                <Link to={item.to} className="text-xl flex items-center gap-2">
                  <span>{item.icon}</span> {item.label}
                </Link>
              </motion.div>
            ))}

            <div className="flex items-center gap-4 mt-auto">
              {socialLinks.map((icon, idx) => (
                <motion.a key={idx} href="#" whileHover={socialIcon.hover}>
                  <i className={icon}></i>
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/SignIn')} // <-- Updated
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Sign In
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1, boxShadow: "0px 5px 20px rgba(99,51,255,0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/SignUp')} // <-- Updated
                className="bg-gradient-to-r from-[#6333FF] to-[#8b5cf6] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
              >
                Sign Up
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
