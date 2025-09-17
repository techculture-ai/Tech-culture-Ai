"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IoArrowBack, IoCheckmarkCircle, IoCalendarOutline, IoLayersOutline } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import AIPageHeader from "../../../components/AIPageHeader";
import SocialShare from "../../../components/SocialShare";
import StructuredData from "../../../components/StructuredData";
import { useSite } from "@/context/siteContext";

const ServiceDetails = () => {
  const slug = useParams().serviceId;
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedServices, setRelatedServices] = useState([]);
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!slug) {
      router.push("/services");
      return;
    }
    if (slug) {
      fetchServiceDetails();
      fetchRelatedServices();
    }
  }, [slug]);

  const fetchServiceDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiBaseUrl}/api/services/slug/${slug}`);
      const data = await response.json();
      
      if (data.service) {
        setService(data.service);
      }
    } catch (error) {
      console.error("Error fetching service details:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedServices = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/services?limit=999`);
      const data = await response.json();
      
      if (data.services) {
        const filtered = data.services.filter(s => s._id !== service?._id);
        setRelatedServices(filtered);
      }
    } catch (error) {
      console.error("Error fetching related services:", error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#000319] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-orange-300 rounded-full animate-spin animation-delay-150"></div>
          </div>
          <p className="text-white/80 text-lg font-medium">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-[#000319] flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-600 rounded-full flex items-center justify-center">
            <IoLayersOutline className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-400 mb-6">
            The service you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all"
          >
            <IoArrowBack />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData service={service} />
      
      {/* AI Page Header */}
      <AIPageHeader
        title={service.title}
        subtitle={``}
        description={service.description}
        aiWords={["Advanced", "Professional", "Cutting-edge"]}
      />

      <section className="py-20 bg-[#000319] min-h-screen">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group"
            >
              <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Services</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Service Image */}
              {service.image && (
                <div className="relative h-96 rounded-2xl overflow-hidden mb-8 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm text-orange-300 text-sm font-medium rounded-full border border-orange-500/30">
                        {service.category.charAt(0).toUpperCase() +
                          service.category.slice(1)}
                      </span>
                      <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-sm font-medium rounded-full border border-blue-500/30 flex items-center gap-2">
                        <IoCalendarOutline className="w-4 h-4" />
                        {formatDate(service.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Service Title & Description */}
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight flex-1">
                    {service.title}
                  </h1>
                  <div className="flex-shrink-0">
                    <SocialShare 
                      url={typeof window !== 'undefined' ? window.location.href : `https://techculture.ai/services/${slug}`}
                      title={service.title}
                      description={service.description}
                      hashtags="TechCultureAI,AI,TechnologyServices,DigitalTransformation"
                    />
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features Section */}
              {service.features && service.features.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <IoCheckmarkCircle className="w-8 h-8 text-green-400" />
                    Key Features & Benefits
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group"
                      >
                        <IoCheckmarkCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-300 mb-6">
                  Transform your business with our {service.title.toLowerCase()}{" "}
                  solution. Contact our experts to discuss your specific
                  requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105"
                  >
                    Get Quote
                    <HiOutlineExternalLink className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 border border-orange-500 text-orange-400 px-8 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Service Info Card */}
              {/* <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 mb-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6">Service Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Category</span>
                    <span className="text-white font-medium capitalize">{service.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Features</span>
                    <span className="text-white font-medium">{service.features?.length || 0}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                    <span className="text-gray-400">Added</span>
                    <span className="text-white font-medium">{formatDate(service.createdAt)}</span>
                  </div>
                  {service.order !== undefined && (
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-400">Priority</span>
                      <span className="text-white font-medium">#{service.order}</span>
                    </div>
                  )}
                </div>
              </div> */}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-800/50 rounded-2xl max-h-[75vh] p-6 border border-gray-700/50 backdrop-blur-sm h-full overflow-auto custom-scrollbar">
                  <h3 className="text-xl font-bold text-white mb-6">
                    More Services
                  </h3>
                  <div className="space-y-4">
                    {relatedServices.map((relatedService) => (
                      <Link
                        key={relatedService._id}
                        href={`/services/${relatedService.title
                          .toLowerCase()
                          .trim()
                          .replace(/\s+/g, "-") // spaces to hyphen
                          .replace(/[^\w\-]+/g, "") // remove non-word chars
                          .replace(/\-\-+/g, "-")}`}
                        className="block p-4 bg-gray-700/50 rounded-xl border border-gray-600/50 hover:border-orange-500/50 transition-all group"
                      >
                        <div className="flex gap-3">
                          {relatedService.image && (
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={relatedService.image}
                                alt={relatedService.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-medium mb-1 line-clamp-2 group-hover:text-orange-400 transition-colors">
                              {relatedService.title}
                            </h4>
                            {/* <p className="text-gray-400 text-sm capitalize">
                              {relatedService.category}
                            </p> */}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="block mt-6 text-center text-orange-400 hover:text-orange-300 font-medium transition-colors"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
