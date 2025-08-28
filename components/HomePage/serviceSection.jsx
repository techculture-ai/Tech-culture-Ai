import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "../../hooks/useScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "AI & Data Analytics",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Harness the power of artificial intelligence and advanced analytics to drive intelligent decision-making and unlock new business opportunities.",
    },
    {
      id: 2,
      title: "Cloud Solutions",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Accelerate your digital transformation with scalable, secure, and innovative cloud solutions tailored to your business needs.",
    },
    {
      id: 3,
      title: "IT Consulting",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Strategic IT consulting services that help organizations navigate complex technological challenges and achieve sustainable digital transformation.",
    },
    {
      id: 4,
      title: "Cybersecurity & Compliance",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Comprehensive cybersecurity solutions and compliance frameworks to protect your digital assets and ensure regulatory adherence.",
    },
    {
      id: 5,
      title: "Enterprise Solutions",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Robust enterprise-grade solutions that streamline business operations and enhance organizational efficiency across all departments.",
    },
    {
      id: 6,
      title: "CRM & LMS Development",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Custom CRM and Learning Management Systems designed to improve customer relationships and enhance educational experiences.",
    },
    {
      id: 7,
      title: "Web Development",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Modern, responsive web applications built with cutting-edge technologies to deliver exceptional user experiences and performance.",
    },
    {
      id: 8,
      title: "Mobile App Development",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android platforms.",
    },
    {
      id: 9,
      title: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "User-centered design solutions that create intuitive, beautiful, and accessible digital experiences that users love to interact with.",
    },
    {
      id: 10,
      title: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Comprehensive digital marketing strategies that boost your online presence and drive meaningful engagement with your target audience.",
    },
    {
      id: 11,
      title: "Paid Promotions & Ads",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Strategic paid advertising campaigns across multiple platforms to maximize ROI and accelerate your business growth and reach.",
    },
  ];

  // Show only first 6 services on homepage
  const displayedServices = services.slice(0, 6);

  return (
    <AnimatedSection animation="fadeInUp" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection animation="fadeInLeft" delay="delay-200" className="mb-16">
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-400 tracking-wider uppercase">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-4xl">
            Comprehensive solutions for your digital transformation
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayedServices.map((service, index) => (
            <div
              key={service.id}
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-4"
            >
              {/* Card Container */}
              <div className="relative h-[50vh] rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Default Bottom Blur Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

                {/* Hover Top Blur Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 group-hover:justify-start group-hover:pt-6 transition-all duration-500">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description - only visible on hover */}
                    <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500" />

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="flex justify-center">
          <Link href="/services">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="mr-3">View All Services</span>
              <ChevronDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
