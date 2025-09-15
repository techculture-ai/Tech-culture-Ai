"use client";

import { useSite } from "@/context/siteContext";
import Button from "@mui/material/Button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

// const projects = [
//     {
//         title: "Predictive Analytics Engine",
//         image: "https://framerusercontent.com/images/95AWPsd6pGN9FkDJXN4GarMI40M.png?scale-down-to=1024",
//         tags: ["Data Science", "Blockchain"],
//     },
//     {
//         title: "Cloud AI Integration",
//         image: "https://framerusercontent.com/images/B99RWrFRBY9xHpQA91l6MKDKm9g.png?scale-down-to=1024",
//         tags: ["Data Science", "Blockchain"],
//     },
//     {
//         title: "Optivus AI Assistant",
//         image: "https://framerusercontent.com/images/p1alDZyx8Nokg0bH6m6lFzetEBQ.jpg?scale-down-to=1024",
//         tags: ["Data Science", "Blockchain"],
//     },
//     {
//         title: "Cloud Computing",
//         image: "https://framerusercontent.com/images/t4slXm3H16Pk4Um6zrdy6WlbJeE.jpg?scale-down-to=1024",
//         tags: ["Data Science", "Blockchain"],
//     },
//     {
//         title: "Cloud Computing",
//         image: "https://framerusercontent.com/images/WwOBIwlZdTKSAHKz8hpa8N9vDL0.png?scale-down-to=1024",
//         tags: ["Data Science", "Blockchain"],
//     },
// ];

export default function ProjectCards() {
  const router = useRouter()
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const { setCategoryid, categoryData, setCategoryData } = useSite();

    useEffect(() => {
      const fetchData = async () => {
        if (!categoryData) {
          try {
            const res = await axios.get(`${apiBaseUrl}/api/projects/category`);
            setCategoryData(res.data.categories);
            console.log("Category data", res.data.categories);
          } catch (error) {
            console.log(error);
          }
        }
      };

      fetchData();
    }, [categoryData, setCategoryData]);

    const handleCategoryClick = (categoryId, categoryName) => {
      setCategoryid(categoryId);
      router.push(
        `/portfolio/category/${categoryName.replace(/\s+/g, "-").toLowerCase()}`
      );
    };
    return (
      <section className="imageBg py-16 pt-0">
        <div className="container">
          <h2 className="mainHd text-[50px] font-bold text-white leading-[60px] text-center">
            <span className="text-gred">Our </span> Portfolio
          </h2>
          <p className="text-white/80 font-light text-[20px] py-3 text-center w-[90%] lg:w-[50%] m-auto">
            Using machine learning to track usage patterns, our platform reduces
            energy overuse and improves operational sustainability.
          </p>
          <br />
          <div className="flex gap-4 overflow-hidden projectCards">
            {categoryData &&
              categoryData.map((category, i) => (
                <div
                  key={i}
                  className="group relative flex-1 basis-2/7 overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-all duration-500 hover:flex-[2]"
                  onClick={() => handleCategoryClick(category._id, category.name)}
                >
                  <img
                    src={category?.image}
                    alt={category.name}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white text-black rounded-full p-2 group-hover:bg-primary group-hover:text-white transition">
                    <GoArrowUpRight size={20} />
                  </div>
                  <div className="absolute bottom-6 left-6 text-white text-lg font-semibold">
                    {category.name}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <Button
            className="!bg-white !text-gray-800 !font-bold !capitalize items-center"
            size="large"
            onClick={() => router.push("/portfolio")}
          >
            View All Products
          </Button>
        </div>
      </section>
    );
}