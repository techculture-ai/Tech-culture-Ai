import React from 'react'
import { IoStar } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
const HomeScreen = () => {
    return (
      <section className="homeScreen h-[1200px] relative">
        <Image
          src="/plus.png"
          alt="image"
          className="plusImg keyframe5"
          width={50}
          height={50}
        />
        <div className="container">
          <div className="flex items-center justify-center pt-[100px] lg:pt-[200px]"></div>
          <h1
            className="text-white font-bold space-x-2 text-[60px] leading-[80px] text-center my-2 txt-shadow"
            data-aos="fade-up"
          >
            Transform Your Business with
          </h1>

          <h2
            className="text-white font-medium text-[60px] leading-[80px] text-center my-2 txt-shadow
                flex items-center gap-4 justify-center"
            data-aos="fade-up"
          >
            <span className="relative text-center txtLine text-primary">
              <TypeAnimation
                className="pb-2"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Website Design & Development",
                  1000,
                  "E-Commerce Development",
                  1000,
                  "CMS Development",
                  1000,
                  "CRM, LMS, ERP Development",
                  1000,
                  "Custom Web Application Development",
                  1000,
                  "Mobile App Development (iOS & Android)",
                  1000,
                  "API Development & Integration",
                  1000,
                  "Software Testing & QA",
                  1000,
                  "Website Maintenance & Support",
                  1000,
                  "SEO & Digital Marketing Services",
                  1000,
                  "Security Audits & Compliance",
                  1000,
                  "Cloud Security & Data Protection",
                  1000,
                  "Artificial Intelligence (AI & ML) Solutions",
                  1000,
                  "Chatbot & Virtual Assistant Development",
                  1000,
                  "Big Data Management",
                  1000,
                  "IT Strategy & Roadmap Consulting",
                  1000,
                  "Digital Transformation Services",
                  1000,
                  "Industry-Specific IT Solutions",
                  1000,
                ]}
                wrapper="span"
                speed={150}
                repeat={Infinity}
              />
            </span>
          </h2>

          <Image
            src="/homeScreenaimg3.png"
            alt="image"
            className="absolute top-96 left-36 aniamtion-key-2"
            width={200}
            height={200}
          />

          <br />

          <p
            className="text-center text-white/70 text-[20px] w-[55%] m-auto"
            data-aos="fade-up"
          >
            Innovating technology to accelerate your growth in the digital-first
            world.
          </p>

          <div className="homeScreenImg absolute bottom-0 left-0 w-full text-center flex items-center justify-center">
            <Image
              src="/banner-tc-4.png"
              alt="img"
              className="w-[750px] hidden lg:block"
              width={750}
              height={500}
            />

            <Image
              src="/elements29.png"
              className="homeScreen_img2 absolute homeScreen_img2Animation"
              alt="image"
              width={100}
              height={100}
            />

            <div
              className="flex items-center bg-white p-3 rounded-md homescreenExpTab absolute 
                    -top-24 right-7 w-80 gap-2 text-left aniamtion-key-8"
            >
              <span>
                <FaCircleCheck size={25} className="text-primary" />
              </span>
              <p>With 8+ years of experience helping the community.</p>
            </div>

            <div
              className="homeScreenRating hidden lg:flex flex-col gap-2 absolute top-64 right-24"
              data-aos="fade-left"
            >
              <div className="flex items-center gap-1">
                <IoStar size={20} className="text-primary" />
                <IoStar size={20} className="text-primary" />
                <IoStar size={20} className="text-primary" />
                <IoStar size={20} className="text-primary" />
                <IoStar size={20} className="text-primary" />
              </div>

              <h4 className="text-white/80 text-[18px] text-left">
                “We are dedicated, reliable
                <br />& assigned to grow your business.”
              </h4>
              <span className="text-primary text-[16px] text-left flex items-center gap-1">
                <Image src="/star1.png" alt="image" width={16} height={16} />
                CEO & Founder
              </span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HomeScreen
