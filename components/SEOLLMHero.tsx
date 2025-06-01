"use client";

import { useState, useEffect, useRef } from 'react';
import { Claude, OpenAI } from '@lobehub/icons';
import { Gemini } from '@lobehub/icons';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, TrendingUp, BarChart3, Zap } from 'lucide-react';
import GlassMorphism from './ui/GlassMorphism';
import InteractiveGrid from './ui/InteractiveGrid';

const SEOLLMHero = () => {
  const [url, setUrl] = useState('');
  const [currentPlatformIndex, setCurrentPlatformIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Prevent hydration mismatch by only starting rotation after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const aiPlatforms = [
    {
      name: <OpenAI.Text size={20} >ChatGPT</OpenAI.Text>,
      textColor: 'text-gray-900', 
      logo: <OpenAI.Avatar size={24} shape={'square'} />
    },
    {
      name: <Claude.Text size={20} />,
      textColor: 'text-gray-900',
      logo: <Claude.Avatar size={24} shape={'square'} />
    },
    {
      name: <Gemini.Text size={20} />,
      textColor: 'text-gray-900',
      logo: <Gemini.Color size={24} />
    }
  ];

  // Custom rotating text animation
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentPlatformIndex((prev) => (prev + 1) % aiPlatforms.length);
        setIsAnimating(false);
      }, 200); // Half of transition duration
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isClient, aiPlatforms.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Interactive Background Grid */}
      <div className="absolute inset-0">
        <InteractiveGrid dotColor="#cbd5e1" spacing={40} dotSize={1.5} />
      </div>

      {/* Floating Background Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <GlassMorphism className="inline-flex items-center px-4 py-2 mb-8" opacity={0.15}>
            <Zap className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              AI is changing search — Get ahead now
            </span>
          </GlassMorphism>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Get more traffic from{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              AI
            </motion.span>
          </h1>

          {/* Subheadline with Rotating Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-5xl mx-auto leading-relaxed"
          >
            Marketers use SEOLLM to dominate{' '}
            <GlassMorphism className="inline-flex items-center px-4 py-3 mx-2" opacity={0.2} hover={false}>
              <span className="flex items-center space-x-2">
                <motion.span 
                  className={`transition-all duration-500 ease-in-out ${isAnimating ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}
                  animate={{ 
                    filter: isAnimating ? "brightness(1.2)" : "brightness(1)"
                  }}
                >
                  {aiPlatforms[currentPlatformIndex].logo}
                </motion.span>
                <span className="relative overflow-hidden">
                  <motion.span 
                    className={`block font-bold transition-all duration-400 ease-in-out ${
                      isAnimating ? 'transform translate-y-[-100%] opacity-0' : 'transform translate-y-0 opacity-100'
                    } ${aiPlatforms[currentPlatformIndex].textColor}`}
                  >
                    {aiPlatforms[currentPlatformIndex].name}
                  </motion.span>
                </span>
              </span>
            </GlassMorphism>
            {' '}AI / LLMs visibility and drive more traffic, leads, and sales.
          </motion.div>

          {/* URL Input and CTA */}
          <div className="max-w-2xl mx-auto mb-12">
            <GlassMorphism className="p-4" opacity={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <motion.div
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <TrendingUp size={20} />
                  </motion.div>
                  <input
                    type="text"
                    placeholder="Enter your website URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border-0 focus:ring-0 focus:outline-none bg-white/50 backdrop-blur-sm rounded-xl placeholder-gray-500 font-medium"
                  />
                </div>
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Analyze Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </GlassMorphism>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 mb-16">
            {[
              { icon: <Check size={16} />, text: "No credit card required" },
              { icon: <Zap size={16} />, text: "2-minute setup" },
              { icon: <TrendingUp size={16} />, text: "Instant insights" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="mr-2 text-green-500"
                  animate={{ rotate: [0, 360] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
                {item.text}
              </motion.div>
            ))}
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "1,000+", label: "Websites analyzed", icon: <BarChart3 className="w-6 h-6" /> },
              { value: "95%", label: "Avg visibility increase", icon: <TrendingUp className="w-6 h-6" /> },
              { value: "24/7", label: "Monitoring", icon: <Zap className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <GlassMorphism className="p-6 text-center" opacity={0.15}>
                  <motion.div 
                    className="text-blue-600 mb-3 flex justify-center"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </GlassMorphism>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOLLMHero; 