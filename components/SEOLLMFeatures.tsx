"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, TrendingUp, BarChart3, Shield, Zap, Search, Globe, Target, ArrowRight, Lightbulb, Eye, Award } from 'lucide-react';
import GlassMorphism from './ui/GlassMorphism';

const SEOLLMFeatures = () => {
  const headerRef = useRef(null);
  const featuresRef = useRef(null);
  const insightRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });
  const insightInView = useInView(insightRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const features = [
    {
      icon: <Bot className="w-7 h-7" />,
      title: "AI Discovery",
      description: "AI platforms are becoming the new search engines. Position your brand to be discovered when customers ask AI for recommendations in your industry.",
      gradient: "from-blue-500 to-cyan-500",
      stats: "67% of searches",
      delay: 0
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Performance Tracking",
      description: "Monitor your visibility across ChatGPT, Claude, Gemini and other AI platforms. Track mentions, context, and ranking position over time.",
      gradient: "from-green-500 to-emerald-500",
      stats: "Real-time updates",
      delay: 0.1
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Competitive Intelligence",
      description: "Understand how your competitors are performing in AI search results. Identify gaps and opportunities to outrank them.",
      gradient: "from-purple-500 to-pink-500",
      stats: "Beat 95% of competitors",
      delay: 0.2
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Brand Monitoring",
      description: "Track every mention of your brand across AI platforms. Get alerts when your reputation is at risk and respond proactively.",
      gradient: "from-orange-500 to-red-500",
      stats: "24/7 protection",
      delay: 0.3
    }
  ];

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: "3x faster than manual tracking" },
    { icon: <Globe className="w-5 h-5" />, text: "All major AI platforms covered" },
    { icon: <Target className="w-5 h-5" />, text: "Actionable insights delivered" },
    { icon: <Award className="w-5 h-5" />, text: "Trusted by 1000+ brands" }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-green-200/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [180, 0, 180]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <GlassMorphism className="inline-flex items-center px-6 py-3" opacity={0.15}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <Lightbulb className="w-5 h-5 text-yellow-600" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700">The Future of SEO</span>
            </GlassMorphism>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Why{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI search optimization
            </span>
            {' '}matters
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AI assistants are changing how customers discover and evaluate brands. 
            Make sure you're visible when it matters most.
          </motion.p>

          {/* Quick benefits */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 1 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="mr-2 text-blue-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {benefit.icon}
                </motion.div>
                {benefit.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Highlighted insight */}
        <motion.div 
          ref={insightRef}
          className="mb-20"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={insightInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <GlassMorphism className="p-8 relative overflow-hidden" opacity={0.2}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"
              animate={{ 
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="flex items-start space-x-6 relative z-10">
              <motion.div 
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.span 
                  className="text-white font-bold text-xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  1
                </motion.span>
              </motion.div>
              <div>
                <motion.h3 
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={insightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SEOLLM
                  </span>
                  {' '}— The Future is Here
                </motion.h3>
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={insightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 }}
                >
                  The first comprehensive platform for monitoring and optimizing your brand's presence across AI platforms like ChatGPT, Claude, and Gemini.
                </motion.p>
                
                {/* Key metrics */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={insightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { value: "89%", label: "Visibility boost", icon: <Eye className="w-4 h-4" /> },
                    { value: "3.2x", label: "Faster results", icon: <Zap className="w-4 h-4" /> },
                    { value: "24/7", label: "Monitoring", icon: <Shield className="w-4 h-4" /> },
                    { value: "1000+", label: "Happy users", icon: <Award className="w-4 h-4" /> }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={insightInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <motion.div
                          className="text-blue-600 mr-2"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {metric.icon}
                        </motion.div>
                        <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                      </div>
                      <span className="text-sm text-gray-600">{metric.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </GlassMorphism>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          ref={featuresRef}
          className="grid lg:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={featuresInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -5 }}
            >
              <GlassMorphism className="p-8 h-full relative overflow-hidden" opacity={0.15}>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.div
                      className={`px-3 py-1 bg-gradient-to-r ${feature.gradient} bg-opacity-10 rounded-full`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={featuresInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: feature.delay + 0.3 }}
                    >
                      <span className="text-xs font-medium text-gray-700">{feature.stats}</span>
                    </motion.div>
                  </div>
                  
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: feature.delay + 0.2 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={featuresInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: feature.delay + 0.4 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Interactive element */}
                  <motion.div
                    className="flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    animate={featuresInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: feature.delay + 0.6 }}
                  >
                    <span>Learn more</span>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>
              </GlassMorphism>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div 
          ref={ctaRef}
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <GlassMorphism className="p-12 relative overflow-hidden" opacity={0.2}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5"
              animate={{ 
                background: [
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                  "linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                  "linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="relative z-10">
              <motion.div
                className="flex justify-center mb-6"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                  <Search className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                Ready to dominate AI search?
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                Join the AI revolution and ensure your brand gets discovered by the next generation of search.
              </motion.p>
              
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center mx-auto group shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started for Free
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </GlassMorphism>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOLLMFeatures; 