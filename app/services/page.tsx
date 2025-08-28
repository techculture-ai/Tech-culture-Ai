"use client";
import React, { useState } from "react";
import { AnimatedSection } from "../../hooks/useScrollAnimation";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import { 
  Brain, 
  Cloud, 
  Users, 
  Shield, 
  Building, 
  Database, 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Target,
  ChevronRight,
  Check
} from "lucide-react";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(1);

  const services = [
    {
      id: 1,
      title: "AI & Data Analytics",
      icon: Brain,
      shortDesc: "Intelligent decision-making through AI",
      fullDesc: "Harness the power of artificial intelligence and advanced analytics to drive intelligent decision-making and unlock new business opportunities. Our AI solutions include machine learning, predictive analytics, and automated insights that transform raw data into actionable business intelligence.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Machine Learning Models", "Predictive Analytics", "Data Mining & Processing", "Business Intelligence", "Natural Language Processing", "Computer Vision"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "Cloud Solutions",
      icon: Cloud,
      shortDesc: "Scalable and secure cloud infrastructure",
      fullDesc: "Accelerate your digital transformation with scalable, secure, and innovative cloud solutions tailored to your business needs. We provide comprehensive AWS, Azure, and Google Cloud implementations with migration and optimization services.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["AWS Solutions", "Azure Integration", "Google Cloud Platform", "Cloud Migration", "DevOps & CI/CD", "Serverless Architecture"],
      color: "from-sky-500 to-blue-500",
      bgColor: "bg-sky-500"
    },
    {
      id: 3,
      title: "IT Consulting",
      icon: Users,
      shortDesc: "Strategic technology consulting",
      fullDesc: "Strategic IT consulting services that help organizations navigate complex technological challenges and achieve sustainable digital transformation with expert guidance and industry best practices.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Technology Strategy", "Digital Transformation", "System Architecture", "Process Optimization", "IT Governance", "Change Management"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500"
    },
    {
      id: 4,
      title: "Cybersecurity & Compliance",
      icon: Shield,
      shortDesc: "Comprehensive security solutions",
      fullDesc: "Comprehensive cybersecurity solutions and compliance frameworks to protect your digital assets and ensure regulatory adherence across all business operations with advanced threat detection and prevention.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Security Audits", "Compliance Management", "Threat Detection", "Risk Assessment", "Penetration Testing", "Security Training"],
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-500"
    },
    {
      id: 5,
      title: "Enterprise Solutions",
      icon: Building,
      shortDesc: "Large-scale business solutions",
      fullDesc: "Robust enterprise-grade solutions that streamline business operations and enhance organizational efficiency across all departments and business units with scalable architecture.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["ERP Systems", "Business Process Management", "Integration Solutions", "Workflow Automation", "Document Management", "Reporting & Analytics"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500"
    },
    {
      id: 6,
      title: "CRM & LMS Development",
      icon: Database,
      shortDesc: "Customer and learning management systems",
      fullDesc: "Custom CRM and Learning Management Systems designed to improve customer relationships and enhance educational experiences with seamless user interfaces and powerful backend systems.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Custom CRM Development", "Learning Management Systems", "User Management", "Analytics Dashboard", "Course Management", "Customer Journey Mapping"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500"
    },
    {
      id: 7,
      title: "Web Development",
      icon: Code,
      shortDesc: "Modern web applications",
      fullDesc: "Modern, responsive web applications built with cutting-edge technologies to deliver exceptional user experiences and optimal performance across all devices and platforms.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["React/Next.js Development", "Node.js Backend", "Responsive Design", "Performance Optimization", "SEO Implementation", "Progressive Web Apps"],
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500"
    },
    {
      id: 8,
      title: "Mobile App Development",
      icon: Smartphone,
      shortDesc: "Cross-platform mobile solutions",
      fullDesc: "Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android platforms with exceptional performance and user experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["React Native", "Flutter Development", "iOS Native Development", "Android Native Development", "App Store Optimization", "Push Notifications"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500"
    },
    {
      id: 9,
      title: "UI/UX Design",
      icon: Palette,
      shortDesc: "User-centered design solutions",
      fullDesc: "User-centered design solutions that create intuitive, beautiful, and accessible digital experiences that users love to interact with and remember, focusing on usability and aesthetic appeal.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems", "Usability Testing", "Accessibility Design"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500"
    },
    {
      id: 10,
      title: "Digital Marketing",
      icon: TrendingUp,
      shortDesc: "Comprehensive digital marketing strategies",
      fullDesc: "Comprehensive digital marketing strategies that boost your online presence and drive meaningful engagement with your target audience across all digital channels and platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["SEO Optimization", "Content Marketing", "Social Media Management", "Email Campaigns", "Analytics & Reporting", "Brand Strategy"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500"
    },
    {
      id: 11,
      title: "Paid Promotions & Ads",
      icon: Target,
      shortDesc: "Strategic advertising campaigns",
      fullDesc: "Strategic paid advertising campaigns across multiple platforms to maximize ROI and accelerate your business growth, reach, and customer acquisition with data-driven optimization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Google Ads Management", "Social Media Advertising", "PPC Campaigns", "Performance Tracking", "Conversion Optimization", "A/B Testing"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500"
    },
  ];

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 mb-6 shadow-lg">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-orange-200 tracking-wider uppercase">Our Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-300">
                Services
              </span>
              <br />
              We Offer
            </h1>
            
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive sustainable growth
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-4 pb-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                    selectedService === service.id
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Image */}
            <AnimatedSection animation="fadeInLeft" className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <img
                  src={selectedServiceData?.image}
                  alt={selectedServiceData?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-6 left-6 w-12 h-12 ${selectedServiceData?.bgColor} rounded-xl flex items-center justify-center`}>
                  {selectedServiceData?.icon && <selectedServiceData.icon className="text-white" size={24} />}
                </div>
              </div>
            </AnimatedSection>

            {/* Service Content */}
            <AnimatedSection animation="fadeInRight" className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {selectedServiceData?.title}
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {selectedServiceData?.fullDesc}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-orange-300">Key Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedServiceData?.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
                <ChevronRight size={20} />
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Our Services
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore our complete range of technology solutions designed to meet your business needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <AnimatedSection 
                  key={service.id} 
                  animation="fadeInUp" 
                  delay={`delay-${(index % 4) * 100 + 200}`}
                >
                  <div 
                    className={`group relative bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      selectedService === service.id ? 'ring-2 ring-orange-400/50' : ''
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    {/* Service Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features Preview */}
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-orange-300">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fadeInUp">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 border border-orange-400/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive technology services can help you achieve your business goals and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Project
                </button>
                <button className="px-8 py-4 border-2 border-gray-600 hover:border-orange-400 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-orange-400/10">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
