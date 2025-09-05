"use client";
import Button from "@mui/material/Button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { servicesData } from "../data";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useSite } from "@/context/siteContext";
import axios from "axios";
import AIPageHeader from "../../components/AIPageHeader";

const HomeServices = () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const { serviceData, setServiceData } = useSite();

  useEffect(() => {
    const fetchServiceData = async () => {
      if (!serviceData) {
        try {
          const res = await axios.get(`${apiBaseUrl}/api/services`);
          setServiceData(res.data.services);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchServiceData();
  }, [serviceData, setServiceData]);



  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader 
        title="Our Intelligent Services"
        subtitle="Comprehensive AI-Driven Solutions for Modern Business"
        description="Explore our full range of cutting-edge AI services designed to transform your business operations and drive sustainable growth."
        aiWords={["Intelligent", "AI-Driven", "cutting-edge"]}
      />

      <section className="py-20 pb-10 bg-[#000319] serviceSection imageBg">
      <div className="container">
        {/* <h2 className="mainHd text-[50px] font-bold text-white leading-[60px] text-center">
          Comprehensive <span className="text-gred">Solutions</span>
        </h2>
        <p className="text-white font-light text-[20px] py-3 text-center">
          Transform your business with advanced technologies
        </p>
        <br /> */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-4 services">
          {serviceData && serviceData?.length !== 0 &&
            serviceData?.map((item, index) => {
              
                return (
                  <Link
                    href={"#"}
                    key={index}
                    className="box h-96 rounded-md overflow-hidden relative group hover:-translate-y-3 transition-all"
                  >
                    <img
                      src={item?.image}
                      className="full transition-all h-full object-cover"
                      alt="image"
                    />
                    <div className="info p-6 absolute top-0 left-0 z-50 w-full h-full ">
                      <div className="flex justify-between items-center !absolute top-5 pr-5 w-[96%]">
                        <h2 className="text-gray-100 text-[25px] font-light px-5 leading-8">
                          {item?.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                );
              
            })}
        </div>

        
      </div>
    </section>
    </>
  );
};

export default HomeServices;
