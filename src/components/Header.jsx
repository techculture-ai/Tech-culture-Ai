"use client"
import { useSite } from '@/context/siteContext';
import Button from '@mui/material/Button'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-hot-toast';
import { ImWhatsapp } from "react-icons/im";

const Header = () => {
  const contact = 7428238091;
  const sendToWhatsApp = () => {
    const encodedMessage = encodeURIComponent("Hii");
    const whatsappURL = `https://wa.me/${contact}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
    const pathname = usePathname();
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
     const [enquiryForm, setEnquiryFrom] = useState({
       name: "",
       email: "",
       phone: "",
       message: "",
     });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Prevent background scrolling when enquiry popup is open
    useEffect(() => {
        if (showEnquiryPopup) {
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scrolling
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showEnquiryPopup]);

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

    const handleInputChange = (e) => {
          setEnquiryFrom({
            ...enquiryForm,
            [e.target.name]: e.target.value,
          });
        }

    const handleSubmit = async (e) => {
          e.preventDefault();
          
          // Basic validation
          if (!enquiryForm.name.trim()) {
            toast.error("Please enter your name");
            return;
          }
          
          if (!enquiryForm.email.trim()) {
            toast.error("Please enter your email");
            return;
          }
          
          if (!enquiryForm.phone.trim()) {
            toast.error("Please enter your phone number");
            return;
          }
      
    
          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(enquiryForm.email)) {
            toast.error("Please enter a valid email address");
            return;
          }
    
          // const loadingToast = toast.loading("Submitting your enquiry...");
          
          try {
            const res = await axios.post(`${apiBaseUrl}/api/enquiries`, enquiryForm);
            
            if (res.status === 201) {
              // toast.dismiss(loadingToast);
              toast.success("Enquiry submitted successfully! We'll get back to you soon.");
              setEnquiryFrom({
                name: "",
                email: "",
                phone: "",
                message: "",
              });
              setShowEnquiryPopup(false);
            } else {
              // toast.dismiss(loadingToast);
              toast.error("Failed to submit enquiry. Please try again.");
            }
          } catch (error) {
            // toast.dismiss(loadingToast);
            console.error("Error submitting enquiry form:", error);
            
            if (error.response?.data?.message) {
              toast.error(error.response.data.message);
            } else if (error.response?.status === 400) {
              toast.error("Invalid form data. Please check your information.");
            } else if (error.response?.status === 500) {
              toast.error("Server error. Please try again later.");
            } else {
              toast.error("Failed to submit enquiry. Please check your connection and try again.");
            }
        }
    }
    
    // Function to check if current path matches the nav link
    const isActiveLink = (path) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    // Function to get active link classes
    const getLinkClasses = (path) => {
        const baseClasses = "text-[17px] transition-all duration-300 relative";
        const activeClasses = "text-primary opacity-100 font-semibold";
        const inactiveClasses = "text-white opacity-90 hover:opacity-100 hover:text-primary";
        
        return `${baseClasses} ${isActiveLink(path) ? activeClasses : inactiveClasses}`;
    };

    return (
      <>
        <header
          className={`w-full h-20  flex items-center justify-center fixed top-0 left-0 z-[100] ${
            isScrolled === true && "scroll"
          }`}
        >
          <div className="container flex items-center justify-between">
            <Link href={"/"} className="logo flex items-center gap-2">
              <div className="relative w-[80px] h-[80px]">
                {/* Adjust size as needed */}
                {settingsData && (
                  <Image
                    src={settingsData.logo || "logo.png"}
                    alt="logo"
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            </Link>

            <nav
              className={`flex items-center gap-7 fixed top-0 -right-[100%] lg:static bg-[#040416] lg:bg-transparent flex-col lg:flex-row h-screen lg:h-auto z-[101] opacity-0 lg:opacity-100 ${
                isOpenNav === true && "opacity-100 right-0"
              }`}
            >
              <Link
                href={"/about-us"}
                className={getLinkClasses("/about-us")}
                onClick={() => setIsOpenNav(false)}
              >
                Who We Are
                {isActiveLink("/about-us") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
              <Link
                href={"/services"}
                className={getLinkClasses("/services")}
                onClick={() => setIsOpenNav(false)}
              >
                What We Do
                {isActiveLink("/services") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
              <Link
                href={"/portfolio"}
                className={getLinkClasses("/portfolio")}
                onClick={() => setIsOpenNav(false)}
              >
                Portfolio
                {isActiveLink("/portfolio") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
              <Link
                href={"/technologies"}
                className={getLinkClasses("/technologies")}
                onClick={() => setIsOpenNav(false)}
              >
                Technologies
                {isActiveLink("/technologies") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
              <Link
                href={"/our-workspace"}
                className={getLinkClasses("/our-workspace")}
                onClick={() => setIsOpenNav(false)}
              >
                Our Workspace
                {isActiveLink("/our-workspace") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
              {/* <Link
                href={"/client-stories"}
                className={getLinkClasses("/client-stories")}
                onClick={() => setIsOpenNav(false)}
              >
                Client Stories
                {isActiveLink("/client-stories") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link> */}
              {/* <Link
                href={"/team"}
                className={getLinkClasses("/team")}
                onClick={() => setIsOpenNav(false)}
              >
                Our Experts 
                {isActiveLink("/team") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link> */}
              <Link
                href={"/contact-us"}
                className={getLinkClasses("/contact-us")}
                onClick={() => setIsOpenNav(false)}
              >
                Contact Us
                {isActiveLink("/contact-us") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            </nav>

            <div className="flex items-center gap-3 lg:hidden">
              <Button
                className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-4 !py-2 !capitalize !font-bold !text-sm"
                size="small"
                onClick={() => setShowEnquiryPopup(true)}
              >
                Schedule Demo
              </Button>
              <AiOutlineMenu
                size={30}
                className="text-white"
                onClick={() => setIsOpenNav(true)}
              />
            </div>

            {isOpenNav === true && (
              <div
                className="overlay w-full h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] visible lg:hidden"
                onClick={() => setIsOpenNav(false)}
              ></div>
            )}

            <div className="flex items-center gap-5">
              <ImWhatsapp
                className="text-green-600 text-3xl cursor-pointer"
                onClick={sendToWhatsApp}
              />
              <Button
                className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-2 !capitalize !font-bold !hidden lg:!flex"
                size="large"
                onClick={() => setShowEnquiryPopup(true)}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </header>
        {/* Popup Enquiry Form */}
        {showEnquiryPopup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex items-center justify-center p-4">
            <div className="relative w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl max-h-[80vh]">
              <button
                onClick={() => setShowEnquiryPopup(false)}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <IoClose />
              </button>

              <div className="p-6 max-h-[80vh] overflow-y-auto">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get a Free Consultation
                  </h3>
                  <p className="text-gray-300">
                    Leave your details and we&apos;ll get back to you shortly!
                  </p>
                </div>

                <form className="space-y-4 text-white" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleInputChange}
                      value={enquiryForm.name}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      id="email"
                      name="email"
                      onChange={handleInputChange}
                      value={enquiryForm.email}
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      id="phone"
                      name="phone"
                      onChange={handleInputChange}
                      value={enquiryForm.phone}
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      onChange={handleInputChange}
                      value={enquiryForm.message}
                      placeholder="How can we help you?"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-2 !capitalize !font-bold transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Header