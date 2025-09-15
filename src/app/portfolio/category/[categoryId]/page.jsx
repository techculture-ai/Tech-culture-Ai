"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { GoArrowUpRight } from "react-icons/go";
import { useSite } from "@/context/siteContext";
import AIPageHeader from "@/components/AIPageHeader";

export default function CategoryProjectsPage() {
  const router = useRouter();
  const { categoryid, setProjectid } = useSite();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryid) {
      router.push("/portfolio");
      return;
    }
    const fetchCategoryProjects = async () => {
      try {
        // Fetch category details
        
        const categoryRes = await axios.get(
          `${apiBaseUrl}/api/projects/category/${categoryid}`
        );
        setProjects(categoryRes.data.projects);
        
        // If we have projects, get category info from the first project
        if (categoryRes.data.projects.length > 0) {
          const categoryDetailRes = await axios.get(`${apiBaseUrl}/api/projects/category`);
          const currentCategory = categoryDetailRes.data.categories.find(cat => cat._id === categoryid);
          setCategory(currentCategory);
        } else {
          // If no projects, still get category details
          const categoryDetailRes = await axios.get(`${apiBaseUrl}/api/projects/category`);
          const currentCategory = categoryDetailRes.data.categories.find(cat => cat._id === categoryid);
          setCategory(currentCategory);
        }
      } catch (error) {
        console.error("Error fetching category projects:", error);
      } finally {
        setLoading(false);
      }
    };

    if (categoryid) {
      fetchCategoryProjects();
    }
  }, [categoryid]);

  const handleProjectClick = (projectId, projectTitle) => {
    setProjectid(projectId);
    router.push(`/portfolio/project/${projectTitle.replace(/\s+/g, "-").toLowerCase()}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      {/* <section className="pt-20 px-4 imageBg">
        <div className="container mx-auto">
          <button
            onClick={() => router.push("/portfolio")}
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
        </div>
      </section> */}
      {category && (
        <AIPageHeader
          title={`${category.name} Projects`}
          subtitle="Transforming Business Through Intelligent Innovation"
          description="Discover how our advanced AI technologies and expert team are revolutionizing the way businesses operate and grow."
          aiWords={["AI-Powered", "Intelligent", "Advanced"]}
        />
      )}

      {/* Projects Grid */}
      <section className="pb-20 px-4 imageBg">
        <div className="container mx-auto">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold mb-4">No Projects Yet</h2>
              <p className="text-white/60 text-lg mb-8">
                We&apos;re working on exciting projects in this category. Check
                back soon!
              </p>
              <Button
                className="!bg-primary !text-white !font-bold !capitalize"
                size="large"
                onClick={() => router.push("/")}
              >
                Explore Other Categories
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => handleProjectClick(project._id, project.title)}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === "completed"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {project.status === "completed"
                          ? "Completed"
                          : "Ongoing"}
                      </span>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 bg-white text-black rounded-full p-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <GoArrowUpRight size={20} />
                    </div>

                    {/* Technologies */}
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="absolute bottom-[80px] left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies
                              .slice(0, 3)
                              .map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="bg-white/10 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            {project.technologies.length > 3 && (
                              <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm border border-white/20">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                    {/* Project Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        {project.title}
                      </h3>
                      {project.location && (
                        <p className="text-white/50 text-xs mt-1">
                          📍 {project.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Back Button */}
          <div className="flex justify-center mt-12">
            <Button
              className="!bg-white !text-gray-800 !font-bold !capitalize"
              size="large"
              onClick={() => router.push("/portfolio")}
            >
              View All Categories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
