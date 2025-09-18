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
  const { projectId: projectid } = useParams();
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
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

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
  
  const fetchProject = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/projects/slug/${projectid}`);
      setProject(response.data.project);
      // Fetch related projects after getting the main project
      if (response.data.project) {
        fetchRelatedProjects(response.data.project.category,response.data.project._id);
        setEnquiryFrom({
          ...enquiryForm,
          projectName: response.data.project.title || "General",
        });
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProjects = async (categoryId, currentProjectId) => {
    try {
      setRelatedLoading(true);
      const response = await axios.get(`${apiBaseUrl}/api/projects`);
      if (response.data.projects) {
        // Filter projects by same category and exclude current project
        const filtered = response.data.projects.filter(
          (p) => p.category === categoryId && p._id !== currentProjectId
        ).slice(0, 5); // Get only 3 related projects
        setRelatedProjects(filtered);
      }
    } catch (error) {
      console.error("Error fetching related projects:", error);
    } finally {
      setRelatedLoading(false);
    }
  };

  useEffect(() => {
    if (!projectid) {
      router.push("/portfolio");
      return;
    }

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <div className="sticky top-8">
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
            <div className="space-y-6">
              {/* <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gred">{project.title}</span>
              </h1> */}
              
              {/* Description Section */}
              <div>
                <p className="text-xl font-semibold mb-4">Description</p>
                <div 
                  className="prose-project-description text-lg leading-relaxed max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>

              {/* Location Section */}
              {project.location && (
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-white/70">📍 {project.location}</p>
                </div>
              )}

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
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
      {/* {project.portfolioImages && project.portfolioImages.length > 0 && (
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
      )} */}

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && <section className="pb-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Related <span className="text-gred">Projects</span>
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Explore more projects from the same category that showcase our
            expertise and innovation.
          </p>

          {relatedLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-b-orange-300 rounded-full animate-spin animation-delay-150"></div>
                </div>
                <p className="text-white/80 text-sm font-medium">
                  Loading related projects...
                </p>
              </div>
            </div>
          ) : relatedProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <div
                    key={relatedProject._id}
                    className="group cursor-pointer"
                    onClick={() => {
                      // Update project id in context and navigate
                      router.push(
                        `/portfolio/project/${relatedProject.title
                          .toLowerCase()
                          .trim()
                          .replace(/\s+/g, "-") // spaces to hyphen
                          .replace(/[^\w\-]+/g, "") // remove non-word chars
                          .replace(/\-\-+/g, "-")}`
                      );
                    }}
                  >
                    <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                      {/* Project Image */}
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              relatedProject.status === "completed"
                                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                            }`}
                          >
                            {relatedProject.status === "completed"
                              ? "Completed"
                              : "Ongoing"}
                          </span>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
                            <GoArrowUpRight className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p
                          className="text-gray-400 text-sm mb-4 overflow-hidden"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {relatedProject.description}
                        </p>

                        {/* Location */}
                        {relatedProject.location && (
                          <div className="flex items-center gap-2 mb-4">
                            <svg
                              className="w-4 h-4 text-gray-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-gray-500 text-sm">
                              {relatedProject.location}
                            </span>
                          </div>
                        )}

                        {/* Technologies */}
                        {relatedProject.technologies &&
                          relatedProject.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {relatedProject.technologies
                                .slice(0, 3)
                                .map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="bg-orange-500/10 text-orange-300 border border-orange-500/20 px-2 py-1 rounded text-xs font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {relatedProject.technologies.length > 3 && (
                                <span className="bg-gray-600/50 text-gray-400 px-2 py-1 rounded text-xs font-medium">
                                  +{relatedProject.technologies.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Projects Button */}
              <div className="text-center mt-12">
                <Button
                  className="!bg-primary !text-white !font-bold !capitalize"
                  size="large"
                  onClick={() => router.push("/portfolio")}
                >
                  View All Projects
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-600/50 rounded-full flex items-center justify-center">
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
              <h3 className="text-xl font-semibold text-white mb-2">
                No Related Projects
              </h3>
              <p className="text-gray-400 mb-6">
                There are no other projects in this category at the moment.
              </p>
              <Button
                className="!bg-gradient-to-r !from-orange-500 !to-yellow-500 !text-white !font-bold !capitalize !px-6 !py-2 !rounded-lg hover:!from-orange-600 hover:!to-yellow-600 !transition-all !duration-300"
                onClick={() => router.push("/portfolio")}
              >
                Explore All Projects
              </Button>
            </div>
          )}
        </div>
      </section>}

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
    </div>
  );
}
