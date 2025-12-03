import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { IdentityShift } from './components/IdentityShift';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { StickyCTA } from './components/StickyCTA';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian text-white overflow-x-hidden selection:bg-gold-500 selection:text-black font-sans">
      {/* Global Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="relative z-10">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Comparison (Identity Shift) */}
        <div id="identity-shift">
          <IdentityShift />
        </div>

        {/* Section 3: FAQ & Closing */}
        <FAQ />
        <FinalCTA />
      </div>

      <StickyCTA />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-4 z-40 p-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300 md:bottom-8 md:right-8 shadow-lg group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;