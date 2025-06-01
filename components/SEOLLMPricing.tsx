"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Zap, Shield, Crown, Rocket, ArrowRight, Sparkles } from 'lucide-react';
import GlassMorphism from './ui/GlassMorphism';

const SEOLLMPricing = () => {
  const headerRef = useRef(null);
  const plansRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const plansInView = useInView(plansRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });
  const ctaInView = useInView(ctaRef, { once: true });

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for getting started",
      popular: false,
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-gray-400 to-gray-500",
      features: [
        "1 project",
        "50 credits per month",
        "Weekly refresh",
        "Basic support",
        "All AI platforms"
      ],
      buttonText: "Get started",
      buttonClass: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300",
      delay: 0
    },
    {
      name: "Lite",
      price: "$99",
      period: "/month",
      description: "For small businesses",
      popular: false,
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "1 project",
        "1,500 credits per month",
        "Weekly refresh",
        "Email support",
        "All AI platforms"
      ],
      buttonText: "Get started",
      buttonClass: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300",
      delay: 0.1
    },
    {
      name: "Startup",
      price: "$199",
      period: "/month",
      description: "Most popular for growing teams",
      popular: true,
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "3 projects",
        "5,000 credits per month",
        "Daily refresh",
        "Priority support",
        "All AI platforms"
      ],
      buttonText: "Get started",
      buttonClass: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white",
      delay: 0.2
    },
    {
      name: "Business",
      price: "$499",
      period: "/month",
      description: "For larger organizations",
      popular: false,
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      features: [
        "5 projects",
        "15,000 credits per month",
        "Real-time refresh",
        "Dedicated support",
        "All AI platforms"
      ],
      buttonText: "Get started",
      buttonClass: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300",
      delay: 0.3
    }
  ];

  const faqs = [
    {
      question: "What are credits?",
      answer: "Credits are used for monitoring queries across AI platforms. Each query to check your brand visibility consumes one credit.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: "Which AI platforms are supported?",
      answer: "We monitor ChatGPT, Claude, Gemini, DeepSeek, Grok, and more. We're constantly adding new platforms.",
      icon: <Star className="w-5 h-5" />
    },
    {
      question: "Is there a free trial?",
      answer: "Our Free plan gives you full access to try the platform with 50 credits per month. No credit card required.",
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.3, 1, 1.3],
          rotate: [90, 0, 90]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
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
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <Crown className="w-5 h-5 text-purple-600" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700">Choose Your Plan</span>
            </GlassMorphism>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Simple,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              transparent pricing
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Choose the plan that fits your needs. All plans include access to monitoring across ChatGPT, Claude, Gemini, and more.
          </motion.p>
        </motion.div>

        {/* Pricing grid */}
        <motion.div 
          ref={plansRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={plansInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: plan.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={plansInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: plan.delay + 0.3 }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <GlassMorphism 
                className={`p-8 h-full relative overflow-hidden ${
                  plan.popular ? 'ring-2 ring-purple-200' : ''
                }`}
                opacity={plan.popular ? 0.3 : 0.15}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  {/* Plan header */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${plan.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {plan.icon}
                    </motion.div>
                    {plan.popular && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-purple-600"
                      >
                        <Crown className="w-6 h-6" />
                      </motion.div>
                    )}
                  </div>

                  {/* Plan details */}
                  <div className="mb-8">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={plansInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: plan.delay + 0.2 }}
                    >
                      {plan.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-6"
                      initial={{ opacity: 0 }}
                      animate={plansInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: plan.delay + 0.3 }}
                    >
                      {plan.description}
                    </motion.p>
                    <motion.div 
                      className="flex items-baseline mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={plansInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: plan.delay + 0.4 }}
                    >
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-lg text-gray-500 ml-1">{plan.period}</span>
                    </motion.div>
                  </div>

                  {/* CTA button */}
                  <motion.button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all duration-300 ${plan.buttonClass} ${
                      plan.popular ? 'shadow-lg hover:shadow-xl' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: plan.delay + 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center justify-center">
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </motion.button>

                  {/* Features list */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={plansInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: plan.delay + 0.6 + (featureIndex * 0.05) }}
                      >
                        <motion.div
                          className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        >
                          <Check className="w-5 h-5" />
                        </motion.div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </GlassMorphism>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ section */}
        <motion.div 
          ref={faqRef}
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
          >
            Frequently asked questions
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
              >
                <GlassMorphism className="p-6 h-full" opacity={0.15}>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="text-blue-600 mt-1"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {faq.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </GlassMorphism>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          ref={ctaRef}
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <GlassMorphism className="p-12 relative overflow-hidden" opacity={0.25}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"
              animate={{ 
                background: [
                  "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                  "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                  "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="relative z-10">
              <motion.div
                className="flex justify-center mb-6"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                Ready to get started?
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                Start monitoring your brand's AI visibility today. No setup fees, no long-term contracts.
              </motion.p>
              
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center mx-auto group shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="w-5 h-5 mr-2" />
                Start free trial
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </GlassMorphism>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOLLMPricing; 