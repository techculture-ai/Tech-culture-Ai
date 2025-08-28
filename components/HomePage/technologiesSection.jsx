"use client";
import React, { useState } from "react";
import { AnimatedSection } from "../../hooks/useScrollAnimation";

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  const technologies = {
    programming: {
      title: "Programming & Development",
      icon: "💻",
      items: [
        { name: "Python", icon: "🐍", color: "bg-blue-500" },
        { name: "PHP", icon: "🔷", color: "bg-purple-500" },
        { name: "CodeIgniter", icon: "🔥", color: "bg-red-500" },
        { name: "Laravel", icon: "⚡", color: "bg-red-600" },
        { name: "Node.js", icon: "🟢", color: "bg-green-500" },
        { name: "React.js", icon: "⚛️", color: "bg-blue-400" },
        { name: "Next.js", icon: "▲", color: "bg-gray-800" },
        { name: "Angular", icon: "🅰️", color: "bg-red-500" },
        { name: "Vue.js", icon: "✅", color: "bg-green-400" },
        { name: "HTML5", icon: "🌐", color: "bg-orange-500" },
        { name: "CSS3", icon: "🎨", color: "bg-blue-500" },
        { name: "JavaScript", icon: "📄", color: "bg-yellow-500" }
      ]
    },
    web: {
      title: "Web & CMS Platforms",
      icon: "🌍",
      items: [
        { name: "WordPress", icon: "📝", color: "bg-blue-600" },
        { name: "Shopify", icon: "🛍️", color: "bg-green-600" },
        { name: "Magento", icon: "🏪", color: "bg-orange-600" }
      ]
    },
    mobile: {
      title: "Mobile App Development",
      icon: "📱",
      items: [
        { name: "React Native", icon: "📲", color: "bg-blue-500" },
        { name: "Flutter", icon: "🦋", color: "bg-blue-400" },
        { name: "Progressive Web Apps", icon: "📱", color: "bg-purple-500" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "☁️",
      items: [
        { name: "AWS", icon: "☁️", color: "bg-orange-500" },
        { name: "Google Cloud", icon: "🌐", color: "bg-blue-500" },
        { name: "Docker", icon: "🐳", color: "bg-blue-400" }
      ]
    },
    enterprise: {
      title: "Enterprise Solutions & CRM",
      icon: "🏢",
      items: [
        { name: "Microsoft Dynamics", icon: "🔷", color: "bg-blue-600" },
        { name: "SAP", icon: "💼", color: "bg-blue-700" },
        { name: "Salesforce", icon: "⛅", color: "bg-blue-500" }
      ]
    },
    analytics: {
      title: "Data Analytics & BI",
      icon: "📊",
      items: [
        { name: "Power BI", icon: "📈", color: "bg-yellow-500" }
      ]
    },
    security: {
      title: "Cybersecurity",
      icon: "🔒",
      items: [
        { name: "Firewalls", icon: "🛡️", color: "bg-red-500" },
        { name: "SSL/TLS", icon: "🔐", color: "bg-green-500" }
      ]
    },
    marketing: {
      title: "Digital Marketing & Analytics",
      icon: "📈",
      items: [
        { name: "Google Analytics", icon: "📊", color: "bg-orange-500" },
        { name: "SEMrush", icon: "🔍", color: "bg-orange-600" },
        { name: "Ahrefs", icon: "📈", color: "bg-blue-600" },
        { name: "Mailchimp", icon: "📧", color: "bg-yellow-500" }
      ]
    },
    ads: {
      title: "Paid Promotions & Ads",
      icon: "📢",
      items: [
        { name: "Google Ads", icon: "🎯", color: "bg-blue-500" },
        { name: "Facebook Ads", icon: "📘", color: "bg-blue-600" },
        { name: "LinkedIn Ads", icon: "💼", color: "bg-blue-700" },
        { name: "Instagram Ads", icon: "📸", color: "bg-pink-500" },
        { name: "YouTube Ads", icon: "📺", color: "bg-red-500" },
        { name: "Programmatic Ads", icon: "🤖", color: "bg-purple-500" }
      ]
    }
  };

  const categories = Object.keys(technologies);

  return (
    <section className="relative bg-slate-900 text-white py-20 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(249,115,22,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-orange-200 tracking-wider uppercase">Technologies</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-300">
              Technologies
            </span>
            <br />
            We Use
          </h2>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto opacity-90">
            We leverage cutting-edge technologies and industry-leading tools to deliver exceptional solutions
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection animation="fadeInUp" delay="delay-200" className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700"
                }`}
              >
                <span className="mr-2">{technologies[category].icon}</span>
                {technologies[category].title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Technologies Grid */}
        <AnimatedSection animation="fadeInUp" delay="delay-300">
          <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">{technologies[activeCategory].icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {technologies[activeCategory].title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {technologies[activeCategory].items.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-600/30 hover:border-orange-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <div className={`w-8 h-1 ${tech.color} rounded-full mx-auto mb-3 opacity-80`}></div>
                    <h4 className="font-semibold text-white text-sm leading-tight">
                      {tech.name}
                    </h4>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
              ))}
            </div>

            {/* Technology Count */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-400/20">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-orange-200 text-sm">
                  {technologies[activeCategory].items.length} Technologies in {technologies[activeCategory].title}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection animation="fadeInUp" delay="delay-500" className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to leverage these technologies for your project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert team combines these cutting-edge tools to create innovative solutions tailored to your business needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25">
              Start Your Project
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechnologiesSection;
