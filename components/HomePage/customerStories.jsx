"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { AnimatedSection } from "../../hooks/useScrollAnimation";

const CustomerStoriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      id: 1,
      company: "Fanatics",
      title:
        "Enables a seamless fan experience across commerce, collectibles, and gaming.",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "E-commerce",
    },
    {
      id: 2,
      company: "Proximus",
      title: "Boosts efficiency with business process management",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Telecommunications",
    },
    {
      id: 3,
      company: "Trent",
      title: "Unlocks growth with ERP modernization",
      image:
        "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Retail",
    },
    {
      id: 4,
      company: "GlobalBank",
      title: "Transforms digital banking with cloud-first approach",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Banking",
    },
    {
      id: 5,
      company: "MediCore",
      title: "Revolutionizes patient care with AI-driven solutions",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Healthcare",
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, stories.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleStories = stories.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <AnimatedSection animation="fadeInUp" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection animation="fadeInUp" delay="delay-200" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-400/20 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-orange-600 tracking-wider uppercase">CUSTOMER STORIES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Real Stories from
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600">
              Happy Customers
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover how our solutions have transformed businesses across various industries
          </p>
        </AnimatedSection>

        {/* Navigation and Stories Container */}
        <div className="mb-8">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                currentIndex === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-800"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                currentIndex >= maxIndex
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-800"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleStories.map((story, index) => (
            <div
              key={story.id}
              className="group cursor-pointer"
              style={{
                animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card Container */}
              <div className="relative h-[60vh] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Static Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Hover Black Overlay - slides up from bottom */}
                <div className="absolute inset-0 bg-black/70 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Category Badge */}
                  <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      {story.category}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {story.company}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-white/90 mb-6 leading-relaxed transform transition-all duration-500 group-hover:-translate-y-2">
                    {story.title}
                  </p>

                  {/* Read More Button */}
                  <button className="group/btn inline-flex items-center text-white font-semibold hover:text-blue-300 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105">
                    <span className="flex items-center space-x-2">
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-lg">READ MORE</span>
                    </span>
                    <div className="ml-2 w-8 h-0.5 bg-white group-hover/btn:w-12 group-hover/btn:bg-blue-300 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-800 scale-125"
                  : "bg-gray-300 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for slide-in animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </AnimatedSection>
  );
};

export default CustomerStoriesCarousel;
