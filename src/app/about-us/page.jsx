"use client";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineShowChart } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { FaAward } from "react-icons/fa";
import { BsLightbulb } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { BiCheckCircle } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import AIPageHeader from "../../components/AIPageHeader";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
  }, []);

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "12+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" }
  ];

  const values = [
    {
      icon: <BsLightbulb size={40} className="text-primary" />,
      title: "Innovation",
      description:
        "We lead the way by embracing frontier AI advancements and bold innovations that propel profound shifts in business landscapes.",
    },
    {
      icon: <FaAward size={40} className="text-primary" />,
      title: "Excellence",
      description:
        "We uphold the highest standards of excellence, guaranteeing that each endeavor surpasses client aspirations through resilient, adaptable, and streamlined outcomes.",
    },
    {
      icon: <FiUsers size={40} className="text-primary" />,
      title: "Collaboration",
      description:
        "We collaborate with our clients as true partners, gaining a deep understanding of their goals and delivering solutions designed specifically to meet their needs.",
    },
    {
      icon: <TbTargetArrow size={40} className="text-primary" />,
      title: "Results-Driven",
      description:
        "Every solution we create is designed to deliver measurable results and sustainable business growth.",
    },
  ];

  const journey = [
    {
      year: "2012",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through innovative technology solutions."
    },
    {
      year: "2015",
      title: "AI Integration",
      description: "Pioneered AI-powered solutions for e-commerce and business automation."
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded our services globally, serving clients across multiple continents."
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as a leading provider of AI-driven business solutions with 200+ successful projects."
    }
  ];

  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader
        title="Who We Are"
        subtitle="Transforming Business Through Intelligent Innovation"
        description="Discover how our advanced AI technologies and expert team are revolutionizing the way businesses operate and grow."
        aiWords={["AI-Powered", "Intelligent", "Advanced"]}
      />

      {/* Hero Section */}
      <section className="py-24 pt-10 aboutSection imageBg">
        <div className="container">
          <div className="flex items-center gap-20 wrapper">
            <div className="img relative w-[50%]" data-aos="fade-right">
              <img src="/about__2.png" alt="image" />
              {/* <span className="animateText txt-shadow">About Us</span> */}
              <img
                src="/about__small__img__2.png"
                className="aboutIconImg absolute top-16 right-40"
                alt="image"
              />
            </div>

            <div
              className="info w-[50%] flex flex-col gap-5"
              data-aos="fade-left"
            >
              <div className="flex items-center justify-start">
                <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                  About TechCulture AI
                </span>
              </div>

              <h2 className="mainHd text-[50px] font-bold text-white leading-[60px]">
                Driving Business Excellence Through
                <br />
                <span className="text-gred">AI Innovation</span>
              </h2>

              <p className="text-white/70 text-[20px]">
                At Techculture, we specialize in delivering cutting edge AI
                driven solutions that redefine the way organizations function.
                With more than 8 years of expertise in technology and
                innovation, we empower businesses to harness the potential of
                artificial intelligence to optimize operations, enhance
                efficiency, and accelerate sustainable growth.
              </p>

              <div className="flex items-center gap-5 flex-col lg:flex-row justify-start text-left">
                <span className="flex items-center gap-2 text-white/70 text-[18px] w-full lg:w-auto">
                  <MdOutlineShowChart size={20} className="text-primary" />
                  Custom Solutions
                </span>

                <span className="flex items-center gap-2 text-white/70 text-[18px] w-full lg:w-auto">
                  <FiUsers size={20} className="text-primary" />
                  Expert Team
                </span>

                <span className="flex items-center gap-2 text-white/70 text-[18px] w-full lg:w-auto">
                  <IoChatbubbleOutline size={20} className="text-primary" />
                  24/7 Support
                </span>
              </div>

              <div className="btn mt-3">
                <Button
                  onClick={() => router.push("/services")}
                  className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-3 !capitalize !font-bold gap-2"
                  size="large"
                >
                  <IoPlayOutline size={25} /> Discover Our Solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#000319]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="text-[40px] font-bold text-primary txt-shadow">
                  {stat.number}
                </h3>
                <p className="text-white/80 text-[18px] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 imageBg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="p-8 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all group">
              <div className="flex flex-col gap-6" data-aos="fade-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full flex items-center justify-center">
                    <GoRocket size={24} className="text-white" />
                  </div>
                  <h3 className="text-[32px] font-bold text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-white/80 text-[18px] leading-7">
                  We are committed to helping businesses across the globe
                  harness the power of intelligent solutions that simplify
                  complex processes, improve efficiency, and build long-term
                  competitive strength in today’s digital landscape.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <BiCheckCircle size={20} className="text-primary" />
                    <span className="text-white/70">
                      Delivering innovative, future-ready AI technologies
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BiCheckCircle size={20} className="text-primary" />
                    <span className="text-white/70">
                      Offering reliable and responsive customer support
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BiCheckCircle size={20} className="text-primary" />
                    <span className="text-white/70">
                      Enabling organizations to achieve true digital
                      transformation
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Vision */}
            <div
              className="p-8 bg-[#1e293b80] rounded-lg border
            border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all
            group"
            >
              <div
                className="flex flex-col gap-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full flex items-center justify-center">
                    <BsLightbulb size={24} className="text-white" />
                  </div>
                  <h3 className="text-[32px] font-bold text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-white/80 text-[18px] leading-7">
                  Our vision is to lead the world in delivering AI-driven
                  solutions for business, empowering organizations everywhere to
                  unlock artificial intelligence&apos;s potential and drive
                  extraordinary expansion and creativity.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <BiCheckCircle size={20} className="text-primary" />
                    <span className="text-white/70">
                      We pioneer advanced AI innovations.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BiCheckCircle size={20} className="text-primary" />
                    <span className="text-white/70">
                      We build enduring, responsible value for enterprises.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BiCheckCircle size={20} className="text-primary" />
                    <span className="text-white/70">
                      We spark transformative change throughout diverse sectors.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[#000319]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center">
              <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                Our Values
              </span>
            </div>
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              What <span className="text-gred">Drives Us</span>
            </h2>
            <p className="text-gray-300 text-[20px] text-center">
              The core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-[24px] font-bold text-white">
                      {value.title}
                    </h4>
                    <p className="text-white/70 text-[16px] leading-6">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 imageBg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center">
              <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                Our Journey
              </span>
            </div>
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              Our <span className="text-gred">Growth Story</span>
            </h2>
            <p className="text-gray-300 text-[20px] text-center">
              From startup to industry leader - here&apos;s how we&apos;ve
              evolved
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff6333] to-[#fe9272] hidden lg:block"></div>

            <div className="space-y-12">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  {/* Content */}
                  <div className="flex-1 lg:w-[45%]">
                    <div className="p-6 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)]">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[20px] font-bold text-primary">
                          {item.year}
                        </span>
                        <h4 className="text-[22px] font-bold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-white/70 text-[16px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-primary rounded-full border-4 border-[#000319] flex-shrink-0"></div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 lg:w-[45%] hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#000319]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center">
              <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                Why Choose Us
              </span>
            </div>
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              Why We&apos;re <span className="text-gred">Different</span>
            </h2>
            <p className="text-gray-300 text-[20px] text-center">
              What sets us apart in the competitive AI landscape
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Expertise */}
            <div
              className="text-center p-8 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all"
              data-aos="zoom-in"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full flex items-center justify-center mx-auto mb-6">
                <MdOutlineShowChart size={32} className="text-white" />
              </div>
              <h4 className="text-[24px] font-bold text-white mb-4">
                Deep Expertise
              </h4>
              <p className="text-white/70 text-[16px]">
                Our team of AI specialists brings decades of combined experience
                in machine learning, data science, and business automation.
              </p>
            </div>

            {/* Custom Solutions */}
            <div
              className="text-center p-8 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full flex items-center justify-center mx-auto mb-6">
                <BsLightbulb size={32} className="text-white" />
              </div>
              <h4 className="text-[24px] font-bold text-white mb-4">
                Custom Solutions
              </h4>
              <p className="text-white/70 text-[16px]">
                Every business is unique. We create tailored AI solutions that
                perfectly align with your specific needs and business
                objectives.
              </p>
            </div>

            {/* Proven Results */}
            <div
              className="text-center p-8 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward size={32} className="text-white" />
              </div>
              <h4 className="text-[24px] font-bold text-white mb-4">
                Proven Results
              </h4>
              <p className="text-white/70 text-[16px]">
                With 200+ successful projects and a 98% client satisfaction
                rate, we have a proven track record of delivering exceptional
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      {/* <section className="py-20  imageBg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6" data-aos="fade-right">
              <div className="flex items-center justify-start">
                <span className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full text-[14px] text-primary">
                  Company Culture
                </span>
              </div>

              <h2 className="mainHd text-[40px] font-bold text-white leading-[50px]">
                Building the <span className="text-gred">Future Together</span>
              </h2>

              <p className="text-white/70 text-[18px] leading-7">
                At TechCulture AI, we believe that great technology comes from
                great people. Our diverse team of innovators, thinkers, and
                problem-solvers work collaboratively to push the boundaries of
                what's possible with artificial intelligence.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <BiCheckCircle size={24} className="text-primary" />
                  <span className="text-white/80 text-[16px]">
                    Collaborative work environment
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BiCheckCircle size={24} className="text-primary" />
                  <span className="text-white/80 text-[16px]">
                    Continuous learning and development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BiCheckCircle size={24} className="text-primary" />
                  <span className="text-white/80 text-[16px]">
                    Innovation-driven mindset
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BiCheckCircle size={24} className="text-primary" />
                  <span className="text-white/80 text-[16px]">
                    Work-life balance priority
                  </span>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <img
                src="/team.png"
                alt="Our Team"
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
