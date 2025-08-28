"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const TCSCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTextAnimating, setIsTextAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "ICICI Lombard reimagines infrastructure resilience",
      subtitle: "Transforming Digital Experience",
      description: "Leveraging cloud-native solutions to build scalable and resilient infrastructure for next-generation banking services.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      category: "Financial Services"
    },
    {
      id: 2,
      title: "Revolutionizing retail with AI-powered insights",
      subtitle: "Smart Retail Solutions",
      description: "Implementing intelligent analytics and automation to enhance customer experience and operational efficiency.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      category: "Retail & Consumer"
    },
    {
      id: 3,
      title: "Next-generation healthcare transformation",
      subtitle: "Digital Health Innovation",
      description: "Building connected healthcare ecosystems that improve patient outcomes and streamline medical operations.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Sustainable manufacturing with IoT integration",
      subtitle: "Industry 4.0 Solutions", 
      description: "Connecting machines, processes, and people to create intelligent manufacturing environments.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      category: "Manufacturing"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isPlaying]);

  const handleNext = () => {
    setIsTextAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTextAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTextAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTextAnimating(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsTextAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTextAnimating(false);
      }, 300);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-7xl">
            {/* Category Tag */}
            <div className={`overflow-hidden ${
              isTextAnimating ? 'opacity-0' : 'opacity-100'
            }`}>
              <span className={`inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/20 transform transition-all duration-500 ease-out ${
                isTextAnimating ? 'translate-x-full' : 'translate-x-0'
              }`}>
                {currentSlideData.category}
              </span>
            </div>

            {/* Main Title with staggered animation */}
            <div className="overflow-hidden mb-6">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight transform transition-all duration-800 ease-out ${
                isTextAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                {currentSlideData.title}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mb-6">
              <h2 className={`text-xl md:text-2xl text-blue-300 font-medium transform transition-all duration-600 delay-100 ease-out ${
                isTextAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                {currentSlideData.subtitle}
              </h2>
            </div>

            {/* Description */}
            <div className="overflow-hidden mb-8">
              <p className={`text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl transform transition-all duration-700 delay-200 ease-out ${
                isTextAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                {currentSlideData.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="overflow-hidden">
              <div className={`flex flex-wrap gap-4 transform transition-all duration-600 delay-300 ease-out ${
                isTextAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                <button className="group px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Learn More
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-6 right-6 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-12 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Control Buttons */}
          <div className="flex items-center space-x-4">
            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
            >
              <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
            >
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-white text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')}
          </div>
          <div className="w-px h-16 bg-white/30">
            <div 
              className="w-px bg-white transition-all duration-1000 ease-out"
              style={{ height: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <div className="text-white/60 text-sm">
            {String(slides.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="sr-only">
        <button
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === ' ') setIsPlaying(!isPlaying);
          }}
          aria-label="Carousel navigation"
        />
      </div>
    </div>
  );
};

export default TCSCarousel;
