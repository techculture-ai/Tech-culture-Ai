"use client";
import React from "react";
import { AnimatedSection } from "../../hooks/useScrollAnimation";

const ClientsSection = () => {
  const clients = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      category: "Technology"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      category: "Technology"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      category: "E-commerce"
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      category: "Entertainment"
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      category: "Music Streaming"
    },
    {
      name: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      category: "Travel"
    },
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      category: "Communication"
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      category: "CRM"
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      category: "Automotive"
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg",
      category: "Creative Software"
    },
    {
      name: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      category: "E-commerce Platform"
    },
    {
      name: "Zoom",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
      category: "Video Conferencing"
    }
  ];

  return (
    <section className="relative bg-white py-20 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(249,115,22,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(59,130,246,0.2) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-400/20 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-orange-600 tracking-wider uppercase">Our Clients</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Trusted by
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We're proud to partner with innovative companies across various industries, 
            delivering cutting-edge AI solutions that drive real business results.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fadeInUp" delay="delay-200" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">99%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </AnimatedSection>

        {/* Clients Grid */}
        <AnimatedSection animation="fadeInUp" delay="delay-300">
          <div className="bg-slate-50/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-orange-300/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="h-16 flex items-center justify-center mb-4">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">
                      {client.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {client.category}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Client testimonial highlight */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
                <div className="text-4xl">🎯</div>
                <div className="text-left">
                  <p className="text-gray-800 font-medium mb-1">
                    "Outstanding AI solutions that transformed our business operations"
                  </p>
                  <p className="text-gray-500 text-sm">
                    - Fortune 500 Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Moving Logo Strip */}
        <AnimatedSection animation="fadeInUp" delay="delay-500" className="mt-16 overflow-hidden">
          <div className="relative h-24">
            <div className="absolute inset-0 flex items-center">
              <div
                className="flex gap-12 items-center whitespace-nowrap animate-scroll"
                style={{
                  animation: "scrollLogos 30s linear infinite"
                }}
              >
                {/* Duplicate clients for seamless scroll */}
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`scroll-${index}`}
                    className="flex items-center justify-center h-16 min-w-[120px] opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-10 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection animation="fadeInUp" delay="delay-700" className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-gray-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to join our growing list of satisfied clients?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business operations and drive growth.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25">
              Start Your Project
            </button>
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        @keyframes scrollLogos {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
