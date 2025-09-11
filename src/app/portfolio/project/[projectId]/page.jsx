"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { useSite } from "@/context/siteContext";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { projectid } = useSite();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gred">{project.title}</span>
              </h1>

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
                  onClick={() => router.push("/contact")}
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
    </div>
  );
}
