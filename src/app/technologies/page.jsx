"use client";
import React, { useEffect, useState } from "react";
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
import {
  FaReact,
  FaNode,
  FaPython,
  FaPhp,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaVuejs,
  FaBootstrap,
  FaUnity,
  FaDatabase,
} from "react-icons/fa";
import {
  SiFlutter,
  SiUnrealengine,
  SiTypescript,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";


const iconMap = {
  "React Native": <FaReact className="w-6 h-6 text-primary" />,
  Flutter: <SiFlutter className="w-6 h-6 text-primary" />,
  Unity: <FaUnity className="w-6 h-6 text-primary" />,
  "Unreal Engine": <SiUnrealengine className="w-6 h-6 text-primary" />,
  TypeScript: <SiTypescript className="w-6 h-6 text-primary" />,
  "Node.js": <FaNode className="w-6 h-6 text-primary" />,
  Django: <SiDjango className="w-6 h-6 text-primary" />,
  Python: <FaPython className="w-6 h-6 text-primary" />,
  Flask: <SiFlask className="w-6 h-6 text-primary" />,
  FastAPI: <SiFastapi className="w-6 h-6 text-primary" />,
  PHP: <FaPhp className="w-6 h-6 text-primary" />,
  Laravel: <FaLaravel className="w-6 h-6 text-primary" />,
  PostgreSQL: <SiPostgresql className="w-6 h-6 text-primary" />,
  MySQL: <SiMysql className="w-6 h-6 text-primary" />,
  MongoDB: <SiMongodb className="w-6 h-6 text-primary" />,
  Firebase: <SiFirebase className="w-6 h-6 text-primary" />,
  HTML5: <FaHtml5 className="w-6 h-6 text-primary" />,
  CSS3: <FaCss3Alt className="w-6 h-6 text-primary" />,
  JavaScript: <FaJs className="w-6 h-6 text-primary" />,
  "React.js": <FaReact className="w-6 h-6 text-primary" />,
  Angular: <FaAngular className="w-6 h-6 text-primary" />,
  "Vue.js": <FaVuejs className="w-6 h-6 text-primary" />,
  "Next.js": <SiNextdotjs className="w-6 h-6 text-primary" />,
  Tailwind: <SiTailwindcss className="w-6 h-6 text-primary" />,
  Bootstrap: <FaBootstrap className="w-6 h-6 text-primary" />,
};


const Technologies = () => {
  const { technologyData, setTechnologyData } = useSite();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [isActive, setIsActive] = useState(0);
  const [isActiveTech, setIsActiveTech] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });

    const fetchTechnology = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${apiUrl}/api/technologies`);
        console.log("Technology API Response:", res.data);

        if (res.data.success && res.data.data) {
          setTechnologyData(res.data.data);
          // Set the first category as active by default
          if (res.data.data.length > 0) {
            setIsActiveTech(res.data.data[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnology();
  }, [apiUrl, setTechnologyData]);

  // Dynamic tech categories based on loaded data
  const getDynamicTechCategories = () => {
    if (!technologyData || technologyData.length === 0) return [];

    return technologyData.slice(0, 4).map((tech, index) => ({
      title: tech.title,
      description: `Explore our ${tech.title.toLowerCase()} expertise`,
      icon: getIconForCategory(tech.categoryKey),
      color: getColorForIndex(index),
    }));
  };

  const getIconForCategory = (categoryKey) => {
    const iconMap = {
      frontend: "🎨",
      backend: "⚙️",
      ai: "🤖",
      ml: "🤖",
      cloud: "☁️",
      devops: "☁️",
      mobile: "📱",
      database: "💾",
      default: "💻",
    };

    const key = categoryKey.toLowerCase();
    return iconMap[key] || iconMap["default"];
  };

  const getColorForIndex = (index) => {
    const colors = [
      "from-blue-500 to-cyan-500",
      "from-purple-500 to-pink-500",
      "from-green-500 to-emerald-500",
      "from-orange-500 to-red-500",
    ];
    return colors[index % colors.length];
  };

  const techCategories = getDynamicTechCategories();

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
      {/* <section className="py-20 bg-[#000319]">
        <div className="container">
          {loading ? (
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategories.map((category, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-[#1e293b80] rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  onClick={() => {
                    if (technologyData && technologyData[index]) {
                      setIsActive(index);
                      setIsActiveTech(technologyData[index]);
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl bg-primary"></div>

                    <div className="relative z-10">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-[20px] font-bold text-white mb-3">
                        {category.title}
                      </h3>
                      <p className="text-white/70 text-[14px] leading-6">
                        {category.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-primary text-[14px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Explore</span>
                        <BsLightning size={14} />
                      </div>
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section> */}

      {/* Interactive Technology Explorer */}
      <section className="py-20 bg-[#000319]">
        <div className="container">
          {/* <div className="text-center mb-16">
            
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              <span className="text-gred">Interactive</span> Technology Explorer
            </h2>
            <p className="text-gray-300 text-[20px] text-center max-w-3xl mx-auto">
              Explore our comprehensive technology stack. Click on any category
              to see the specific tools and frameworks we master.
            </p>
          </div> */}

          {/* Technology Category Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-12"
            data-aos="fade-up"
          >
            {loading ? (
              <div className="text-white">Loading categories...</div>
            ) : (
              technologyData?.length > 0 &&
              technologyData?.map((item, index) => {
                return (
                  <Button
                    key={index}
                    className={`
                      group relative overflow-hidden
                      !text-[14px] lg:!text-[16px] !font-[600] !capitalize !rounded-full !px-4 lg:!px-6 !py-3
                      transition-all duration-500 transform hover:scale-105
                      ${
                        isActive === index
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
                      <div className={`w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center ${isActive === index ? 'bg-white/80' : ''}`}>
                        <span className={`text-primary text-xs font-bold `}>
                          {item?.title?.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="hidden sm:inline">{item?.title}</span>
                      <span className="sm:hidden">
                        {item?.title.split(" ")[0]}
                      </span>
                    </span>

                    {/* Animated background for active state */}
                    {isActive === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary animate-pulse opacity-20"></div>
                    )}
                  </Button>
                );
              })
            )}
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
                      <span className="text-white text-xl font-bold">
                        {isActiveTech?.title?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-white text-[24px] lg:text-[32px] font-bold">
                        {isActiveTech?.title}
                      </h2>
                      <p className="text-primary text-[14px] lg:text-[16px] font-medium">
                        {isActiveTech?.items?.length || 0} Technologies
                        Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="p-6 lg:p-12">
                  {isActiveTech?.items?.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
                      {isActiveTech?.items?.map((item, index) => {
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
                                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-125">
                                  {iconMap[item?.name] || (
                                    <span className="text-primary text-xl font-bold">
                                      {item?.name?.charAt(0).toUpperCase()}
                                    </span>
                                  )}
                                </div>

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
                  ) : (
                    <div className="text-center text-gray-400 py-12">
                      <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HiOutlineCode size={32} className="text-gray-500" />
                      </div>
                      <p className="text-lg">
                        No technologies found in this category
                      </p>
                      <p className="text-sm mt-2">
                        Technologies will appear here once added to the database
                      </p>
                    </div>
                  )}

                  {/* Technology Stats */}
                  <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                    <div className="text-center p-4 bg-[#252b3d] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all">
                      <div className="text-[20px] lg:text-[24px] font-bold text-primary">
                        {isActiveTech?.items?.length || 0}+
                      </div>
                      <div className="text-white/70 text-[12px] lg:text-[14px]">
                        Technologies
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[#252b3d] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all">
                      <div className="text-[20px] lg:text-[24px] font-bold text-primary">
                        100%
                      </div>
                      <div className="text-white/70 text-[12px] lg:text-[14px]">
                        Updated
                      </div>
                    </div>
                    <div className="text-center p-4 bg-[#252b3d] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all">
                      <div className="text-[20px] lg:text-[24px] font-bold text-primary">
                        24/7
                      </div>
                      <div className="text-white/70 text-[12px] lg:text-[14px]">
                        Chat Support
                      </div>
                    </div>
                    {/* <div className="text-center p-4 bg-[#252b3d] rounded-lg border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all">
                      <div className="text-[20px] lg:text-[24px] font-bold text-primary">
                        Expert
                      </div>
                      <div className="text-white/70 text-[12px] lg:text-[14px]">
                        Level
                      </div>
                    </div> */}
                  </div>

                  {/* Category Description */}
                  <div className="mt-12 text-center">
                    <p className="text-white/70 text-[16px] lg:text-[18px] max-w-3xl mx-auto leading-7">
                      Each technology in our{" "}
                      <span className="text-primary font-medium">
                        {isActiveTech?.title}
                      </span>{" "}
                      stack is carefully chosen for its reliability,
                      performance, and ability to integrate seamlessly with our
                      AI-powered solutions.
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
