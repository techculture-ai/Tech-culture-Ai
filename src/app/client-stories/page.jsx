"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaChartLine, FaQuoteLeft, FaRocket, FaTrophy, FaUsers } from "react-icons/fa";
import { BsArrowRight, BsAward, BsEye } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { HiSparkles, HiFire } from "react-icons/hi";
import Button from "@mui/material/Button";
import AIPageHeader from "../../components/AIPageHeader";
import { Brands } from "@/components/Brands";
import { FiHeart } from "react-icons/fi";
import { testimonialService } from "../../services/testimonialService";

const ClientStories = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await testimonialService.getAllTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Fallback to sample data if API fails
        setTestimonials(sampleTestimonials);
      } finally {
        setLoading(false);
        setTimeout(() => setIsLoaded(true), 200);
      }
    };

    fetchTestimonials();
  }, []);

  // Sample testimonials data as fallback
  const sampleTestimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO at TechStart Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616c96da1de?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      message: "TechCulture AI transformed our customer service operations. We saw a 75% reduction in response time and 40% increase in customer satisfaction within just 3 months."
    },
    {
      name: "Michael Chen",
      title: "CTO at Global Retail Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      message: "The predictive analytics solution helped us optimize inventory management and reduce waste by 60%. Our profit margins improved significantly."
    },
    {
      name: "Emily Rodriguez",
      title: "Operations Director at FinanceFlow Inc",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      message: "Their AI-powered fraud detection system has been game-changing for us. We've prevented over $2M in potential losses while maintaining seamless user experience."
    },
    {
      name: "Dr. James Wilson",
      title: "Medical Director at HealthTech Innovations",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      message: "The AI diagnostic assistant has revolutionized our patient care workflow. We've achieved 85% faster diagnosis times while maintaining 99% accuracy."
    },
    {
      name: "Alex Thompson",
      title: "Founder at DataDrive Analytics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      message: "Working with TechCulture AI was transformative. Their machine learning models increased our data processing efficiency by 300%. The results speak for themselves."
    },
    {
      name: "Lisa Chang",
      title: "Product Manager at InnovateNow",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      backgroundImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      message: "The AI recommendation engine increased our conversion rates by 180% and user engagement by 250%. The personalization capabilities are phenomenal."
    }
  ];

  if (loading) {
    return (
      <>
        <AIPageHeader
          title="Client Success Stories"
          subtitle="Real Results from AI-Powered Transformations"
          description="Discover how our intelligent solutions have helped businesses across industries achieve remarkable growth and efficiency."
          aiWords={["AI-Powered", "intelligent", "efficiency"]}
        />
        <Brands />
        <section className="py-20 imageBg">
          <div className="container">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-white text-lg">Loading success stories...</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <AIPageHeader
        title="Client Success Stories"
        subtitle="Real Results from AI-Powered Transformations"
        description="Discover how our intelligent solutions have helped businesses across industries achieve remarkable growth and efficiency."
        aiWords={["AI-Powered", "intelligent", "efficiency"]}
      />

      <Brands />

      {/* Revolutionary Success Stories Section */}
      <section className="py-20 imageBg relative overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-orange-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-full animate-spin-slow"></div>
        </div>

        <div className="container relative z-10">
          {/* Impact-First Hero */}
          {/* <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-4 bg-gradient-to-r from-primary/20 via-orange-400/20 to-primary/20 backdrop-blur-xl p-4 px-8 border border-primary/30 rounded-full shadow-2xl shadow-primary/25">
                <FaTrophy className="text-orange-400 text-xl animate-bounce" />
                <span className="text-[18px] text-primary font-bold">
                  Proven Success Stories
                </span>
                <HiFire className="text-red-400 text-xl animate-pulse" />
              </div>
            </div>

            <h1 className="text-[64px] lg:text-[80px] font-black text-white leading-[0.9] mb-8">
              Real{" "}
              <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                Results
              </span>
              <br />
              Real{" "}
              <span className="bg-gradient-to-r from-orange-400 via-primary to-orange-400 bg-clip-text text-transparent">
                Impact
              </span>
            </h1>

            <p className="text-gray-300 text-[22px] max-w-4xl mx-auto leading-relaxed mb-12">
              Discover how businesses transformed their operations with our AI
              solutions and achieved
              <span className="text-primary font-bold">
                {" "}
                measurable, game-changing results
              </span>
            </p>
          </div> */}

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
                <div
                  key={testimonial._id || index}
                  className={`group relative bg-gradient-to-br from-[#0a0f1c]/90 via-[#0f1419]/90 to-[#0a0f1c]/90 backdrop-blur-xl rounded-3xl border border-[rgba(255,255,255,0.1)] overflow-hidden hover:border-primary/60  cursor-pointer transform hover:scale-105 hover:-rotate-1 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  } transition-all duration-200 ease-in-out`}
                  style={{
                    transitionDelay: `${150}ms`,
                    boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.4)",
                    minHeight: "480px",
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedTestimonial(testimonial)}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={testimonial.backgroundImage}
                      alt="Background"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      style={{ filter: "brightness(0.3) contrast(1.2)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-orange-400/20 opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    {/* Quote */}
                    <div className="mb-6">
                      <FaQuoteLeft className="text-primary text-3xl mb-4 opacity-80" />
                      <p className="text-white text-[16px] leading-relaxed mb-4">
                        &quot;{testimonial.message}&quot;
                      </p>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-primary/60 shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
                          <MdVerified size={12} className="text-white" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-white text-[18px] font-bold mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary text-[14px] font-medium">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 flex items-center gap-3 text-white font-semibold">
                        <BsEye />
                        <span>Read Full Story</span>
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="text-white/60 text-lg">
                  No testimonials available at the moment.
                </div>
              </div>
            )}
          </div>

          {/* Success Metrics */}
          {/* <div className="text-center">
            <h3 className="text-[40px] font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                Impact
              </span>{" "}
              by Numbers
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-gradient-to-br from-[#0a0f1c]/80 to-[#0f1419]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-xl" />
                </div>
                <div className="text-white text-[32px] font-bold mb-2">
                  500+
                </div>
                <div className="text-white/70 text-sm">Happy Clients</div>
              </div>

              <div className="bg-gradient-to-br from-[#0a0f1c]/80 to-[#0f1419]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsAward className="text-white text-xl" />
                </div>
                <div className="text-white text-[32px] font-bold mb-2">
                  99.8%
                </div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>

              <div className="bg-gradient-to-br from-[#0a0f1c]/80 to-[#0f1419]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-white text-xl" />
                </div>
                <div className="text-white text-[32px] font-bold mb-2">
                  $50M+
                </div>
                <div className="text-white/70 text-sm">Value Created</div>
              </div>

              <div className="bg-gradient-to-br from-[#0a0f1c]/80 to-[#0f1419]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiHeart className="text-white text-xl" />
                </div>
                <div className="text-white text-[32px] font-bold mb-2">
                  24/7
                </div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                variant="contained"
                className="bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/50"
                startIcon={<FaRocket />}
                endIcon={<BsArrowRight />}
              >
                Start Your Success Story
              </Button>
            </div>
          </div> */}
        </div>

        {/* Modal */}
        {selectedTestimonial && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-gradient-to-br from-[#0a0f1c] via-[#0f1419] to-[#0a0f1c] rounded-3xl border border-white/10 overflow-hidden animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <IoClose size={24} className="text-white" />
              </button>

              <div className="relative h-80">
                <img
                  src={selectedTestimonial.backgroundImage}
                  alt="Background"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.4)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <div>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary via-orange-400 to-primary rounded-full flex items-center justify-center mx-auto mb-8">
                      <FaQuoteLeft size={32} className="text-white" />
                    </div>
                    <p className="text-white text-[24px] font-light leading-relaxed max-w-3xl">
                      &quot;{selectedTestimonial.message}&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-6">
                  <img
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/50"
                  />

                  <div className="flex-1">
                    <h4 className="text-white text-[28px] font-bold mb-2">
                      {selectedTestimonial.name}
                    </h4>
                    <p className="text-primary text-[18px] font-medium mb-4">
                      {selectedTestimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes scale-in {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          .animate-scale-in {
            animation: scale-in 0.3s ease-out;
          }
        `}</style>
      </section>
    </>
  );
};

export default ClientStories;