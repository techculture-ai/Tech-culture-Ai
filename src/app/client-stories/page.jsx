"use client";
import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import { MdOutlineShowChart } from "react-icons/md";
import Button from "@mui/material/Button";
import AIPageHeader from "../../components/AIPageHeader";
import { Brands } from "@/components/Brands";

const ClientStories = () => {
  const [selectedStory, setSelectedStory] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stories = [
    {
      id: 1,
      company: "TechStart Solutions",
      industry: "E-commerce",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      clientName: "Sarah Johnson",
      position: "CEO",
      message: "TechCulture AI transformed our customer service operations. We saw a 75% reduction in response time and 40% increase in customer satisfaction within just 3 months.",
      metrics: [
        { label: "Response Time Reduction", value: "75%" },
        { label: "Customer Satisfaction", value: "+40%" },
        { label: "Cost Savings", value: "$50K/year" }
      ],
      tags: ["AI Chatbot", "Customer Service", "Automation"]
    },
    {
      id: 2,
      company: "Global Retail Corp",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      clientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      clientName: "Michael Chen",
      position: "CTO",
      message: "The predictive analytics solution helped us optimize inventory management and reduce waste by 60%. Our profit margins improved significantly.",
      metrics: [
        { label: "Waste Reduction", value: "60%" },
        { label: "Inventory Accuracy", value: "95%" },
        { label: "Profit Increase", value: "+25%" }
      ],
      tags: ["Predictive Analytics", "Inventory Management", "ML"]
    },
    {
      id: 3,
      company: "FinanceFlow Inc",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      clientImage: "https://images.unsplash.com/photo-1494790108755-2616c96da1de?w=100&h=100&fit=crop",
      clientName: "Emily Rodriguez",
      position: "Operations Director",
      message: "Their AI-powered fraud detection system has been game-changing for us. We've prevented over $2M in potential losses while maintaining seamless user experience.",
      metrics: [
        { label: "Fraud Prevention", value: "$2M+" },
        { label: "Detection Accuracy", value: "99.2%" },
        { label: "Processing Speed", value: "3x faster" }
      ],
      tags: ["Fraud Detection", "Security", "Real-time Processing"]
    },
    {
      id: 4,
      company: "HealthTech Innovations",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      clientImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop",
      clientName: "Dr. James Wilson",
      position: "Medical Director",
      message: "The AI diagnostic assistant has revolutionized our patient care workflow. We've achieved 85% faster diagnosis times while maintaining 99% accuracy.",
      metrics: [
        { label: "Diagnosis Speed", value: "85% faster" },
        { label: "Accuracy Rate", value: "99%" },
        { label: "Patient Satisfaction", value: "+60%" }
      ],
      tags: ["Medical AI", "Diagnostics", "Healthcare"]
    }
  ];

  const successMetrics = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "200+", label: "Successful Projects" },
    { number: "50+", label: "Industry Partners" },
    { number: "24/7", label: "Support Availability" }
  ];

  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader
        title="Client Success Stories"
        subtitle="Real Results from AI-Powered Transformations"
        description="Discover how our intelligent solutions have helped businesses across industries achieve remarkable growth and efficiency."
        aiWords={["AI-Powered", "intelligent", "efficiency"]}
      />

      {/* Success Metrics */}
      {/* <section className="py-20 bg-[#000319]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="text-[40px] font-bold text-primary txt-shadow">
                  {metric.number}
                </h3>
                <p className="text-white/80 text-[16px] font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Brands />

      {/* Client Stories */}
      <section className="py-20 imageBg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center">
              <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                Success Stories
              </span>
            </div>
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              Transforming{" "}
              <span className="text-gred">Businesses Worldwide</span>
            </h2>
            <p className="text-gray-300 text-[20px] text-center">
              See how our AI solutions have driven real results for our clients
            </p>
          </div>

          {/* Stories Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Story Grid */}
            <div className="lg:col-span-1 space-y-6">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  onClick={() => setSelectedStory(index)}
                  className={`group relative cursor-pointer rounded-xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 backdrop-blur-md transform ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  } ${
                    selectedStory === index
                      ? "border-primary/70 bg-[rgba(0,3,25,0.8)]"
                      : "border-[rgba(255,255,255,0.1)] hover:border-primary/50 bg-[rgba(255,255,255,0.05)]"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={story.clientImage}
                        alt={story.clientName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-white font-bold text-[16px]">
                          {story.clientName}
                        </h4>
                        <p className="text-white/70 text-[12px]">
                          &quot;{story.position} at {story.company}
                        </p>
                      </div>
                    </div>

                    {/* Message with Glow Effect */}
                    <div className="relative group/message">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-lg opacity-0 group-hover/message:opacity-100 transition-opacity duration-300"></div>
                      <p className="text-white/80 text-[14px] leading-6 relative z-10 p-3 rounded-lg group-hover/message:text-white transition-colors duration-300">
                        &quot;{story.message.substring(0, 120)}...&quot;
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-primary text-[12px] font-medium">
                        {story.industry}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <IoStar
                            key={i}
                            size={12}
                            className="text-orange-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-primary/0 group-hover:border-primary/60 rounded-tr-xl transition-all duration-300"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-primary/0 group-hover:border-primary/60 rounded-bl-xl transition-all duration-300"></div>
                </div>
              ))}
            </div>

            {/* Right Side - Featured Story */}
            <div className="lg:col-span-2">
              <div
                className={`relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[rgba(0,3,25,0.6)] backdrop-blur-md transform transition-all duration-700 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {/* Background Image */}
                <div className="relative h-[500px]">
                  <img
                    src={stories[selectedStory].image}
                    alt={stories[selectedStory].company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={stories[selectedStory].clientImage}
                        alt={stories[selectedStory].clientName}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <h3 className="text-white font-bold text-[24px]">
                          {stories[selectedStory].clientName}
                        </h3>
                        <p className="text-white/80 text-[16px]">
                          {stories[selectedStory].position}
                        </p>
                        <p className="text-primary text-[14px] font-medium">
                          {stories[selectedStory].company} •{" "}
                          {stories[selectedStory].industry}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Section */}
                <div className="p-8">
                  <div className="relative group/featured-message">
                    <FaQuoteLeft
                      size={40}
                      className="text-primary/20 absolute -top-4 -left-2"
                    />
                    {/* Message with Glow Effect */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-lg opacity-0 group-hover/featured-message:opacity-100 transition-opacity duration-300"></div>
                      <p className="text-white/90 text-[18px] leading-8 pl-8 relative z-10 p-4 rounded-lg group-hover/featured-message:text-white transition-colors duration-300">
                        {stories[selectedStory].message}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mb-6">
                    {stories[selectedStory].metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="text-center p-4 bg-[rgba(4,4,22,0.8)] backdrop-blur-sm rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="text-[24px] font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-white/70 text-[14px]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {stories[selectedStory].tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary text-[14px] px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/20 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-[url('/bg-banner.png')] bg-cover bg-center">
        <div className="container">
          <div className="text-center">
            <h2 className="text-white txt-shadow text-[40px] font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-white/80 text-[20px] mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and experience the transformative power of AI.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              <Button
                className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-8 !py-4 !capitalize !font-bold !text-[18px]"
                size="large"
              >
                Start Your Journey
                <BsArrowRight size={20} className="ml-2" />
              </Button>
              
              <Button
                className="!bg-transparent !text-white !border-2 !border-white/30 !rounded-md !px-8 !py-4 !capitalize !font-bold !text-[18px] hover:!bg-white/10"
                size="large"
              >
                View More Stories
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ClientStories;