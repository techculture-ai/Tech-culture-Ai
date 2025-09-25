"use client";
import Button from "@mui/material/Button";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useSite } from "@/context/siteContext";
import axios from "axios";
import AIPageHeader from "../../components/AIPageHeader";
import Image from "next/image";

const HomeServices = () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

  // Main services state
  const [mainServices, setMainServices] = useState([]);
  const [mainLoading, setMainLoading] = useState(true);

  // Industry services state
  const [industryServices, setIndustryServices] = useState([]);
  const [industryLoading, setIndustryLoading] = useState(true);

  // Function to fetch all main services at once
  const fetchMainServices = async () => {
    setMainLoading(true);
    try {
      const res = await axios.get(
        `${apiBaseUrl}/api/services?category=main&limit=100` // Get up to 100 services at once
      );

      const services = res.data.services || [];
      setMainServices(services);
    } catch (error) {
      console.log("Error fetching main services:", error);
      setMainServices([]);
    } finally {
      setMainLoading(false);
    }
  };

  // Function to fetch all industry services at once
  const fetchIndustryServices = async () => {
    setIndustryLoading(true);
    try {
      const res = await axios.get(
        `${apiBaseUrl}/api/services?category=industry&limit=100` // Get up to 100 services at once
      );

      const services = res.data.services || [];
      setIndustryServices(services);
    } catch (error) {
      console.log("Error fetching industry services:", error);
      setIndustryServices([]);
    } finally {
      setIndustryLoading(false);
    }
  };

  // Initial load for both service types
  useEffect(() => {
    fetchMainServices();
    fetchIndustryServices();
  }, []);

  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader
        title="Our Services"
        subtitle="Comprehensive AI-Driven Solutions for Modern Business"
        description="Explore our full range of cutting-edge AI services designed to transform your business operations and drive sustainable growth."
        aiWords={["Intelligent", "AI-Driven", "cutting-edge"]}
      />

      <section className="py-20 pb-10 bg-[#000319] serviceSection imageBg">
        <div className="container">
          {/* Main Services Section */}
          <div className="main-services-section mb-16">
            {mainLoading ? (
              // Loading state for main services
              <div className="flex justify-center items-center py-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-b-orange-300 rounded-full animate-spin animation-delay-150"></div>
                  </div>
                  <p className="text-white/80 text-sm font-medium">
                    Loading main services...
                  </p>
                </div>
              </div>
            ) : mainServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 py-4 services">
                {mainServices.map((item, index) => (
                  <Link
                    href={`/services/${item.title
                      .toLowerCase()
                      .trim()
                      .replace(/\s+/g, "-") // spaces to hyphen
                      .replace(/[^\w\-]+/g, "") // remove non-word chars
                      .replace(/\-\-+/g, "-")}`}
                    key={`main-${item._id}`}
                    className="box h-80 sm:h-96 rounded-md overflow-hidden relative group hover:-translate-y-3 transition-all duration-300 animate-fadeInUp"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <Image
                      src={item?.image}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      alt={item?.title || "Service"}
                      loading="lazy"
                      width={400}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="info p-4 sm:p-6 absolute bottom-0 left-0 z-50 w-full">
                      <h2 className="text-white text-lg sm:text-xl lg:text-[25px] font-medium leading-tight">
                        {item?.title}
                      </h2>
                      {item?.description && (
                        // <p className="text-gray-300 text-sm mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        //   {item.description}
                        // </p>
                        <div
                          className="prose-project-description text-gray-300 text-sm mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      )}
                    </div>

                    {/* Loading shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                ))}
              </div>
            ) : (
              // Empty state for main services
              <div className="flex justify-center items-center py-12">
                <div className="text-center">
                  <p className="text-white font-medium text-lg">
                    No main services available
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Please check back later for updates
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Industry-Specific Services Section */}
          <div className="industry-services-section">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Industry-Specific{" "}
                <span className="text-gred">IT Solutions</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Specialized technology solutions tailored for specific
                industries and business verticals
              </p>
            </div>

            {industryLoading ? (
              // Loading state for industry services
              <div className="flex justify-center items-center py-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-b-orange-300 rounded-full animate-spin animation-delay-150"></div>
                  </div>
                  <p className="text-white/80 text-sm font-medium">
                    Loading industry solutions...
                  </p>
                </div>
              </div>
            ) : industryServices.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 py-4 services">
                {industryServices.map((item, index) => (
                  <Link
                    href={`/services/${item.title
                      .toLowerCase()
                      .trim()
                      .replace(/\s+/g, "-") // spaces to hyphen
                      .replace(/[^\w\-]+/g, "") // remove non-word chars
                      .replace(/\-\-+/g, "-")}`}
                    key={`industry-${item._id}`}
                    className="box h-80 sm:h-96 rounded-md overflow-hidden relative group hover:-translate-y-3 transition-all duration-300 animate-fadeInUp"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <Image
                      src={item?.image}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      alt={item?.title || "Service"}
                      loading="lazy"
                      width={400}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="info p-4 sm:p-6 absolute bottom-0 left-0 z-50 w-full">
                      <h2 className="text-white text-lg sm:text-xl lg:text-[25px] font-medium leading-tight">
                        {item?.title}
                      </h2>
                      {item?.description && (
                        <p className="text-gray-300 text-sm mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Loading shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Link>
                ))}
              </div>
            ) : (
              // Empty state for industry services
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-white font-medium text-lg">
                    No industry solutions available
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Please check back later for updates
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
