"use client";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { useSite } from "@/context/siteContext";
import AIPageHeader from "../../components/AIPageHeader";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  const { teamData, setTeamData } = useSite();
  
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
    
    async function fetchData() {
      if (!teamData) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/employees`
          );
          console.log("team data", res.data.employees);
          setTeamData(res.data.employees);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, []);

  // Static team data
  const teamMembers = [
    {
      name: "Alex Kumongso",
      role: "Founder",
      image: "https://framerusercontent.com/images/AmzMYBvSyevOx0HzGymVYZloPpI.png"
    },
    {
      name: "Lisa Ningrum", 
      role: "Automation Architect",
      image: "https://framerusercontent.com/images/eDJbYx9VwT4p28gFyOV4lYMkwwY.png"
    },
    {
      name: "Ryan Wilujeng",
      role: "Lead AI Engineer", 
      image: "https://framerusercontent.com/images/gJ8LUUN2Q6DaBaNWBDRWwyA6Tyk.png"
    },
    {
      name: "Sarah Kumala",
      role: "Customer Success Manager",
      image: "https://framerusercontent.com/images/8AZrPjb86rxarUfcpeLQp1Wm14.png"
    }
  ];

  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader
        title="Meet Our AI Experts"
        subtitle="The Brilliant Minds Behind Intelligent Solutions"
        description="Get to know the talented professionals who are pioneering the future of AI technology and driving innovation at every level."
      />

      <section className="py-20 teamSection imageBg">
        <div className="container">
          {/* <div className="flex items-center justify-center">
            <span
              className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full 
                      text-[14px] text-primary"
            >
              Our Team
            </span>
          </div> */}
          {/* <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
            Meet the <span className="text-gred">Experts</span>
          </h2>
          <p className="text-gray-300 text-[20px] text-center mb-16">
            Our AI-driven automation eliminates busywork, streamlines your
            operations, <br />
            and helps your business grow, without extra effort.
          </p> */}

          {/* Team Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative teamItem rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
               
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="info absolute top-0 left-0 w-full h-full z-50 p-6 flex justify-between flex-col">
                  <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 self-start">
                    <h4 className="text-white/90 text-[12px] font-medium">
                      {member.role}
                    </h4>
                  </div>

                  <div className="content relative">
                    <h2 className="text-white font-bold text-[20px] mb-3 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h2>
                    <div className="flex gap-3 socials">
                      <Link
                        href="#"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] hover:border-primary hover:bg-primary/20 transition-all duration-300 group/social"
                      >
                        <FaLinkedinIn
                          size={16}
                          className="text-white group-hover/social:text-primary transition-colors"
                        />
                      </Link>
                      <Link
                        href="#"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] hover:border-primary hover:bg-primary/20 transition-all duration-300 group/social"
                      >
                        <RiTwitterXLine
                          size={16}
                          className="text-white group-hover/social:text-primary transition-colors"
                        />
                      </Link>
                      <Link
                        href="#"
                        target="_blank"
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] hover:border-primary hover:bg-primary/20 transition-all duration-300 group/social"
                      >
                        <FaInstagram
                          size={16}
                          className="text-white group-hover/social:text-primary transition-colors"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

           
                <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-primary/0 group-hover:border-primary/60 rounded-tr-xl transition-all duration-300"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-primary/0 group-hover:border-primary/60 rounded-bl-xl transition-all duration-300"></div>
              </div>
            ))}
          </div> */}

          {/* Dynamic Team Data Grid (if available) */}
          {teamData && teamData.length > 0 && (
            <div className="">
              {/* <h3 className="text-center text-white text-[24px] font-bold mb-8">
                More Team <span className="text-gred">Members</span>
              </h3> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamData.map((member, index) => (
                  <div
                    key={index}
                    className="group relative teamItem rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <img
                      src={member.profilePicture || "/team.png"}
                      alt={member.name}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="info absolute top-0 left-0 w-full h-full z-50 p-6 flex justify-between flex-col">
                      <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 self-start">
                        <h4 className="text-white/90 text-[12px] font-medium">
                          {member.designation}
                        </h4>
                      </div>

                      <div className="content relative">
                        <h2 className="text-white font-bold text-[20px] mb-3 group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h2>
                        <div className="flex gap-3 socials">
                          <Link
                            href="#"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] hover:border-primary hover:bg-primary/20 transition-all duration-300 group/social"
                          >
                            <FaLinkedinIn
                              size={16}
                              className="text-white group-hover/social:text-primary transition-colors"
                            />
                          </Link>
                          <Link
                            href="#"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] hover:border-primary hover:bg-primary/20 transition-all duration-300 group/social"
                          >
                            <RiTwitterXLine
                              size={16}
                              className="text-white group-hover/social:text-primary transition-colors"
                            />
                          </Link>
                          <Link
                            href="#"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] hover:border-primary hover:bg-primary/20 transition-all duration-300 group/social"
                          >
                            <FaInstagram
                              size={16}
                              className="text-white group-hover/social:text-primary transition-colors"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-primary/0 group-hover:border-primary/60 rounded-tr-xl transition-all duration-300"></div>
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-primary/0 group-hover:border-primary/60 rounded-bl-xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Team;
