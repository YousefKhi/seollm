"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassMorphismProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  border?: boolean;
  hover?: boolean;
}

export default function GlassMorphism({ 
  children, 
  className = "", 
  blur = 'lg',
  opacity = 0.1,
  border = true,
  hover = true
}: GlassMorphismProps) {
  const blurClass = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  const baseClasses = `
    relative overflow-hidden rounded-2xl
    ${blurClass[blur]}
    ${border ? 'border border-white/20' : ''}
    shadow-lg shadow-black/5
  `;

  const backgroundStyle = {
    backgroundColor: `rgba(255, 255, 255, ${opacity})`
  };

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      style={backgroundStyle}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      } : undefined}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
      
      {/* Animated border effect */}
      {border && (
        <motion.div
          className="absolute inset-0 rounded-2xl border border-white/30"
          animate={{ 
            borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.3)"]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
} 