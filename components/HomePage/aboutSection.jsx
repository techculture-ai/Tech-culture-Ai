"use client";
import React from "react";
import { Play, MessageCircle, Users, Zap } from "lucide-react";
import { AnimatedSection } from "../../hooks/useScrollAnimation";

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Brand Logo */}
            <AnimatedSection animation="fadeInLeft" delay="delay-100">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  Nova<span className="text-orange-500">Chat</span>
                </span>
              </div>
            </AnimatedSection>

            {/* Main Heading */}
            <AnimatedSection animation="fadeInLeft" delay="delay-200">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smarter E-commerce,{" "}
                <span className="text-orange-500">Powered by AI</span>{" "}
                <span className="inline-block">Chatbot</span>
              </h1>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection animation="fadeInLeft" delay="delay-300">
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Our AI-powered chatbot is designed specifically for e-commerce
                owners, helping you manage inventory, boost sales, and provide
                exceptional customer support 24/7.
              </p>
            </AnimatedSection>

            {/* Features List */}
            <AnimatedSection animation="fadeInUp" delay="delay-400">
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">
                    Instant Responses
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">
                    Smart Automation
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Button */}
            <AnimatedSection animation="scaleIn" delay="delay-500">
              <button className="group inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Request a Demo
              </button>
            </AnimatedSection>
          </div>

          {/* Right Image Collection */}
          <AnimatedSection animation="fadeInRight" delay="delay-300">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              {/* Main Background Image */}
              <AnimatedSection animation="scaleIn" delay="delay-500">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Professional working on laptop"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </AnimatedSection>

              {/* Chat Interface Overlay - Top Left */}
              <AnimatedSection 
                animation="slideInFromBottom" 
                delay="delay-700"
                className="absolute -top-4 -left-4 md:-top-8 md:-left-8"
              >
                <div className="bg-white rounded-xl shadow-xl p-4 max-w-xs transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">
                      AI Assistant
                    </span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-100 rounded-lg p-2 text-sm">
                      Hi! How can I help you today?
                    </div>
                    <div className="bg-orange-100 rounded-lg p-2 text-sm ml-4">
                      Show me our best sellers
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Customer Service Badge - Top Right */}
              <AnimatedSection 
                animation="fadeInDown" 
                delay="delay-900"
                className="absolute -top-2 -right-2 md:-top-6 md:-right-6"
              >
                <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-semibold whitespace-nowrap">
                    24/7 Customer Services
                  </span>
                </div>
              </AnimatedSection>

              {/* Analytics Chart - Bottom Right */}
              <AnimatedSection 
                animation="slideInFromBottom" 
                delay="delay-1000"
                className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8"
              >
                <div className="bg-white rounded-xl shadow-xl p-4 transform hover:rotate-3 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      Sales Analytics
                    </span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  </div>
                  <div className="flex items-end space-x-1 h-12">
                    <div
                      className="w-2 bg-blue-300 rounded-sm"
                      style={{ height: "60%" }}
                    />
                    <div
                      className="w-2 bg-blue-400 rounded-sm"
                      style={{ height: "80%" }}
                    />
                    <div
                      className="w-2 bg-blue-500 rounded-sm"
                      style={{ height: "100%" }}
                    />
                    <div
                      className="w-2 bg-blue-400 rounded-sm"
                      style={{ height: "70%" }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    ↗ +25% this week
                  </div>
                </div>
              </AnimatedSection>

              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-12 hidden md:block">
                <div className="w-4 h-4 bg-orange-400 rounded-full" />
              </div>
              <div className="absolute bottom-1/4 -right-8 hidden md:block">
                <div className="w-6 h-6 bg-blue-400 rounded-full" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
