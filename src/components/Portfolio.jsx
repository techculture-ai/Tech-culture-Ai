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
    const { projectData, setProjectData } = useSite();

    useEffect(() => {
      const fetchData = async () => {
        if (!projectData) {
          try {
            const res = await axios.get(`${apiBaseUrl}/api/projects`);
            setProjectData(res.data.projects);
            console.log("Project data", res.data.projects);
            setProjectData(res.data.projects);
          } catch (error) {
            console.log(error);
          }
        }
      };

      fetchData();
    }, [projectData, setProjectData]);
    return (
      <section className="imageBg py-16 pt-0">
        <div className="container">
          <h2 className="mainHd text-[50px] font-bold text-white leading-[60px] text-center">
            <span className="text-gred">Technologies </span> we have built{" "}
          </h2>
          <p className="text-white/80 font-light text-[20px] py-3 text-center w-[90%] lg:w-[50%] m-auto">
            Using machine learning to track usage patterns, our platform reduces
            energy overuse and improves operational sustainability.
          </p>
          <br />
          <div className="flex gap-4 overflow-hidden projectCards">
            {projectData &&
              projectData.map((project, i) => (
                <div
                  key={i}
                  className="group relative flex-1 basis-2/7 overflow-hidden rounded-3xl shadow-lg cursor-pointer transition-all duration-500 hover:flex-[2]"
                >
                  <img
                    src={project?.image}
                    alt={project.title}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  {project.technologies && (
                    <div className="absolute top-5 -right-[100%] flex gap-2 opacity-0 group-hover:opacity-100 group-hover:right-16 transition-all projectTags">
                      {project.technologies.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-white/90 text-gray-800 text-md px-3 py-1 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white text-black rounded-full p-2 group-hover:bg-primary group-hover:text-white transition">
                    <GoArrowUpRight size={20} />
                  </div>
                  <div className="absolute bottom-6 left-6 text-white text-lg font-semibold">
                    {project.title}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-10">
          <Button
            className="!bg-white !text-gray-800 !font-bold !capitalize items-center"
            size="large"
            onClick={() => router.push('/portfolio')}
          >
            View All Products
          </Button>
        </div>
      </section>
    );
}