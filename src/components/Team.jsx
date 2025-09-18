"use client"
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { useSite } from '@/context/siteContext';
import axios from 'axios';

const Team = () => {
    const { teamData, setTeamData } = useSite();
    useEffect(() => {
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
    return (
      <section className=" py-20 pt-0 pb-0 teamSection">
        <div className="container">
          <div className="flex items-center justify-center">
            <span
              className="bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full 
                    text-[14px] text-primary"
            >
              Our Team
            </span>
          </div>
          <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
            Meet the <span className="text-gred">Experts</span>
          </h2>
          <p className="text-gray-300 text-[20px] text-center">
            Our AI-driven automation eliminates busywork, streamlines your
            operations, <br />
            and helps your business grow, without extra effort.
          </p>
          <br /> <br />
          { teamData && <Swiper
            slidesPerView={5}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              250: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              330: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1100: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {teamData &&
              teamData.length > 0 &&
              teamData.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="teamItem relative rounded-lg overflow-hidden border border-[rgba(255,255,255,0.1)]">
                    <Image
                      src={member.profilePicture}
                      alt={member.name}
                      className="w-full"
                      width={400}
                      height={500}
                      style={{objectFit: 'cover'}}
                    />
                    <div className="info absolute top-0 left-0 w-full h-full z-50 p-5 flex justify-between flex-col">
                      <h4 className="text-white/70">{member.designation}</h4>
                      <div className="content relative">
                        <h2 className="text-white font-bold text-[20px]">
                          {member.name}
                        </h2>
                        <div className="flex gap-2 pt-2 socials">
                          <Link
                            href="#"
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)]"
                          >
                            <FaLinkedinIn size={16} className="text-white" />
                          </Link>
                          <Link
                            href="#"
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)]"
                          >
                            <RiTwitterXLine size={16} className="text-white" />
                          </Link>
                          <Link
                            href="#"
                            target="_blank"
                            className="flex items-center justify-center w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)]"
                          >
                            <FaInstagram size={16} className="text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            
          </Swiper>}
        </div>
      </section>
    );
}

export default Team;