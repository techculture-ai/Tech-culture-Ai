"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { useSite } from "@/context/siteContext";
import AIPageHeader from "@/components/AIPageHeader";
import { IoClose } from "react-icons/io5";
import { toast } from "react-hot-toast";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { projectid } = useSite();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const [enquiryForm, setEnquiryFrom] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectName: "",
  });
  
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/api/projects/${projectid}`);
        setProject(response.data.project);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (projectid) {
      fetchProject();
    }
  }, [projectid]);

  const handleInputChange = (e) => {
    setEnquiryFrom({
      ...enquiryForm,
      [e.target.name]: e.target.value,
    });
  };

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

    if (!enquiryForm.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enquiryForm.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setEnquiryFrom({
      ...enquiryForm,
      projectName: project ? project.title : "General",
    });

    const loadingToast = toast.loading("Submitting your enquiry...");

    try {
      const res = await axios.post(`${apiBaseUrl}/api/enquiries`, enquiryForm);

      if (res.status === 201) {
        toast.dismiss(loadingToast);
        toast.success(
          "Enquiry submitted successfully! We'll get back to you soon."
        );
        setEnquiryFrom({
          name: "",
          email: "",
          phone: "",
          message: "",
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
        toast.error(
          "Failed to submit enquiry. Please check your connection and try again."
        );
      }
    }
  };
    

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
          <Button
            className="!bg-primary !text-white !font-bold !capitalize"
            size="large"
            onClick={() => router.push('/portfolio')}
          >
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {project && (
        <AIPageHeader
          title={`${project.title} Projects`}
          subtitle="Transforming Business Through Intelligent Innovation"
          description="Discover how our advanced AI technologies and expert team are revolutionizing the way businesses operate and grow."
          aiWords={["AI-Powered", "Intelligent", "Advanced"]}
        />
      )}
      {/* Header Section */}
      <section className="py-20 px-4 imageBg">
        <div className="container mx-auto">
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === "completed"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {project.status === "completed" ? "Completed" : "Ongoing"}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              {/* <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gred">{project.title}</span>
              </h1> */}
              <p className="text-xl font-semibold mb-2">Description</p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {project.location && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-white/70">📍 {project.location}</p>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  className="!bg-primary !text-white !font-bold !capitalize"
                  size="large"
                  onClick={() => router.push("/portfolio")}
                >
                  View More Projects
                </Button>
                <Button
                  className="!bg-white !text-gray-800 !font-bold !capitalize"
                  size="large"
                  onClick={() => setShowEnquiryPopup(true)}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Images */}
      {project.portfolioImages && project.portfolioImages.length > 0 && (
        <section className="pb-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Project <span className="text-gred">Gallery</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative rounded-xl overflow-hidden group"
                >
                  <img
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popup Enquiry Form */}
      {showEnquiryPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl">
            <button
              onClick={() => setShowEnquiryPopup(false)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <IoClose />
            </button>

            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Get a Free Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none"
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
    </div>
  );
}
