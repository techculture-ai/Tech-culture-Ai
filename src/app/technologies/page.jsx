"use client";
import React, { useEffect, useState } from "react";
import { technologiesData } from "../data";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSite } from "@/context/siteContext";
import AIPageHeader from "../../components/AIPageHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineCode } from "react-icons/hi";
import { BiCheckCircle } from "react-icons/bi";
import { FiTrendingUp } from "react-icons/fi";
import { BsLightning } from "react-icons/bs";

const Technologies = () => {
  const { technologyData, setTechnologyData } = useSite();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
    
    const fetchTechnology = async () => {
      if (!technologyData) {
        try {
          const res = await axios.get(`${apiUrl}/api/technologies`);
          setTechnologyData(res.data.technologies);
          console.log("Technology data", res.data.technologies);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchTechnology();
  }, [technologyData, setTechnologyData]);

  const [isActive, setIsActive] = useState(0);
  const [isActiveTech, setIsActiveTech] = useState(technologiesData[0]);

  const techCategories = [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      description: "Robust, scalable server solutions",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation and analytics",
      icon: "🤖",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure",
      icon: "☁️",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader 
        title="Advanced Technologies We Master"
        subtitle="Cutting-Edge Tech Stack for AI-Powered Solutions"
        description="Discover the powerful technologies and frameworks we use to build next-generation AI applications that transform businesses."
        aiWords={["Advanced", "Cutting-Edge", "AI-Powered", "next-generation"]}
      />

      {/* Technology Categories Overview */}
      <section className="py-20 bg-[#000319]">
        <div className="container">
          {/* <div className="text-center mb-16">
            <div className="flex items-center justify-center">
              <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                Our Tech Expertise
              </span>
            </div>
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              <span className="text-gred">Technology</span> Categories We Excel In
            </h2>
            <p className="text-gray-300 text-[20px] text-center max-w-3xl mx-auto">
              Explore our comprehensive technology expertise across multiple domains
            </p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techCategories.map((category, index) => (
              <div
                key={index}
                className="group relative p-6 bg-[#1e293b80] rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl bg-primary"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-[20px] font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-white/70 text-[14px] leading-6">{category.description}</p>
                  
                  <div className="mt-4 flex items-center gap-2 text-primary text-[14px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore</span>
                    <BsLightning size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Advantages Section */}
      {/* <section className="py-20 imageBg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center">
              <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                Why Our Tech Stack
              </span>
            </div>
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              <span className="text-gred">Advantages</span> of Our Technology Choices
            </h2>
            <p className="text-gray-300 text-[20px] text-center">
              Why we choose these specific technologies for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              className="p-8 bg-[#1e293b80] rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all group"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiTrendingUp size={32} className="text-white" />
              </div>
              <h4 className="text-[24px] font-bold text-white mb-4">Performance Optimized</h4>
              <p className="text-white/70 text-[16px] leading-6 mb-6">
                Our carefully selected tech stack ensures maximum performance, scalability, and reliability for your AI applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Lightning fast execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Auto-scaling capabilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Real-time processing</span>
                </div>
              </div>
            </div>

            <div
              className="p-8 bg-[#1e293b80] rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BsLightning size={32} className="text-white" />
              </div>
              <h4 className="text-[24px] font-bold text-white mb-4">Industry Leading</h4>
              <p className="text-white/70 text-[16px] leading-6 mb-6">
                We use only the most advanced and proven technologies that are trusted by industry leaders worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Enterprise-grade security</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Continuous updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Community support</span>
                </div>
              </div>
            </div>

            <div
              className="p-8 bg-[#1e293b80] rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HiOutlineCode size={32} className="text-white" />
              </div>
              <h4 className="text-[24px] font-bold text-white mb-4">Future Ready</h4>
              <p className="text-white/70 text-[16px] leading-6 mb-6">
                Our technology choices ensure your solutions remain relevant and easily upgradeable as technology evolves.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Forward compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Easy maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiCheckCircle size={16} className="text-green-400" />
                  <span className="text-white/60 text-[14px]">Modular architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Interactive Technology Explorer */}
      <section className="py-20 bg-[#000319]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center">
              <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                Tech Stack Explorer
              </span>
            </div>
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              <span className="text-gred">Interactive</span> Technology Explorer
            </h2>
            <p className="text-gray-300 text-[20px] text-center max-w-3xl mx-auto">
              Explore our comprehensive technology stack. Click on any category to see the specific tools and frameworks we master.
            </p>
          </div>

          {/* Technology Category Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-12" data-aos="fade-up">
            {technologiesData?.length !== 0 &&
              technologiesData?.map((item, index) => {
                return (
                  <Button
                    key={index}
                    className={`
                      group relative overflow-hidden
                      !text-[14px] lg:!text-[16px] !font-[600] !capitalize !rounded-full !px-4 lg:!px-6 !py-3
                      transition-all duration-500 transform hover:scale-105
                      ${isActive === index 
                        ? "!bg-gradient-to-r !from-[#ff6333] !via-[#e15226] !to-[#fe9272] !text-white !shadow-xl !shadow-primary/30" 
                        : "!bg-[#1e293b80] !text-gray-300 !border !border-[rgba(255,255,255,0.1)] hover:!bg-[#2d3748] hover:!text-white hover:!border-primary/30"
                      }
                    `}
                    onClick={() => {
                      setIsActive(index);
                      setIsActiveTech(item);
                    }}
                  >
                    <span className="flex items-center gap-2 lg:gap-3 relative z-10">
                      <img 
                        src={item?.icon} 
                        alt="icon" 
                        width={20} 
                        height={20} 
                        className="filter brightness-110 group-hover:scale-110 transition-transform" 
                      />
                      <span className="hidden sm:inline">{item?.name}</span>
                      <span className="sm:hidden">{item?.name.split(' ')[0]}</span>
                    </span>
                    
                    {/* Animated background for active state */}
                    {isActive === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary animate-pulse opacity-20"></div>
                    )}
                  </Button>
                );
              })}
          </div>

          {/* Active Technology Display */}
          {isActiveTech && (
            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              {/* Floating Background Elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-[#0a0f1c] via-[#0f1419] to-[#0a0f1c] rounded-2xl border border-[rgba(255,255,255,0.1)] overflow-hidden">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 lg:p-8 border-b border-[rgba(255,255,255,0.1)]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                      <img src={isActiveTech?.icon} alt="icon" width={24} height={24} />
                    </div>
                    <div>
                      <h2 className="text-white text-[24px] lg:text-[32px] font-bold">
                        {isActiveTech?.name}
                      </h2>
                      <p className="text-primary text-[14px] lg:text-[16px] font-medium">
                        {isActiveTech?.data?.length} Technologies Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="p-6 lg:p-12">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
                    {isActiveTech?.data?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="group relative technology-item"
                          data-aos="zoom-in"
                          data-aos-delay={index * 30}
                        >
                          <div className="relative bg-[#1a1f2e] hover:bg-[#252b3d] rounded-xl p-3 lg:p-4 h-28 lg:h-36 flex flex-col items-center justify-center gap-2 lg:gap-3 border border-[rgba(255,255,255,0.05)] hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 cursor-pointer group">
                            
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Technology Icon */}
                            <div className="relative z-10">
                              <img
                                src={item?.img}
                                alt={item?.name}
                                width={32}
                                height={32}
                                className="lg:w-10 lg:h-10 transition-all duration-300 group-hover:scale-125 drop-shadow-lg filter group-hover:brightness-110"
                              />
                              
                              {/* Icon Glow */}
                              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Technology Name */}
                            <h3 className="relative z-10 text-white/80 group-hover:text-white text-[11px] lg:text-[14px] font-bold text-center transition-colors duration-300 leading-tight">
                              {item?.name}
                            </h3>

                            {/* Success Indicator */}
                            <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                            
                            {/* Animated Corner Lines */}
                            <div className="absolute top-0 left-0 w-3 h-3 lg:w-4 lg:h-4 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/60 rounded-tl-xl transition-all duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 lg:w-4 lg:h-4 border-r-2 border-b-2 border-primary/0 group-hover:border-primary/60 rounded-br-xl transition-all duration-300"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Technology Stats */}
                  <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    <div className="text-center p-4 bg-[#252b3d] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all">
                      <div className="text-[20px] lg:text-[24px] font-bold text-primary">{isActiveTech?.data?.length || 0}+</div>
                      <div className="text-white/70 text-[12px] lg:text-[14px]">Technologies</div>
                    </div>
                    <div className="text-center p-4 bg-[#252b3d] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all">
                      <div className="text-[20px] lg:text-[24px] font-bold text-primary">100%</div>
                      <div className="text-white/70 text-[12px] lg:text-[14px]">Updated</div>
                    </div>
                    <div className="text-center p-4 bg-[#252b3d] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all">
                      <div className="text-[20px] lg:text-[24px] font-bold text-primary">24/7</div>
                      <div className="text-white/70 text-[12px] lg:text-[14px]">Support</div>
                    </div>
                    <div className="text-center p-4 bg-[#252b3d] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all">
                      <div className="text-[20px] lg:text-[24px] font-bold text-primary">Expert</div>
                      <div className="text-white/70 text-[12px] lg:text-[14px]">Level</div>
                    </div>
                  </div>

                  {/* Category Description */}
                  <div className="mt-12 text-center">
                    <p className="text-white/70 text-[16px] lg:text-[18px] max-w-3xl mx-auto leading-7">
                      Each technology in our <span className="text-primary font-medium">{isActiveTech?.name}</span> stack 
                      is carefully chosen for its reliability, performance, and ability to integrate seamlessly 
                      with our AI-powered solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-20 bg-[url('/bg-banner.png')] bg-cover bg-center">
        <div className="container">
          <div className="text-center">
            <h2 className="text-white txt-shadow text-[32px] lg:text-[40px] font-bold mb-6">
              Ready to Leverage These Technologies?
            </h2>
            <p className="text-white/80 text-[18px] lg:text-[20px] mb-8 max-w-2xl mx-auto">
              Let our expert team help you choose the right technology stack for your AI-powered project.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              <Button
                className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 lg:!px-8 !py-3 lg:!py-4 !capitalize !font-bold !text-[16px] lg:!text-[18px] w-full sm:w-auto"
                size="large"
              >
                Start Your Project
              </Button>
              
              <Button
                className="!bg-transparent !text-white !border-2 !border-white/30 !rounded-md !px-6 lg:!px-8 !py-3 lg:!py-4 !capitalize !font-bold !text-[16px] lg:!text-[18px] hover:!bg-white/10 w-full sm:w-auto"
                size="large"
              >
                Technology Consultation
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Technologies;
