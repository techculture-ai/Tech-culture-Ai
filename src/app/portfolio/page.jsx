"use client";

import { useSite } from "@/context/siteContext";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import AIPageHeader from "../../components/AIPageHeader";
import axios from "axios";
import Image from "next/image";

export default function ProjectCards() {
  const { categoryData, setCategoryData } = useSite();
  const router = useRouter();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

  const [projectCounts, setProjectCounts] = useState({});
  const [loading, setLoading] = useState(true);

  const handleCategoryClick = (categoryId, categoryName) => {
    // Only navigate if there are projects in this category
    if (projectCounts[categoryId] > 0) {
      router.push(
        `/portfolio/category/${categoryName
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "")
          .replace(/\-\-+/g, "-")}`
      );
    }
    // If no projects, do nothing (no navigation)
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories if not already available
        if (!categoryData) {
          const categoriesRes = await axios.get(
            `${apiBaseUrl}/api/projects/category`
          );
          setCategoryData(categoriesRes.data.categories);
        }

        // Fetch project counts for each category
        const categories = categoryData || [];
        const counts = {};

        await Promise.all(
          categories.map(async (category) => {
            try {
              const projectsRes = await axios.get(
                `${apiBaseUrl}/api/projects/category/${category._id}`
              );
              counts[category._id] = projectsRes.data.projects.length;
            } catch (error) {
              console.log(
                `Error fetching projects for category ${category.name}:`,
                error
              );
              counts[category._id] = 0;
            }
          })
        );

        setProjectCounts(counts);
      } catch (error) {
        console.log("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [categoryData, setCategoryData, apiBaseUrl]);

  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader
        title="Our Portfolio"
        subtitle="Explore our diverse portfolio across different technology domains
            and discover innovative solutions we've built for our clients."
        description="Discover our expertise across different technology domains. Each category represents our specialized knowledge and successful implementations."
        aiWords={["AI-Powered", "Innovative", "AI"]}
      />

      <section className="imageBg py-20 ">
        <div className="container">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-b-orange-300 rounded-full animate-spin animation-delay-150"></div>
                </div>
                <p className="text-white/80 text-sm font-medium">
                  Loading portfolio categories...
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 overflow-hidden projectCards">
              {categoryData &&
                categoryData.map((category, i) => {
                  const hasProjects = projectCounts[category._id] > 0;

                  return (
                    <div
                      key={i}
                      className={`group relative flex-1 basis-2/7 overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:flex-[2] ${
                        hasProjects ? "cursor-pointer" : "cursor-default"
                      }`}
                      onClick={() =>
                        handleCategoryClick(category._id, category.name)
                      }
                    >
                      <Image
                        src={category?.image}
                        alt={category.name}
                        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                        width={400}
                        height={500}
                        style={{ objectFit: "cover" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                      {/* Project count badge - only show if there are projects */}
                      {hasProjects && (
                        <div className="absolute top-5 -right-[100%] flex gap-2 opacity-0 group-hover:opacity-100 group-hover:right-16 transition-all projectTags">
                          <span className="bg-white/90 text-gray-800 text-md px-3 py-1 rounded-full backdrop-blur-sm">
                            {projectCounts[category._id]}{" "}
                            {projectCounts[category._id] === 1
                              ? "Project"
                              : "Projects"}
                          </span>
                        </div>
                      )}

                      {/* Top-left project count for immediate visibility */}
                      {hasProjects && (
                        <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                          {projectCounts[category._id]}{" "}
                          {projectCounts[category._id] === 1
                            ? "Project"
                            : "Projects"}
                        </div>
                      )}

                      <div className="absolute top-4 right-4 rounded-full p-2 transition bg-white text-black group-hover:bg-primary group-hover:text-white">
                        <GoArrowUpRight size={20} />
                      </div>

                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="text-lg font-semibold">
                          {category.name}
                        </div>
                        {hasProjects && category.description && (
                          <div className="text-sm text-white/80 mt-1 line-clamp-2">
                            {category.description}
                          </div>
                        )}
                        {hasProjects && (
                          <div className="text-sm text-white/80 mt-1">
                            Click to explore projects
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
