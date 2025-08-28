"use client";
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const serviceLinks = [
    { name: "AI & Data Analytics", href: "#ai-analytics" },
    { name: "Cloud Solutions", href: "#cloud" },
    { name: "Cognitive Operations", href: "#cognitive" },
    { name: "Consulting", href: "#consulting" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-300" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(249,115,22,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(249,115,22,0.2) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Stay ahead with AI insights
                </h3>
                <p className="text-gray-400 text-lg">
                  Get the latest updates on AI technology, industry trends, and product releases.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:min-w-[400px]">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 whitespace-nowrap">
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  AI Scheduler
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2"></div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Revolutionizing productivity with intelligent scheduling solutions. 
                Our AI-driven platform helps businesses optimize their time and resources.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <Mail size={18} className="text-orange-500" />
                  <span>contact@aischeduler.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <Phone size={18} className="text-orange-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                  <MapPin size={18} className="text-orange-500" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Navigation</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © {currentYear} AI Scheduler. All rights reserved. Powered by artificial intelligence.
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                        aria-label={social.name}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Badge */}
        <div className="absolute top-8 right-8 hidden lg:block">
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 backdrop-blur-sm border border-orange-400/20 rounded-full px-4 py-2">
            <span className="text-orange-300 text-sm font-medium">🤖 AI Powered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
