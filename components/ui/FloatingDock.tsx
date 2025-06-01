"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Search, BarChart3, Zap, Users, Settings } from 'lucide-react';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

const dockItems: DockItem[] = [
  { icon: <Home size={20} />, label: 'Home', href: '#' },
  { icon: <Search size={20} />, label: 'Analytics', href: '#features' },
  { icon: <BarChart3 size={20} />, label: 'Stats', href: '#stats' },
  { icon: <Zap size={20} />, label: 'Features', href: '#features' },
  { icon: <Users size={20} />, label: 'Pricing', href: '#pricing' },
  { icon: <Settings size={20} />, label: 'Settings', href: '#' }
];

export default function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 p-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl">
        {dockItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.a
              href={item.href}
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-gray-700 hover:text-blue-600 transition-colors duration-200 backdrop-blur-sm"
              animate={{
                scale: hoveredIndex === index ? 1.2 : 1,
                y: hoveredIndex === index ? -8 : 0
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {item.icon}
            </motion.a>
            
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -5, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap"
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 