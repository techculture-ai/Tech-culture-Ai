"use client";
import React, { useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiTwitterXLine } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import { MdArrowRightAlt } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import Button from '@mui/material/Button'
import { useSite } from "@/context/siteContext";
import axios from "axios";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [serviceLinks, setServiceLinks] = React.useState([]);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
    const { settingsData, setSettingsData } = useSite();
    useEffect(() => {
      async function fetchData() {
        if (!settingsData) {
          try {
            const res = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
            );
            if (res.status === 200) {
              setSettingsData(res.data.data);
              console.log("im data ", res.data);
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      async function fetchServiceLinks() {
        try{
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/services?category=main&showOnHomePage=true&limit=5`
          );
          if (res.status === 200) {
            setServiceLinks(res.data.services || []);
          }
        }
        catch(error){
          console.log(error);
          toast.error("Failed to fetch service links");
        }
      }

      fetchServiceLinks();
      fetchData();
    }, [settingsData, setSettingsData]);

    const currentYear = new Date().getFullYear();

    const navigationLinks = [
      { name: "Home", href: "/" },
      { name: "Who We Are", href: "/about-us" },
      { name: "What We Do", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Technologies", href: "/technologies" },
    ];

    // const serviceLinks = [
    //   { name: "Web Development", href: "/services" },
    //   { name: "Mobile App Development", href: "/services" },
    //   { name: "Cloud Solutions", href: "/services" },
    //   { name: "Digital Marketing", href: "/services" },
    //   { name: "UI/UX Design", href: "/services" },
    // ];

    const companyLinks = [
      { name: "FAQs", href: "/contact-us" },
      { name: "Contact Us", href: "/contact-us" },
      { name: "Our Experts", href: "/team" },
      { name: "Client Stories", href: "/client-stories" },
    ];

  
    const handleSubscribe = async (e) => {
      e.preventDefault();
      try{
        if(!email){
          toast.error("Please enter a valid email address.");
          return;
        }
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/subscriber`,
          { email },
          {
            validateStatus: (status) => true, // accept all status codes as "valid"
          }
        );
        console.log(res);
        if(res.status === 201){
          toast.success("Subscribed successfully!");
          setEmail("");
        } else {
          toast.error(
            res.data.message || "Subscription failed. Please try again."
          );
        }
      }
      catch(error){
        toast.error("Subscription failed. Please try again.");
      } 
    };

    return (
      <>
        <section className="imageBg h-auto py-10 bg-cover bg-center flex items-center">
          <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="info flex flex-col gap-3 w-full lg:w-auto">
              <h2 className="text-white txt-shadow text-[28px] sm:text-[32px] lg:text-[40px] font-bold leading-tight">
                Ready to Redefine Success with{" "}
                <br className="hidden sm:block" />
                Technology That Works?
              </h2>

              <form
                className="relative subscribeForm w-full lg:w-[550px]"
                onSubmit={handleSubscribe}
              >
                <input
                  type="text"
                  onChange={handleEmailChange}
                  value={email}
                  className="w-full h-[55px] sm:h-[65px] bg-white rounded-lg p-3 px-5 outline-none"
                  placeholder="Your Email Address"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-4 sm:!px-6 !py-2 !capitalize !font-bold !absolute top-[5px] 
                         right-[5px] !h-[45px] sm:!h-[55px] !text-sm sm:!text-base"
                  size="large"
                >
                  <span className="hidden sm:inline">Subscribe</span>
                  <span className="sm:hidden">Go</span>
                  <IoMdArrowForward
                    className="text-white -rotate-[30deg] ml-1"
                    size={20}
                  />
                </Button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 infoBox w-full lg:w-auto">
              <div className="box bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-4 sm:!px-6 !py-4 sm:!py-5 flex items-center gap-3 w-full sm:w-auto">
                <div className="bg-white flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                  <FiPhoneCall
                    size={24}
                    className="text-primary sm:size-[30px]"
                  />
                </div>

                <div className="info flex flex-col min-w-0">
                  <span className="text-white text-[14px] sm:text-[16px]">
                    Call Us 24/7
                  </span>
                  <a href={`tel:${settingsData?.contactNo}`} className="text-white text-[18px] sm:text-[22px] font-bold truncate">
                    {settingsData?.contactNo}
                  </a>
                </div>
              </div>

              <div className="box bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-4 sm:!px-6 !py-4 sm:!py-5 flex items-center gap-3 w-full sm:w-auto">
                <div>
                  <div className="bg-white flex items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                    <GoMail size={24} className="text-primary sm:size-[30px]" />
                  </div>
                </div>

                <div className="info flex flex-col min-w-0">
                  <span className="text-white text-[14px] sm:text-[16px]">
                    Mail Us Anytime
                  </span>
                  <a href={`mailto:${settingsData?.email}`} className="text-white text-[18px] sm:text-[22px] font-bold truncate">
                    {settingsData?.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative text-white">
          {/* Background Pattern */}

          <div className="container relative z-10">
            {/* Main Footer Content */}
            <div className="px-4 sm:px-6 py-12 sm:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Company Info */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      TechCultureAi
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2"></div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base text-justify md:text-start">
                    Our platform leverages machine learning to analyze usage
                    trends, minimize inefficiencies, and promote smarter, more
                    sustainable operations.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                      <MdOutlineMail
                        size={18}
                        className="text-orange-500 flex-shrink-0"
                      />
                      <a href={`mailto:${settingsData?.email}`} className="text-sm sm:text-base break-all">
                        {settingsData?.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                      <MdOutlinePhone
                        size={18}
                        className="text-orange-500 flex-shrink-0"
                      />
                      <a href={`tel:${settingsData?.contactNo}`} className="text-sm sm:text-base">
                        {settingsData?.contactNo}
                      </a>
                    </div>
                    {/* <div className="flex items-start gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                      <LuMapPin size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                      <div className="flex flex-col text-sm sm:text-base">
                        <span>{settingsData?.registeredAddress},</span>
                        <span>{settingsData?.officeAddress}</span>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Navigation Links */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
                    Navigation
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {navigationLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
                    Services
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {serviceLinks && serviceLinks.map((link) => (
                      <li key={link.slug}>
                        <Link
                          href={`/services/${link.slug}`}
                          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">
                    Resources
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
              <div className="mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                  <div className="text-center md:text-center">
                    <p className="text-gray-400 text-sm sm:text-base">
                      &copy; {currentYear} TechCulture Solutions Pvt. Ltd. All
                      rights reserved.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <span className="text-gray-400 text-sm">Follow us:</span>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Link
                        href={settingsData?.facebook || "#"}
                        className={`text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110`}
                        aria-label="Facebook"
                      >
                        <FaFacebookF size={18} className="sm:size-[20px]" />
                      </Link>
                      <Link
                        href={settingsData?.instagram || "#"}
                        className={`text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110`}
                        aria-label="Instagram"
                      >
                        <FaInstagram size={18} className="sm:size-[20px]" />
                      </Link>
                      <Link
                        href={settingsData?.twitter || "#"}
                        className={`text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110`}
                        aria-label="Twitter"
                      >
                        <RiTwitterXLine size={18} className="sm:size-[20px]" />
                      </Link>
                      <Link
                        href={settingsData?.linkedin || "#"}
                        className={`text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110`}
                        aria-label="LinkedIn"
                      >
                        <LiaLinkedinIn size={18} className="sm:size-[20px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;