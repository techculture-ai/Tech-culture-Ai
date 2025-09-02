"use client";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { RiRobot2Fill } from "react-icons/ri";
import { TbBrain } from "react-icons/tb";
import { IoSparklesOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const AIPageHeader = ({ 
  title, 
  subtitle, 
  description, 
  aiWords = ["Intelligent", "Smart", "Advanced", "Powered", "Enhanced"], 
  showParticles = true 
}) => {
  const [currentIcon, setCurrentIcon] = useState(0);
  
  const aiIcons = [
    <RiRobot2Fill key="robot" size={24} className="text-primary" />,
    <TbBrain key="brain" size={24} className="text-primary" />,
    <IoSparklesOutline key="sparkles" size={24} className="text-primary" />,
    <HiOutlineLightBulb key="bulb" size={24} className="text-primary" />
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
    
    const interval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % aiIcons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 pb-10 relative overflow-hidden imageBg">
      {/* AI Particles Background */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-primary rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute top-16 right-40 w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
          <div
            className="absolute top-24 left-1/3 w-1 h-1 bg-primary rounded-full opacity-70 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-40 right-1/3 w-2 h-2 bg-primary/50 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      )}

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* AI Badge */}
          <div
            className="flex items-center justify-center gap-2 mb-6"
            data-aos="fade-down"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#ff6333]/10 via-[#e15226]/10 to-[#fe9272]/10 backdrop-blur-sm border border-[#ff6333]/20 rounded-full px-6 py-3">
              <div className="transition-all duration-500 ease-in-out">
                {aiIcons[currentIcon]}
              </div>
              <span className="text-primary font-medium text-[16px]">
                <TypeAnimation
                  sequence={[
                    "AI-Powered Platform",
                    2000,
                    "Intelligent Solutions",
                    2000,
                    "Smart Automation",
                    2000,
                    "Next-Gen Technology",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="text-[3.5rem] lg:text-[4.5rem] font-bold text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title.split(" ").map((word, index) => {
              const words = title.split(" ");
              const isLastWord = index === words.length - 1;

              return (
                <React.Fragment key={index}>
                  <span className={isLastWord ? "text-gred" : ""}>{word}</span>
                  {index < words.length - 1 && <span> </span>}
                </React.Fragment>
              );
            })}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2
              className="text-[1.2rem] font-semibold text-white/90 mb-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <TypeAnimation
                sequence={["", 500, subtitle, 1000]}
                wrapper="span"
                speed={80}
                repeat={0}
                cursor={false}
              />
            </h2>
          )}

          {/* Description */}
          {/* {description && (
            <p 
              className="text-[1.2rem] text-white/70 max-w-3xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {description}
            </p>
          )} */}

          {/* AI Circuit Lines */}
          <div
            className="mt-12 relative"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"></div>
            <div
              className="absolute left-1/4 transform -translate-x-1/2 -top-1 w-2 h-2 bg-primary/70 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute right-1/4 transform translate-x-1/2 -top-1 w-2 h-2 bg-primary/70 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPageHeader;
