"use client"
import React, { useState } from "react";
import {
  MessageCircle,
  Mic,
  TrendingUp,
  Clock,
  Bell,
  Users,
  Bot,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "../../hooks/useScrollAnimation";

const FeaturesSection = () => {
  const features = [
    {
      id: 0,
      title: "AI-Powered Humanize Chatbot",
      description:
        "Advanced conversational AI that understands context and provides human-like interactions for your customers.",
      icon: Bot,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isLarge: true,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 1,
      title: "AI Powered Voice Chat Support System",
      description:
        "Future of interactive support with voice replay capabilities.",
      icon: Mic,
      mockup: "voice-chat",
      gradient: "from-green-500 to-blue-500",
    },
    {
      id: 2,
      title: "AI Power Selling",
      description:
        "Boost your sales with intelligent, data-driven product recommendations.",
      icon: TrendingUp,
      mockup: "growth-chart",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "24/7 Customer Support",
      description:
        "Our chatbot handles inquiries at any time of day or night, ensuring that customers receive assistance.",
      icon: Clock,
      mockup: "chat-support",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "Auto Reminder Chat Request",
      description:
        "Intelligent reminder system that engages customers at the right moment.",
      icon: Bell,
      mockup: "reminder-system",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const VoiceChatMockup = () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2 bg-green-500/10 backdrop-blur-sm rounded-lg p-3">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <Users className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="text-xs text-green-400 mb-1">
            I need a best quality backpack
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-1 bg-green-400 rounded-full animate-pulse`}
                  style={{
                    height: `${Math.random() * 16 + 8}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-green-300">00:15</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 bg-orange-500/10 backdrop-blur-sm rounded-lg p-3">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="text-xs text-orange-400 mb-1">
            Can you check about your brand and your
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-1 bg-orange-400 rounded-full animate-pulse`}
                  style={{
                    height: `${Math.random() * 16 + 8}px`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-orange-300">00:08</span>
          </div>
        </div>
      </div>
    </div>
  );

  const GrowthChartMockup = () => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          <span className="text-purple-400 text-sm font-medium">
            60% GROWTH
          </span>
        </div>
      </div>
      <div className="bg-purple-500/20 rounded-lg p-3">
        <div className="text-orange-400 text-xs mb-2">Hi, This is Nova!</div>
        <div className="text-white text-xs mb-2">
          Do you have Wooden Style Chair?
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-orange-400 text-xs">
            Sure thing! Here are a few wooden style chairs available now:
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/10 rounded p-2">
            <div className="w-full h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded mb-1"></div>
            <div className="text-xs text-gray-300">Chair #1</div>
          </div>
          <div className="bg-white/10 rounded p-2">
            <div className="w-full h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded mb-1"></div>
            <div className="text-xs text-gray-300">Chair #2</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ChatSupportMockup = () => (
    <div className="space-y-2">
      <div className="flex justify-end">
        <div className="bg-green-500 rounded-lg px-3 py-2 max-w-xs">
          <div className="text-white text-xs">Hello, I need help</div>
          <div className="text-green-100 text-xs mt-1 flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-100/20 mr-1"></div>
            You
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-orange-500 rounded-lg px-3 py-2 max-w-xs">
          <div className="text-white text-xs">
            I'm here to help! What can I do for you?
          </div>
          <div className="text-orange-100 text-xs mt-1">02:15 AM</div>
        </div>
      </div>
    </div>
  );

  const ReminderSystemMockup = () => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-3">
        <Bell className="w-5 h-5 text-yellow-400 animate-bounce" />
        <span className="text-yellow-400 text-sm font-medium">
          Auto Reminder
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-xs">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <span className="text-gray-300">Cart abandoned - 2 hours ago</span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-300">Follow-up sent</span>
        </div>
        <div className="flex items-center space-x-2 text-xs">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-gray-300">Discount offered</span>
        </div>
      </div>
      <div className="mt-3 p-2 bg-orange-500/10 rounded border border-orange-500/20">
        <div className="text-orange-400 text-xs">
          💬 "Complete your purchase and get 10% off!"
        </div>
      </div>
    </div>
  );

  const renderMockup = (type) => {
    switch (type) {
      case "voice-chat":
        return <VoiceChatMockup />;
      case "growth-chart":
        return <GrowthChartMockup />;
      case "chat-support":
        return <ChatSupportMockup />;
      case "reminder-system":
        return <ReminderSystemMockup />;
      default:
        return null;
    }
  };

  return (
    <AnimatedSection animation="fadeInUp" className="bg-gray-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" delay="delay-200" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-orange-200 tracking-wider uppercase">OUR FEATURES</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Powerful Features to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-300">
              Transform Business
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto opacity-90">
            Discover cutting-edge features designed to revolutionize your e-commerce operations
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Card */}
          <AnimatedSection animation="scaleIn" delay="delay-300" className="lg:col-span-1 lg:row-span-2">
            <div className="group h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2">
              {/* Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={features[0].image}
                  alt="AI Chatbot"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${features[0].gradient} flex items-center justify-center animate-pulse`}
                  >
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {features[0].title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {features[0].description}
              </p>
            </div>
          </AnimatedSection>

          {/* Regular Feature Cards */}
          {features.slice(1).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection 
                key={feature.id}
                animation="fadeInUp"
                delay={`delay-${(index + 1) * 200}`}
              >
                <div className="group h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Mockup */}
                  {feature.mockup && (
                    <div className="mt-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {renderMockup(feature.mockup)}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturesSection;
