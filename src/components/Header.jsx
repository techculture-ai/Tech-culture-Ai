"use client"
import { useSite } from '@/context/siteContext';
import Button from '@mui/material/Button'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose, IoChevronDown, IoCalendarOutline } from 'react-icons/io5';
import { toast } from 'react-hot-toast';
import { ImWhatsapp } from "react-icons/im";
import ModernDateTimePicker from "./datetimepicker"

const Header = () => {
  const contact = 7428238091;
  const sendToWhatsApp = () => {
    const encodedMessage = encodeURIComponent("Hii");
    const whatsappURL = `https://wa.me/${contact}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
    const pathname = usePathname();
    const router = useRouter();
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenNav, setIsOpenNav] = useState(false);
    const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
    const [headerServices, setHeaderServices] = useState([]);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
    const [navigationSource, setNavigationSource] = useState('direct');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dateTimePickerRef = useRef(null);
    
     const [enquiryForm, setEnquiryFrom] = useState({
       name: "",
       email: "",
       phone: "",
       message: "",
       demoDateTime: "",
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

    // Track navigation source from sessionStorage
    useEffect(() => {
        const storedSource = sessionStorage.getItem('navigationSource');
        if (storedSource) {
            setNavigationSource(storedSource);
        }
    }, [pathname]);

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

    // Close dropdown when clicking outside (desktop only)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (window.innerWidth > 1024 && isServicesDropdownOpen && !event.target.closest('.services-dropdown')) {
                setIsServicesDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isServicesDropdownOpen]);

    // Reset mobile submenu when closing mobile nav
    useEffect(() => {
        if (!isOpenNav) {
            setIsMobileSubmenuOpen(false);
        }
    }, [isOpenNav]);

    // Fetch header services
    useEffect(() => {
        const fetchHeaderServices = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/api/services?showOnHeader=true`);
                if (response.status === 200) {
                    setHeaderServices(response.data.services || []);
                }
            } catch (error) {
                console.error("Error fetching header services:", error);
            }
        };
        
        fetchHeaderServices();
    }, [apiBaseUrl]);

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

    // Get minimum datetime (current time + 1 hour) in Indian timezone
    const getMinDateTime = () => {
        const now = new Date();
        // Convert to Indian Standard Time (IST)
        const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
        const istTime = new Date(now.getTime() + istOffset);
        istTime.setHours(istTime.getHours() + 1); // Add 1 hour buffer
        return istTime.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:mm
    };

    // Handle date time picker focus with scroll
    const handleDateTimePickerFocus = () => {
        setTimeout(() => {
            if (dateTimePickerRef.current) {
                dateTimePickerRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        }, 100);
    };

    const handleSubmit = async (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          
          // Basic validation
          if (!enquiryForm.name.trim()) {
            toast.error("Please enter your name");
            setIsSubmitting(false);
            return;
          }
          
          if (!enquiryForm.email.trim()) {
            toast.error("Please enter your email");
            setIsSubmitting(false);
            return;
          }
          
          if (!enquiryForm.phone.trim()) {
            toast.error("Please enter your phone number");
            setIsSubmitting(false);
            return;
          }
    
          // Email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(enquiryForm.email)) {
            toast.error("Please enter a valid email address");
            setIsSubmitting(false);
            return;
          }

          // Phone validation
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          if (!phoneRegex.test(enquiryForm.phone.replace(/\s+/g, ''))) {
            toast.error("Please enter a valid phone number");
            setIsSubmitting(false);
            return;
          }

          const loadingToast = toast.loading("Submitting your enquiry...");
          
          try {
            // Prepare data for submission
            const submissionData = {
              ...enquiryForm,
              projectName: "General",
              timezone: "Asia/Kolkata" // Default to Indian timezone
            };

            // If datetime is provided, split it into date and time for backend
            if (enquiryForm.demoDateTime) {
                const datetime = new Date(enquiryForm.demoDateTime);
                submissionData.demoDate = datetime.toISOString().split('T')[0];
                submissionData.demoTime = datetime.toTimeString().slice(0, 5);
                // Remove the combined field
                delete submissionData.demoDateTime;
            }

            const res = await axios.post(`${apiBaseUrl}/api/enquiries`, submissionData);
            
            if (res.status === 201) {
              toast.dismiss(loadingToast);
              toast.success(res.data.message || "Enquiry submitted successfully! We'll get back to you soon.");
              setEnquiryFrom({
                name: "",
                email: "",
                phone: "",
                message: "",
                demoDateTime: "",
              });
              setShowEnquiryPopup(false);
            } else {
              toast.dismiss(loadingToast);
              toast.error("Failed to submit enquiry. Please try again.");
            }
          } catch (error) {
            toast.dismiss(loadingToast);
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
          } finally {
            setIsSubmitting(false);
          }
    }
    
    // Helper function to check if current service is in AI-Automation dropdown
    const isAiAutomationService = () => {
        if (!pathname.startsWith('/services/')) return false;
        
        const currentSlug = pathname.replace('/services/', '');
        return headerServices.some(service => service.slug === currentSlug);
    };
    
    // Function to check if current path matches the nav link
    const isActiveLink = (path) => {
        if (path === '/' && pathname === '/') return true;
        
        // Special handling for services
        if (path === '/services') {
            // Active for main services page OR if navigated from services page to an individual service
            return pathname === '/services' || (pathname.startsWith('/services/') && navigationSource === 'services');
        }
        
        // Special handling for AI-Automation
        if (path === '/automation') {
            // Active only if it's an AI service AND user came from automation dropdown
            return isAiAutomationService() && navigationSource === 'automation';
        }
        
        // Default behavior for other paths
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

    // Handle services dropdown toggle for desktop
    const handleServicesClick = (e) => {
        e.preventDefault();
        if (window.innerWidth > 1024) {
            setIsServicesDropdownOpen(!isServicesDropdownOpen);
        } else {
            // Mobile - toggle submenu
            setIsMobileSubmenuOpen(!isMobileSubmenuOpen);
        }
    };

    // Handle mouse events for desktop hover
    const handleMouseEnter = () => {
        // Only enable hover on desktop (screen width > 1024px)
        if (window.innerWidth > 1024) {
            setIsServicesDropdownOpen(true);
        }
    };

    const handleMouseLeave = () => {
        // Only enable hover on desktop (screen width > 1024px)
        if (window.innerWidth > 1024) {
            setIsServicesDropdownOpen(false);
        }
    };

    // Handle navigation with source tracking
    const handleNavigation = (href, source) => {
        sessionStorage.setItem('navigationSource', source);
        setNavigationSource(source);
        router.push(href);
        setIsOpenNav(false);
        setIsServicesDropdownOpen(false);
        setIsMobileSubmenuOpen(false);
    };

    return (
      <>
        <header
          className={`w-full h-20  flex items-center justify-center fixed top-0 left-0 z-[100] ${
            isScrolled === true && "scroll"
          }`}
        >
          <div className="container flex items-center justify-between">
            <Link
              href={"/"}
              className="logo flex items-center gap-2"
              onClick={() => {
                sessionStorage.removeItem("navigationSource");
                setNavigationSource("direct");
              }}
            >
              <div className="relative w-[150px] h-[80px]">
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
              className={`flex items-center gap-7 fixed top-0 -right-[100%] lg:static bg-[#040416] lg:bg-transparent flex-col lg:flex-row h-screen lg:h-auto z-[101] opacity-0 lg:opacity-100 pt-20 lg:pt-0 px-6 lg:px-0 w-80 lg:w-auto ${
                isOpenNav === true && "opacity-100 right-0"
              }`}
            >
              <Link
                href={"/about-us"}
                className={`${getLinkClasses(
                  "/about-us"
                )} w-full lg:w-auto text-left lg:text-center py-3 lg:py-0 border-b border-gray-700 lg:border-none`}
                onClick={() => handleNavigation("/about-us", "direct")}
              >
                Who We Are
                {isActiveLink("/about-us") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full hidden lg:block"></span>
                )}
              </Link>

              <Link
                href={"/services"}
                className={`${getLinkClasses(
                  "/services"
                )} w-full lg:w-auto text-left lg:text-center py-3 lg:py-0 border-b border-gray-700 lg:border-none`}
                onClick={() => handleNavigation("/services", "services")}
              >
                What We Do
                {isActiveLink("/services") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full hidden lg:block"></span>
                )}
              </Link>

              {/* Services Dropdown - Desktop only */}
              <div
                className="services-dropdown relative group hidden lg:block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`${getLinkClasses(
                    "/automation"
                  )} flex items-center gap-1 cursor-pointer`}
                  onClick={handleServicesClick}
                >
                  AI-Automation
                  <IoChevronDown
                    className={`text-sm transition-transform duration-300 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                  {isActiveLink("/automation") && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </div>

                {/* Desktop Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 min-w-[280px] bg-white dark:bg-gray-800 shadow-2xl rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                    isServicesDropdownOpen
                      ? "opacity-100 visible transform translate-y-0"
                      : "opacity-0 invisible transform translate-y-2"
                  }`}
                >
                  <div className="overflow-hidden rounded-lg">
                    {/* Individual Services */}
                    {headerServices.length > 0 ? (
                      headerServices.map((service) => (
                        <button
                          key={service._id}
                          className="block w-full text-left px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white transition-colors duration-200"
                          onClick={() =>
                            handleNavigation(
                              `/services/${service.slug}`,
                              "automation"
                            )
                          }
                        >
                          <div className="font-medium">{service.title}</div>
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-gray-500 dark:text-gray-400 text-sm">
                        No services available
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile AI-Automation Menu */}
              <div className="w-full lg:hidden">
                <div
                  className={`${getLinkClasses(
                    "/automation"
                  )} flex items-center justify-between cursor-pointer w-full py-3 border-b border-gray-700`}
                  onClick={handleServicesClick}
                >
                  <span>AI-Automation</span>
                  <IoChevronDown
                    className={`text-sm transition-transform duration-300 ${
                      isMobileSubmenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Mobile Submenu */}
                {isMobileSubmenuOpen && headerServices.length > 0 && (
                  <div className="ml-4 mt-2 space-y-2">
                    {headerServices.map((service) => (
                      <button
                        key={service._id}
                        className="block w-full text-left text-gray-300 hover:text-primary transition-colors duration-200 py-2 text-[16px] border-b border-gray-800 last:border-none"
                        onClick={() =>
                          handleNavigation(
                            `/services/${service.slug}`,
                            "automation"
                          )
                        }
                      >
                        {service.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={"/portfolio"}
                className={`${getLinkClasses(
                  "/portfolio"
                )} w-full lg:w-auto text-left lg:text-center py-3 lg:py-0 border-b border-gray-700 lg:border-none`}
                onClick={() => handleNavigation("/portfolio", "direct")}
              >
                Portfolio
                {isActiveLink("/portfolio") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full hidden lg:block"></span>
                )}
              </Link>
              <Link
                href={"/technologies"}
                className={`${getLinkClasses(
                  "/technologies"
                )} w-full lg:w-auto text-left lg:text-center py-3 lg:py-0 border-b border-gray-700 lg:border-none`}
                onClick={() => handleNavigation("/technologies", "direct")}
              >
                Technologies
                {isActiveLink("/technologies") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full hidden lg:block"></span>
                )}
              </Link>
              <Link
                href={"/our-workspace"}
                className={`${getLinkClasses(
                  "/our-workspace"
                )} w-full lg:w-auto text-left lg:text-center py-3 lg:py-0 border-b border-gray-700 lg:border-none`}
                onClick={() => handleNavigation("/our-workspace", "direct")}
              >
                Our Workspace
                {isActiveLink("/our-workspace") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full hidden lg:block"></span>
                )}
              </Link>
              <Link
                href={"/contact-us"}
                className={`${getLinkClasses(
                  "/contact-us"
                )} w-full lg:w-auto text-left lg:text-center py-3 lg:py-0`}
                onClick={() => handleNavigation("/contact-us", "direct")}
              >
                Contact Us
                {isActiveLink("/contact-us") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full hidden lg:block"></span>
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

            <div className=" items-center gap-5 hidden lg:flex">
              <ImWhatsapp
                className="text-green-600 text-3xl cursor-pointer hidden lg:block"
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
            <div 
              className="relative w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl max-h-[90vh] flex flex-col"
              style={{ overflow: 'hidden' }}
            >
              <button
                onClick={() => setShowEnquiryPopup(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors z-10"
              >
                <IoClose />
              </button>

              <div 
                className="p-6 flex-1"
                style={{ 
                  overflowY: 'auto',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
                css={`
                  &::-webkit-scrollbar {
                    display: none;
                  }
                `}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Schedule a Demo
                  </h3>
                  <p className="text-gray-300">
                    Book a personalized demo or just leave your details for a
                    consultation
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    * All times are in Indian Standard Time (IST)
                  </p>
                </div>

                <form className="space-y-4 text-white" onSubmit={handleSubmit}>
                  {/* Basic Information */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleInputChange}
                      value={enquiryForm.name}
                      placeholder="Your Name *"
                      required
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
                      placeholder="Email Address *"
                      required
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
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Demo Scheduling Section */}
                  <div className="relative" ref={dateTimePickerRef}>
                    {/* <label className="block text-sm font-medium text-gray-300 mb-2">
                      Schedule Demo (Optional)
                    </label> */}

                    <ModernDateTimePicker
                      value={enquiryForm.demoDateTime}
                      onChange={handleInputChange}
                      minDateTime={getMinDateTime()}
                      onFocus={handleDateTimePickerFocus}
                    />

                    {/* <p className="text-xs text-gray-500 mt-1">
                      Leave empty if you just want to submit an enquiry
                    </p> */}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      onChange={handleInputChange}
                      value={enquiryForm.message}
                      placeholder="Tell us about your requirements or questions..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-3 !capitalize !font-bold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </div>
                    ) : enquiryForm.demoDateTime ? (
                      "Schedule Demo"
                    ) : (
                      "Send Enquiry"
                    )}
                  </Button>

                  {/* Info Text */}
                  <p className="text-xs text-gray-400 text-center mt-2">
                    * Required fields. We'll contact you within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Header