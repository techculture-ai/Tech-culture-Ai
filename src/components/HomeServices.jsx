"use client"
import Button from '@mui/material/Button'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
// import { servicesData } from '../app/data';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useSite } from '@/context/siteContext';
import axios from 'axios';

const HomeServices = () => {
    const { setServiceid } = useSite();
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const [mainServices, setMainServices] = useState([]);
    const servicesSectionRef = useRef(null);

    useEffect(() => {
      const fetchMainServices = async () => {
        try {
          // Fetch only main category services that are set to show on homepage with limit of 8
          const res = await axios.get(`${apiBaseUrl}/api/services?category=main&showOnHomePage=true&limit=8`);
          setMainServices(res.data.services || []);
        } catch (error) {
          console.log("Error fetching main services:", error);
        }
      };

      fetchMainServices();
    }, [apiBaseUrl]);

    const [expendNum, setexpendNum] = useState(3);
    const [isExpend, setisExpend] = useState(false);

    useEffect(() => {
        isExpend === false ? setexpendNum(3) : setexpendNum(7) // Show max 8 services (index 0-7)
    }, [isExpend])

    const handleToggleExpand = () => {
        const newExpandState = !isExpend;
        setisExpend(newExpandState);
        
        // If collapsing (showing less), scroll to services section
        if (!newExpandState && servicesSectionRef.current) {
            setTimeout(() => {
                const element = servicesSectionRef.current;
                const headerHeight = 80; // Header height is 80px (h-20 = 5rem = 80px)
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerHeight - 20; // Extra 20px padding
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100); // Small delay to allow state update
        }
    };

    return (
      <section 
        ref={servicesSectionRef}
        className="py-0 pb-10 bg-[#000319] serviceSection imageBg" 
      >
        <div className="container">
          <h2 className="mainHd text-[50px] font-bold text-white leading-[60px] text-center" >
            Comprehensive <span className="text-gred">Solutions</span>
          </h2>
          <p className="text-white font-light text-[20px] py-3 text-center">
            Transform your business with advanced technologies
          </p>
          <br />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-4 services">
            {mainServices &&
              mainServices?.length !== 0 &&
              mainServices?.map((item, index) => {
                if (index <= expendNum) {
                  return (
                    <Link
                      href={`/services/${item.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => {
                        setServiceid(item._id);
                      }}
                      key={`main-home-${item._id}-${index}`}
                      className="box h-96 rounded-md overflow-hidden relative group hover:-translate-y-3 transition-all"
                    >
                      <img
                        src={item?.image}
                        className="full transition-all h-full object-cover"
                        alt={item?.title || "Service"}
                      />
                      <div className="info p-6 absolute top-0 left-0 z-50 w-full h-full ">
                        <div className="flex justify-between items-center !absolute bottom-5 pr-5 w-[96%]">
                          <h2 className="text-gray-100 text-[25px] font-light px-5 leading-8">
                            {item?.title}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
          </div>

          <div className="lg:flex items-center justify-center mt-10 hidden">
            {mainServices.length > 4 && (
              <Button
                className="!bg-white !text-gray-800 !font-bold !capitalize items-center"
                size="large"
                onClick={handleToggleExpand}
              >
                {isExpend ? "Show Less" : "View More"}
                {isExpend === false ? (
                  <IoIosArrowRoundDown size={30} />
                ) : (
                  <IoIosArrowRoundUp size={30} />
                )}
              </Button>
            )}
            <Link href="/services" className="ml-4">
              <Button
                className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white  !capitalize !font-bold "
                size="large"
              >
                View All Services
                <IoIosArrowRoundForward size={30} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
}

export default HomeServices
