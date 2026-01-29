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

const mobileMenuVariants = {
  hidden: { x: "100%", opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 300, damping: 25 }
  },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/Documentation", label: "Services we offer", icon: "📚" },
    { to: "/Support", label: "Support", icon: "❓" },
    { to: "/Changelog", label: "Changelog", icon: "📝" }
  ];

  const closeAndNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="flex items-center justify-between px-8 py-4 bg-[#0a0a0c] text-white border-b border-gray-800"
    >

      {/* LOGO */}
      <motion.div 
        className="flex items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        {/* LOGO CONTAINER */}
        <motion.div
          className="w-12 h-12 rounded-xl p-[2px] shadow-lg bg-gradient-to-br from-purple-600 to-indigo-600"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
            {/* INLINE SVG LOGO */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F46E5"/>
                  <stop offset="100%" stopColor="#8B5CF6"/>
                </linearGradient>
                <linearGradient id="nrGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF"/>
                  <stop offset="100%" stopColor="#E0E7FF"/>
                </linearGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="2.5" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M100 10 L170 40 V115 C170 155 135 185 100 195 C65 185 30 155 30 115 V40 Z"
                fill="url(#shieldGradient)"
                filter="url(#softGlow)"
              />

              <path
                d="M70 65 V135 L100 65 V135"
                stroke="url(#nrGradient)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M110 65 V135
                   M110 65 H135
                   C150 65 150 95 135 95
                   H110
                   M135 95 L155 135"
                stroke="url(#nrGradient)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        <span className="text-xl font-bold tracking-tight">
          NavRiox
        </span>
      </motion.div>

      {/* DESKTOP NAV */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
        {navLinks.map((item, i) => (
          <motion.div key={i} whileHover="hover" variants={menuItem}>
            <Link to={item.to} className="flex items-center gap-1.5 hover:text-white">
              <span>{item.icon}</span> {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP BUTTONS */}
      <div className="hidden lg:flex items-center gap-4">
        <button 
          onClick={() => navigate('/SignIn')}
          className="text-sm text-gray-400 hover:text-white"
        >
          Sign In
        </button>

        <button 
          onClick={() => navigate('/SignUp')}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 rounded-full text-sm font-semibold"
        >
          Sign Up
        </button>
      </div>

      {/* HAMBURGER */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed top-0 right-0 w-3/4 h-full bg-[#0a0a0c] z-40 p-8 flex flex-col gap-6"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <button onClick={() => setMenuOpen(false)} className="self-end text-2xl">
              ✕
            </button>

            {navLinks.map((item, i) => (
              <div key={i} onClick={() => closeAndNavigate(item.to)} className="text-xl">
                {item.icon} {item.label}
              </div>
            ))}

            <div className="mt-auto flex gap-4">
              <button 
                onClick={() => closeAndNavigate('/SignIn')}
                className="text-gray-400 hover:text-white"
              >
                Sign In
              </button>

              <button 
                onClick={() => closeAndNavigate('/SignUp')}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 rounded-full text-sm"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Header;
