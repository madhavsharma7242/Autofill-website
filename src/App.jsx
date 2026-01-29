import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import Header from './components/Header';
import Home from './pages/Home';
import Changelog from './pages/Changelog';
import Documentation from './pages/Documentation';
import Support from './pages/Support';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


import Faqs from './SupportPages/Faqs';
import Contact from './SupportPages/Contact';
import About from './SupportPages/About';
import Privacy from './SupportPages/Privacy';
import Terms from './SupportPages/Terms';
import Security from './SupportPages/Security';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.3, ease: "easeIn" } 
  }
};

const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path='/Documentation' element={<AnimatedPage><Documentation /></AnimatedPage>} />
          <Route path='/Support' element={<AnimatedPage><Support /></AnimatedPage>} />
          <Route path='/Changelog' element={<AnimatedPage><Changelog /></AnimatedPage>} />
          <Route path='/SignIn' element={<AnimatedPage><SignIn /></AnimatedPage>} />
          <Route path='/SignUp' element={<AnimatedPage><SignUp /></AnimatedPage>} />

          
          <Route path='/Support/faqs' element={<AnimatedPage><Faqs /></AnimatedPage>} />
          <Route path='/Support/contact' element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path='/Support/about' element={<AnimatedPage><About /></AnimatedPage>} />
          <Route path='/Support/privacy' element={<AnimatedPage><Privacy /></AnimatedPage>} />
          <Route path='/Support/terms' element={<AnimatedPage><Terms /></AnimatedPage>} />
          <Route path='/Support/security' element={<AnimatedPage><Security /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
