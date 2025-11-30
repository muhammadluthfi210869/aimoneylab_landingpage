import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({ children, onClick, className = '', fullWidth = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(212, 175, 55, 0.4)' }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative overflow-hidden group
        bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]
        text-black font-black uppercase tracking-wider
        py-4 px-8 rounded-lg shadow-[0_4px_15px_rgba(212,175,55,0.2)]
        flex items-center justify-center gap-2
        border border-[#FBF5B7]/50
        transition-all duration-300
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out z-0" />
      
      {/* Constant subtle shimmer for attention */}
      <motion.div 
        className="absolute inset-0 bg-white/20 skew-x-12"
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        transition={{ 
          repeat: Infinity, 
          duration: 2.5, 
          ease: "easeInOut",
          repeatDelay: 3 
        }}
      />
    </motion.button>
  );
};