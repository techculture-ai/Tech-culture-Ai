"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@mui/material/Button";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import { MdAccessTime, MdExpandMore } from "react-icons/md";
import AIPageHeader from "../../components/AIPageHeader";
import axios from "axios";
import toast from "react-hot-toast";
import { useSite } from "@/context/siteContext";
import { Accordion, AccordionDetails, AccordionSummary, Card, Typography } from "@mui/material";

const ContactUs = () => {
  const { settingsData, setSettingsData } = useSite();
  const [faqs, setFaqs] = useState([]);
  const [faqsLoading, setFaqsLoading] = useState(true);
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
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
    
    // Fetch FAQs
    async function fetchFAQs() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/faqs/public`
        );
        if (res.status === 200) {
          setFaqs(res.data.data);
        }
      } catch (error) {
        console.log("Error fetching FAQs:", error);
      } finally {
        setFaqsLoading(false);
      }
    }
    
    async function fetchServiceLinks() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/services?category=main&limit=99`
        );
        if (res.status === 200) {
          setServices(res.data.services || []);
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch service links");
      }
    }

    fetchData();
    fetchFAQs();
    fetchServiceLinks();
  }, [settingsData, setSettingsData]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${apiBaseUrl}/api/contacts`, formData);
      
      if (response.status === 201) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiPhone size={24} className="text-white" />,
      title: "Call Us",
      details: [settingsData?.contactNo],
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <FiMail size={24} className="text-white" />,
      title: "Email Us",
      details: [settingsData?.email],
      description: "We reply within 24 hours",
    }
  ];

 

  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader
        title="Connect with Our Experts"
        subtitle="Let's Build Something Intelligent Together"
        description="Ready to transform your business with cutting-edge AI solutions? Our team of experts is here to help you succeed."
        aiWords={["AI", "Intelligent", "cutting-edge"]}
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-[#000319]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-8 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h4 className="text-[24px] font-bold text-white mb-4">
                  {info.title}
                </h4>
                <div className="space-y-2 mb-3">
                  {info.details.map((detail, idx) => (
                    <a href={detail.startsWith('http') ? detail : detail.startsWith('mailto:') ? detail : detail.startsWith('tel:') ? detail : detail.includes('@') ? `mailto:${detail}` : `tel:${detail}`}
                      key={idx}
                      className="text-white/80 text-[18px] font-medium"
                    >
                      {detail}
                    </a>
                  ))}
                </div>
                <p className="text-white/60 text-[14px]">{info.description}</p>
              </div>
            ))}
            {settingsData && (
              <div
                className="text-center p-8 bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] hover:scale-105 transition-all group"
                data-aos="zoom-in"
                data-aos-delay={3 * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <FiMapPin size={24} className="text-white" />
                </div>
                <h4 className="text-[24px] font-bold text-white mb-4">
                  Visit Us
                </h4>
                <div className="space-y-2 mb-3">
                  <p className="text-white/80 text-[18px] ">
                    <span className="font-bold">Head Office:</span>{" "}
                    {settingsData?.registeredAddress}
                  </p>
                  <p className="text-white/80 text-[18px] ">
                    <span className="font-bold">Corporate Office:</span>{" "}
                    {settingsData?.officeAddress}   
                  </p>
                </div>
                <p className="text-white/60 text-[14px]">
                  Open Mon-Fri 9AM-6PM
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 imageBg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div
              className="bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] p-8"
              data-aos="fade-right"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <BsChat size={28} className="text-primary" />
                  <h3 className="text-[32px] font-bold text-white">
                    Send us a Message
                  </h3>
                </div>
                <p className="text-white/70 text-[16px]">
                  Fill out the form below and our AI experts will get back to
                  you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 bg-[#000319] border border-[rgba(255,255,255,0.2)] rounded-lg px-4 text-white placeholder-white/50 focus:border-primary focus:outline-none transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 bg-[#000319] border border-[rgba(255,255,255,0.2)] rounded-lg px-4 text-white placeholder-white/50 focus:border-primary focus:outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 bg-[#000319] border border-[rgba(255,255,255,0.2)] rounded-lg px-4 text-white placeholder-white/50 focus:border-primary focus:outline-none transition-all"
                      placeholder="+91 123 456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-12 bg-[#000319] border border-[rgba(255,255,255,0.2)] rounded-lg px-4 text-white placeholder-white/50 focus:border-primary focus:outline-none transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Service Interest *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 bg-[#000319] border border-[rgba(255,255,255,0.2)] rounded-lg px-4 text-white focus:border-primary focus:outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option
                        key={index}
                        value={service.title}
                        className="bg-[#000319]"
                      >
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Message 
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    
                    rows={5}
                    className="w-full bg-[#000319] border border-[rgba(255,255,255,0.2)] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-8 !py-4 !capitalize !font-bold !text-[16px] w-full lg:w-auto"
                  size="large"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <IoSend size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-8" data-aos="fade-left">
              <div className="bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] p-8">
                <h4 className="text-[24px] font-bold text-white mb-6">
                  Why Choose TechCulture AI?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-[12px] font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">
                        Expert AI Consultation
                      </h5>
                      <p className="text-white/70 text-[14px]">
                        Free 30-minute strategy session with our AI specialists
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-[12px] font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">24/7 Support</h5>
                      <p className="text-white/70 text-[14px]">
                        Round-the-clock technical support for all our solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-[12px] font-bold">
                        ✓
                      </span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">
                        Proven Track Record
                      </h5>
                      <p className="text-white/70 text-[14px]">
                        200+ successful AI implementations across industries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e293b80] rounded-lg border border-[rgba(255,255,255,0.1)] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MdAccessTime size={24} className="text-primary" />
                  <h4 className="text-[20px] font-bold text-white">
                    Response Time
                  </h4>
                </div>
                <p className="text-white/80 text-[16px] mb-4">
                  We typically respond to all inquiries within 24 hours. For
                  urgent matters, call us directly for immediate assistance.
                </p>
                {/* <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-[14px] font-medium">
                    Our team is online
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#000319]">
        <div className="container">
          <div className="text-center mb-16">
            
            <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
              Frequently <span className="text-gred">Asked Questions</span>
            </h2>
            <p className="text-gray-300 text-[20px] text-center">
              Get answers to common questions about our AI solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqsLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <Accordion
                  key={faq._id || index}
                  className="!bg-[#000319] !border !border-[rgba(255,255,255,0.2)] !rounded-md"
                >
                  <AccordionSummary
                    className="!bg-[#000319] !border !border-[rgba(255,255,255,0.2)]"
                    expandIcon={<MdExpandMore className="text-white" />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography
                      component="span"
                      className="text-white font-medium"
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="!bg-[#000319] !border !border-[rgba(255,255,255,0.2)]">
                    <Typography
                      component="span"
                      className="text-white/90 leading-relaxed"
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              // Fallback to static FAQs if no dynamic data is available
              [
                {
                  question: "How quickly can AI solutions be implemented?",
                  answer:
                    "Implementation timelines vary based on project complexity, but typically range from 2-8 weeks for standard solutions and 3-6 months for custom enterprise implementations.",
                },
                {
                  question:
                    "What kind of ROI can I expect from AI implementation?",
                  answer:
                    "Our clients typically see 25-40% improvement in operational efficiency and 15-30% cost reduction within the first year of implementation.",
                },
                {
                  question:
                    "Do you provide ongoing support after implementation?",
                  answer:
                    "Yes, we offer comprehensive 24/7 support, regular updates, and continuous optimization to ensure your AI solutions perform at their best.",
                },
                {
                  question:
                    "Can your solutions integrate with existing systems?",
                  answer:
                    "Absolutely! Our AI solutions are designed to seamlessly integrate with your existing tech stack and business processes.",
                },
              ].map((faq, index) => (
                <Accordion
                  key={index}
                  className="!bg-[#000319] !border !border-[rgba(255,255,255,0.2)] !rounded-md"
                >
                  <AccordionSummary
                    className="!bg-[#000319] !border !border-[rgba(255,255,255,0.2)]"
                    expandIcon={<MdExpandMore className="text-white" />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography component="span" className="text-white">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="!bg-[#000319] !border !border-[rgba(255,255,255,0.2)]">
                    <Typography component="span" className="text-white">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="pb-10 px-6 space-y-6">
        <div className="max-w-7xl mx-auto " data-aos="fade-left">
          <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
            Head <span className="text-gred">office</span>
          </h2>

          <Card className="glass-card p-0 overflow-hidden">
            <div className="relative h-96">
              {settingsData ? (
                <div
                  className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
                  dangerouslySetInnerHTML={{
                    __html: settingsData.registeredIframe,
                  }}
                />
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.056200150182!2d77.2225690760672!3d28.628077684281838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd33b95c2ef1%3A0xfe68a915348015f8!2sRohit%20House%2C%202%2C%20Tolstoy%20Rd%2C%20Barakhamba%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1754302489577!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          </Card>
        </div>
        <div className="max-w-7xl mx-auto" data-aos="fade-left">
          
          <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
            Corporate <span className="text-gred">office</span>
          </h2>

          <Card className="glass-card p-0 overflow-hidden">
            <div className="relative h-96">
              {settingsData ? (
                <div
                  className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
                  dangerouslySetInnerHTML={{
                    __html: settingsData.officeIframe,
                  }}
                />
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.336032841482!2d77.35435776491295!3d28.627244195359893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54f9814a4c1%3A0x729f42021b824a36!2sCorenthum%20Building%2C%2034%2F2%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1756187696071!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          </Card>
        </div>
      </section> */}
    </>
  );
};

export default ContactUs;