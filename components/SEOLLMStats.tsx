"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, BarChart3, Target, Zap, Award, Shield, Globe, Eye, Search, Bot, ArrowRight } from 'lucide-react';
import GlassMorphism from './ui/GlassMorphism';

const SEOLLMStats = () => {
  const [animatedValues, setAnimatedValues] = useState({
    visibility: 0,
    mentions: 0,
    ranking: 0
  });

  const statsRef = useRef(null);
  const chartsRef = useRef(null);
  const sourcesRef = useRef(null);
  
  const statsInView = useInView(statsRef, { once: true });
  const chartsInView = useInView(chartsRef, { once: true });
  const sourcesInView = useInView(sourcesRef, { once: true });

  // Animate values when in view
  useEffect(() => {
    if (statsInView) {
      const timer = setTimeout(() => {
        setAnimatedValues({
          visibility: 67,
          mentions: 89,
          ranking: 45
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [statsInView]);

  const competitorData = [
    { rank: 1, name: "Your Brand", percentage: 67, color: "bg-gradient-to-r from-blue-500 to-blue-600", textColor: "text-blue-600", icon: <Award className="w-5 h-5" /> },
    { rank: 2, name: "DigitalOcean", percentage: 50, color: "bg-gray-400", textColor: "text-gray-600", icon: <Globe className="w-5 h-5" /> },
    { rank: 3, name: "Loveable", percentage: 23, color: "bg-gray-400", textColor: "text-gray-600", icon: <Target className="w-5 h-5" /> },
    { rank: 4, name: "Cursor", percentage: 12, color: "bg-gray-400", textColor: "text-gray-600", icon: <Search className="w-5 h-5" /> },
    { rank: 5, name: "Others", percentage: 8, color: "bg-gray-300", textColor: "text-gray-500", icon: <BarChart3 className="w-5 h-5" /> }
  ];

  const visibilityData = [
    { date: "Week 1", value: 23, targetValue: 67 },
    { date: "Week 2", value: 35, targetValue: 67 },
    { date: "Week 3", value: 52, targetValue: 67 },
    { date: "Week 4", value: 67, targetValue: 67 }
  ];

  const aiSources = [
    { name: "vercel.com", percentage: 45.3, color: "bg-gradient-to-r from-blue-500 to-blue-600", icon: <Globe className="w-4 h-4" /> },
    { name: "dev.to", percentage: 19.7, color: "bg-gradient-to-r from-green-500 to-green-600", icon: <Bot className="w-4 h-4" /> },
    { name: "genezio.com", percentage: 15.2, color: "bg-gradient-to-r from-purple-500 to-purple-600", icon: <Zap className="w-4 h-4" /> },
    { name: "strapi.io", percentage: 12.8, color: "bg-gradient-to-r from-orange-500 to-orange-600", icon: <Target className="w-4 h-4" /> },
    { name: "others", percentage: 7.0, color: "bg-gray-300", icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const AnimatedProgressBar = ({ percentage, delay = 0, color = "bg-blue-600" }) => {
    return (
      <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div 
          className={`h-3 rounded-full ${color} relative`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-white/30 rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Competitive Analysis Section */}
        <motion.div 
          ref={statsRef}
          className="grid lg:grid-cols-2 gap-16 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <GlassMorphism className="inline-flex items-center px-4 py-2 mb-6" opacity={0.15}>
                <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">
                  Competitive Analysis
                </span>
              </GlassMorphism>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Outrank your competitors in{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI search
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                See exactly how your competitors perform in AI recommendations. 
                Identify opportunities to improve your ranking and visibility.
              </p>
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-4 h-4 mr-2" />
                Start Analysis
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Competitor Rankings */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={statsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassMorphism className="p-8" opacity={0.2}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Brand Mention Frequency</h3>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Eye className="w-5 h-5 text-blue-600" />
                </motion.div>
              </div>
              <div className="space-y-6">
                {competitorData.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-4">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          item.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' : 'bg-gray-100'
                        }`}>
                          <span className={`text-sm font-bold ${
                            item.rank === 1 ? 'text-white' : 'text-gray-500'
                          }`}>
                            #{item.rank}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`${item.textColor}`}>
                            {item.icon}
                          </div>
                          <span className="font-medium text-gray-900">{item.name}</span>
                        </div>
                      </div>
                      <motion.span 
                        className="text-lg font-semibold text-gray-900"
                        initial={{ scale: 0 }}
                        animate={statsInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                      >
                        {item.percentage}%
                      </motion.span>
                    </div>
                    <AnimatedProgressBar 
                      percentage={item.percentage} 
                      delay={0.8 + (index * 0.1)}
                      color={item.color}
                    />
                  </motion.div>
                ))}
              </div>
            </GlassMorphism>
          </motion.div>
        </motion.div>

        {/* Visibility Tracking Section */}
        <motion.div 
          ref={chartsRef}
          className="grid lg:grid-cols-2 gap-16 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side - Chart */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={chartsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassMorphism className="p-8" opacity={0.2}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Visibility Growth Trend</h3>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </motion.div>
              </div>
              
              {/* Enhanced chart */}
              <div className="space-y-6 mb-6">
                {visibilityData.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={chartsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 w-16 font-medium">{item.date}</span>
                      <div className="flex items-center space-x-2">
                        <motion.span 
                          className="text-sm font-semibold text-gray-900"
                          initial={{ opacity: 0 }}
                          animate={chartsInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        >
                          {item.value}%
                        </motion.span>
                        {index === visibilityData.length - 1 && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={chartsInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            Target reached!
                          </motion.div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 mx-4">
                      <AnimatedProgressBar 
                        percentage={item.value} 
                        delay={0.6 + (index * 0.1)}
                        color="bg-gradient-to-r from-green-500 to-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Performance metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-2xl font-bold text-green-600">+191%</div>
                  <div className="text-sm text-gray-600">Growth</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={chartsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="text-2xl font-bold text-blue-600">4 weeks</div>
                  <div className="text-sm text-gray-600">To target</div>
                </motion.div>
              </div>
            </GlassMorphism>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={chartsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <GlassMorphism className="inline-flex items-center px-4 py-2 mb-6" opacity={0.15}>
                <Eye className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  Visibility Tracking
                </span>
              </GlassMorphism>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Track your{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  AI visibility
                </span>
                {' '}over time
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Monitor how often your brand appears in AI recommendations. 
                Get insights into trends and optimize your content strategy.
              </p>
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                View Dashboard
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* AI Sources Section */}
        <motion.div 
          ref={sourcesRef}
          className="grid lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 40 }}
          animate={sourcesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={sourcesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <GlassMorphism className="inline-flex items-center px-4 py-2 mb-6" opacity={0.15}>
                <Bot className="w-4 h-4 mr-2 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">
                  Source Analysis
                </span>
              </GlassMorphism>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Discover{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  influential sources
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Identify which websites have the most influence over AI recommendations 
                in your industry. Build relationships with key players.
              </p>
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-4 h-4 mr-2" />
                Explore Sources
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Sources List */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={sourcesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassMorphism className="p-8" opacity={0.2}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Top Influencing Sources</h3>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="w-5 h-5 text-purple-600" />
                </motion.div>
              </div>
              <div className="space-y-4">
                {aiSources.map((source, index) => (
                  <motion.div 
                    key={index} 
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sourcesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center justify-between p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 group-hover:border-gray-200 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg ${source.color} flex items-center justify-center text-white`}>
                          {source.icon}
                        </div>
                        <span className="font-medium text-gray-900">{source.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <motion.span 
                          className="text-sm font-semibold text-gray-900"
                          initial={{ scale: 0 }}
                          animate={sourcesInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                        >
                          {source.percentage}%
                        </motion.span>
                        <motion.div
                          className="w-2 h-2 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassMorphism>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={sourcesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GlassMorphism className="p-12 relative overflow-hidden" opacity={0.2}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"
              animate={{ 
                background: [
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className="relative z-10">
              <motion.div
                className="flex justify-center mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to improve your AI visibility?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of brands already monitoring and optimizing their presence 
                across AI platforms.
              </p>
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center mx-auto group shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-5 h-5 mr-2" />
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

export default SEOLLMStats; 