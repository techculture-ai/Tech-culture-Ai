"use client";

import { useSite } from "@/context/siteContext";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoArrowUpRight } from "react-icons/go";
import AIPageHeader from "../../components/AIPageHeader";
import axios from "axios";


export default function ProjectCards() {
  const { setCategoryid, categoryData, setCategoryData } = useSite();
  const router = useRouter();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  const [projectCounts, setProjectCounts] = useState({});
  const [loading, setLoading] = useState(true);

  const handleCategoryClick = (categoryId, categoryName) => {
    setCategoryid(categoryId);
    router.push(
      `/portfolio/category/${categoryName.replace(/\s+/g, "-").toLowerCase()}`
    );
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories
        if(!categoryData){
          const categoriesRes = await axios.get(
            `${apiBaseUrl}/api/projects/category`
          );
          setCategoryData(categoriesRes.data.categories);
        }
        // Fetch project count for each category
        const counts = {};
        for (const category of categoryData) {
          try {
            const projectsRes = await axios.get(`${apiBaseUrl}/api/projects/category/${category._id}`);
            counts[category._id] = projectsRes.data.projects.length;
          } catch (error) {
            counts[category._id] = 0;
          }
        }
        setProjectCounts(counts);
      } catch (error) {
        console.log("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      {/* AI Page Header */}
      <AIPageHeader
        title="Our Portfolio"
        subtitle="Project Categories Across Industries"
        description="Discover our expertise across different technology domains. Each category represents our specialized knowledge and successful implementations."
        aiWords={["AI-Powered", "Innovative", "AI"]}
      />

      <section className="imageBg py-16 pt-0">
        <div className="container">
          <h2 className="mainHd text-[50px] font-bold text-white leading-[60px] text-center mb-4">
            <span className="text-gred">Project Categories </span> we specialize
            in{" "}
          </h2>
          <p className="text-white/80 font-light text-[20px] py-3 text-center w-[90%] lg:w-[50%] m-auto mb-12">
            Explore our diverse portfolio across different technology domains
            and discover innovative solutions we&apos;ve built for our clients.
          </p>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-white text-xl">Loading categories...</div>
            </div>
          ) : (
            <div className="flex gap-4 overflow-hidden projectCards">
              {categoryData &&
                categoryData.map((category, i) => (
                  <div
                    key={i}
                    className="group relative flex-1 basis-2/7 overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-all duration-500 hover:flex-[2]"
                    onClick={() =>
                      handleCategoryClick(category._id, category.name)
                    }
                  >
                    <img
                      src={category?.image}
                      alt={category.name}
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    {projectCounts[category._id] > 0 && (
                      <div className="absolute top-5 -right-[100%] flex gap-2 opacity-0 group-hover:opacity-100 group-hover:right-16 transition-all projectTags">
                        <span className="bg-white/90 text-gray-800 text-md px-3 py-1 rounded-full backdrop-blur-sm">
                          {projectCounts[category._id]}{" "}
                          {projectCounts[category._id] === 1
                            ? "Project"
                            : "Projects"}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white text-black rounded-full p-2 group-hover:bg-primary group-hover:text-white transition">
                      <GoArrowUpRight size={20} />
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-lg font-semibold">
                        {category.name}
                      </div>
                      {category.description && (
                        <div className="text-sm text-white/80 mt-1 line-clamp-2">
                          {category.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
