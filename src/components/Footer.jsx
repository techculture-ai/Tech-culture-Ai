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

const Footer = () => {
  const [email, setEmail] = React.useState("");
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
      fetchData();
    }, [settingsData, setSettingsData]);

    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact-us" },
    ];

    const serviceLinks = [
      { name: "Web Development", href: "/services" },
      { name: "Mobile App Development", href: "/services" },
      { name: "Cloud Solutions", href: "/services" },
      { name: "Digital Marketing", href: "/services" },
      { name: "UI/UX Design", href: "/services" },
    ];

    const companyLinks = [
        { name: "FAQs", href: "/contact-us" },
        {name : "Contact Us", href: "/contact-us"},
        { name: "Team", href: "/team" },
        {name : "Client Stories", href: "/client-stories"},
    ];

    const socialLinks = [
        { name: "LinkedIn", icon: LiaLinkedinIn, href: "#", color: "hover:text-blue-400" },
        { name: "Twitter", icon: RiTwitterXLine, href: "#", color: "hover:text-sky-400" },
        { name: "GitHub", icon: LuGithub, href: "#", color: "hover:text-gray-300" },
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
        <section className="imageBg h-auto py-10  bg-cover bg-center flex items-center">
          <div className="container flex items-center justify-between">
            <div className="info flex flex-col gap-3">
              <h2 className="text-white txt-shadow text-[40px] font-bold">
                Ready To Power Up Your <br />
                Savings And Reliability?
              </h2>

              <form className="relative subscribeForm lg:w-[550px]" onSubmit={handleSubscribe}>
                <input
                  type="text"
                  onChange={handleEmailChange}
                  value={email}
                  className="w-full h-[65px] bg-white rounded-lg p-3 px-5 outline-none"
                  placeholder="Your Email Address"
                />
                <Button
                type="submit"
                  className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-2 !capitalize !font-bold !absolute top-[5px] 
                         right-[5px] !h-[55px]"
                  size="large"
                >
                  Subscribe{" "}
                  <IoMdArrowForward
                    className="text-white -rotate-[30deg]"
                    size={25}
                  />
                </Button>
              </form>
            </div>

            <div className="flex items-center gap-3 infoBox">
              <div className="box bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-5 flex items-center gap-3">
                <div className="bg-white flex items-center justify-center rounded-full w-14 h-14">
                  <FiPhoneCall size={30} className="text-primary" />
                </div>

                <div className="info flex flex-col">
                  <span className="text-white text-[16px]">Call Us 24/7</span>
                  <span className="text-white text-[22px] font-bold">
                    {settingsData?.contactNo}
                  </span>
                </div>
              </div>

              <div className="box bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-5 flex items-center gap-3">
                <div>
                  <div className="bg-white flex items-center justify-center rounded-full w-14 h-14">
                    <GoMail size={30} className="text-primary" />
                  </div>
                </div>

                <div className="info flex flex-col">
                  <span className="text-white text-[16px]">
                    Mail Us Anytime
                  </span>
                  <span className="text-white text-[22px] font-bold">
                    {settingsData?.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative text-white">
          {/* Background Pattern */}

          <div className="container relative z-10">
            {/* Main Footer Content */}
            <div className="px-6 py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                      TechCultureAi
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mt-2"></div>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Revolutionizing productivity with intelligent scheduling
                    solutions. Our AI-driven platform helps businesses optimize
                    their time and resources.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                      <MdOutlineMail size={18} className="text-orange-500" />
                      <span>{settingsData?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                      <MdOutlinePhone size={18} className="text-orange-500" />
                      <span>{settingsData?.contactNo}</span>
                    </div>
                    <div className="flex  items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                      <LuMapPin size={35} className="text-orange-500" />
                      <div className="flex flex-col">
                        <span>{settingsData?.registeredAddress},</span>
                        <span>{settingsData?.officeAddress}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-white">
                    Navigation
                  </h3>
                  <ul className="space-y-3">
                    {navigationLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-white">
                    Services
                  </h3>
                  <ul className="space-y-3">
                    {serviceLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-lg font-semibold mb-6 text-white">
                    Resources
                  </h3>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center gap-2 group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
              <div className=" mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <p className="text-gray-400">
                      © {currentYear} TechCultureAi. All rights reserved.
                      Powered by artificial intelligence.
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="text-gray-400 text-sm">Follow us:</span>
                    <div className="flex items-center gap-4">
                      {/* {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.href}
                            className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                            aria-label={social.name}
                          >
                            <IconComponent size={20} />
                          </a>
                        );
                      })} */}
                      <a
                        href={settingsData?.facebook || "#"}
                        className={`text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110`}
                      >
                        <FaFacebookF size={20} />
                      </a>
                      <a
                        href={settingsData?.instagram || "#"}
                        className={`text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110`}
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a
                        href={settingsData?.twitter || "#"}
                        className={`text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110`}
                      >
                        <RiTwitterXLine size={20} />
                      </a>
                      <a
                        href={settingsData?.linkedin || "#"}
                        className={`text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110`}
                      >
                        <LiaLinkedinIn size={20} />
                      </a>
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