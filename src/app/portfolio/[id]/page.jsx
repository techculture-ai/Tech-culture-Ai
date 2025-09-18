"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt,
  FaCode,
  FaCheckCircle,
  FaClock,
  FaImage,
  FaExpand
} from "react-icons/fa";
import { HiSparkles, HiFire } from "react-icons/hi";
import Image from "next/image";
import { BsArrowRight, BsEye, BsGithub } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import Button from "@mui/material/Button";
import { projectService } from "../../../services/projectService";
import AIPageHeader from "../../../components/AIPageHeader";
import { useSite } from "@/context/siteContext";

const ProjectDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const { projectid } = useSite();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await projectService.getProjectById(projectid);
        if (projectData) {
          setProject(projectData);
        } else {
          router.push('/portfolio');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        router.push('/portfolio');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProject();
    }
  }, [params.id, router]);

  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setImageIndex(index);
  };

  const handleNextImage = () => {
    if (project && project.portfolioImages) {
      const nextIndex = (imageIndex + 1) % project.portfolioImages.length;
      setImageIndex(nextIndex);
      setSelectedImage(project.portfolioImages[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (project && project.portfolioImages) {
      const prevIndex = imageIndex === 0 ? project.portfolioImages.length - 1 : imageIndex - 1;
      setImageIndex(prevIndex);
      setSelectedImage(project.portfolioImages[prevIndex]);
    }
  };

  if (loading) {
    return (
      <>
        <AIPageHeader
          title="Project Details"
          subtitle="Exploring AI Innovation"
          description="Discover the technical details and insights of our AI-powered projects."
          aiWords={["AI-powered", "Innovation", "technical"]}
        />
        <section className="py-20 imageBg">
          <div className="container">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-white text-lg">Loading project details...</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (!project) {
    return (
      <>
        <AIPageHeader
          title="Project Not Found"
          subtitle="The project you're looking for doesn't exist"
          description="Return to our portfolio to explore other amazing projects."
          aiWords={["portfolio", "explore", "projects"]}
        />
        <section className="py-20 imageBg">
          <div className="container text-center">
            <Button
              variant="contained"
              onClick={() => router.push('/portfolio')}
              className="bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white font-bold py-3 px-6 rounded-full"
              startIcon={<FaArrowLeft />}
            >
              Back to Portfolio
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <AIPageHeader
        title={project.title}
        subtitle={`${project.category} • ${
          project.status === "completed"
            ? "Completed Project"
            : "Ongoing Development"
        }`}
        description={project.description}
        aiWords={["AI-powered", "innovative", "cutting-edge"]}
      />

      {/* Hero Section */}
      <section className="py-20 imageBg relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/15 to-orange-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="outlined"
              onClick={() => router.push("/portfolio")}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              startIcon={<FaArrowLeft />}
            >
              Back to Portfolio
            </Button>
          </div>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Project Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  width={600}
                  height={400}
                  style={{objectFit: 'cover'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm border ${
                      project.status === "completed"
                        ? "bg-green-500/20 border-green-400/30 text-green-400"
                        : "bg-orange-500/20 border-orange-400/30 text-orange-400"
                    }`}
                  >
                    {project.status === "completed" ? (
                      <FaCheckCircle />
                    ) : (
                      <FaClock />
                    )}
                    <span className="font-semibold capitalize">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-primary/20 to-orange-400/20 backdrop-blur-xl p-3 rounded-full border border-primary/30">
                    <HiSparkles className="text-primary text-xl" />
                  </div>
                  <span className="text-primary font-bold text-lg">
                    {project.category}
                  </span>
                </div>

                <h1 className="text-[48px] lg:text-[64px] font-extrabold text-white leading-tight mb-6">
                  {project.title}
                </h1>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.location && (
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                    <div>
                      <p className="text-white/60 text-sm">Location</p>
                      <p className="text-white font-semibold">
                        {project.location}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <FaCalendarAlt className="text-primary text-xl" />
                  <div>
                    <p className="text-white/60 text-sm">Created</p>
                    <p className="text-white font-semibold">
                      {new Date(project.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                    <FaCode className="text-primary" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-primary/20 to-orange-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 text-white font-medium hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {/* <div className="flex flex-wrap gap-4">
                <Button
                  variant="contained"
                  className="bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-300"
                  endIcon={<BsArrowRight />}
                >
                  View Live Demo
                </Button>

                
              </div> */}
            </div>
          </div>

          {/* Portfolio Images Gallery */}
          {project.portfolioImages && project.portfolioImages.length > 0 && (
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <FaImage className="text-primary text-2xl" />
                  <h2 className="text-[40px] font-bold text-white">
                    Project{" "}
                    <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                      Gallery
                    </span>
                  </h2>
                </div>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Explore the visual journey of this project through screenshots
                  and development glimpses
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.portfolioImages.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer transform hover:scale-105 transition-all duration-500"
                    onClick={() => handleImageClick(imageUrl, index)}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      width={400}
                      height={256}
                      style={{objectFit: 'cover'}}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-semibold">
                            Image {index + 1}
                          </span>
                          <FaExpand className="text-white text-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-br from-[#0a0f1c]/80 via-[#0f1419]/80 to-[#0a0f1c]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-primary/20 to-orange-400/20 backdrop-blur-xl p-4 rounded-full border border-primary/30">
                <HiFire className="text-orange-400 text-3xl" />
              </div>
            </div>

            <h3 className="text-[32px] font-bold text-white mb-4">
              Inspired by This{" "}
              <span className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                Project?
              </span>
            </h3>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can create something amazing for your
              business. Our AI solutions are tailored to meet your specific
              needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="contained"
                onClick={() => router.push("/contact-us")}
                className="bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300"
                endIcon={<BsArrowRight />}
              >
                Start Your Project
              </Button>

              <Button
                variant="outlined"
                onClick={() => router.push("/portfolio")}
                className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 py-4 px-8 rounded-full text-lg"
                startIcon={<BsEye />}
              >
                View More Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10 border border-white/20"
              >
                <IoClose size={24} className="text-white" />
              </button>

              {/* Navigation Buttons */}
              {project.portfolioImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <FaArrowLeft className="text-white" />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <BsArrowRight className="text-white" />
                  </button>
                </>
              )}

              {/* Image */}
              <Image
                src={selectedImage}
                alt={`${project.title} - Gallery Image`}
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                width={800}
                height={600}
                style={{objectFit: 'contain'}}
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-white font-medium">
                  {imageIndex + 1} of {project.portfolioImages.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectDetail;
