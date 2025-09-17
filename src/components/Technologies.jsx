"use client"
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useSite } from '@/context/siteContext'
import {
  FaReact,
  FaNode,
  FaPython,
  FaPhp,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaVuejs,
  FaBootstrap,
  FaUnity,
  FaDatabase,
} from "react-icons/fa";
import {
  SiFlutter,
  SiUnrealengine,
  SiTypescript,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";


const iconMap = {
  "React Native": <FaReact className="w-6 h-6 text-primary" />,
  Flutter: <SiFlutter className="w-6 h-6 text-primary" />,
  Unity: <FaUnity className="w-6 h-6 text-primary" />,
  "Unreal Engine": <SiUnrealengine className="w-6 h-6 text-primary" />,
  TypeScript: <SiTypescript className="w-6 h-6 text-primary" />,
  "Node.js": <FaNode className="w-6 h-6 text-primary" />,
  Django: <SiDjango className="w-6 h-6 text-primary" />,
  Python: <FaPython className="w-6 h-6 text-primary" />,
  Flask: <SiFlask className="w-6 h-6 text-primary" />,
  FastAPI: <SiFastapi className="w-6 h-6 text-primary" />,
  PHP: <FaPhp className="w-6 h-6 text-primary" />,
  Laravel: <FaLaravel className="w-6 h-6 text-primary" />,
  PostgreSQL: <SiPostgresql className="w-6 h-6 text-primary" />,
  MySQL: <SiMysql className="w-6 h-6 text-primary" />,
  MongoDB: <SiMongodb className="w-6 h-6 text-primary" />,
  Firebase: <SiFirebase className="w-6 h-6 text-primary" />,
  HTML5: <FaHtml5 className="w-6 h-6 text-primary" />,
  CSS3: <FaCss3Alt className="w-6 h-6 text-primary" />,
  JavaScript: <FaJs className="w-6 h-6 text-primary" />,
  "React.js": <FaReact className="w-6 h-6 text-primary" />,
  Angular: <FaAngular className="w-6 h-6 text-primary" />,
  "Vue.js": <FaVuejs className="w-6 h-6 text-primary" />,
  "Next.js": <SiNextdotjs className="w-6 h-6 text-primary" />,
  Tailwind: <SiTailwindcss className="w-6 h-6 text-primary" />,
  Bootstrap: <FaBootstrap className="w-6 h-6 text-primary" />,
};


const Technologies = () => {
    const { technologyData, setTechnologyData } = useSite();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const [isActive, setIsActive] = useState(0);
    const [isActiveTech, setIsActiveTech] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchTechnology = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${apiUrl}/api/technologies`);
                console.log("Technology API Response:", res.data);
                
                if (res.data.success && res.data.data) {
                    setTechnologyData(res.data.data);
                    // Set the first category as active by default
                    if (res.data.data.length > 0) {
                        setIsActiveTech(res.data.data[0]);
                    }
                }
            } catch (error) {
                console.error("Error fetching technologies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTechnology();
    }, [apiUrl, setTechnologyData]);

    return (
        <section className='bg-[#000319] py-20 pt-10 imageBg'>
            <div className='container'>
                

                <h2 className='mainHd text-[30px] sm:text-[35px] lg:text-[40px] font-bold text-white leading-[40px] sm:leading-[50px] lg:leading-[60px] text-center mt-2'>
                    <span className='text-gred'>Technologies</span> We Use
                </h2>

                <p className="text-gray-300 text-[16px] sm:text-[18px] lg:text-[20px] text-center max-w-4xl mx-auto">
                    We leverage cutting-edge technologies and industry-leading tools to deliver exceptional solutions
                </p>

                <br />

                {loading ? (
                    <div className="text-center text-white">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="mt-4">Loading technologies...</p>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mt-4 technologies">
                            {
                                technologyData?.length > 0 && technologyData?.map((item, index) => {
                                    return (
                                        <Button 
                                            key={index} 
                                            className={`
                                                group relative overflow-hidden
                                                !text-[14px] lg:!text-[16px] !font-[600] !capitalize !rounded-full !px-4 lg:!px-6 !py-3
                                                transition-all duration-500 transform hover:scale-105
                                                ${
                                                    isActive === index
                                                        ? "!bg-gradient-to-r !from-[#ff6333] !via-[#e15226] !to-[#fe9272] !text-white !shadow-xl !shadow-primary/30"
                                                        : "!bg-[#1e293b80] !text-gray-300 !border !border-[rgba(255,255,255,0.1)] hover:!bg-[#2d3748] hover:!text-white hover:!border-primary/30"
                                                }
                                            `}
                                            onClick={() => {
                                                setIsActive(index);
                                                setIsActiveTech(item)
                                            }}
                                        >
                                            <span className="flex items-center gap-2 lg:gap-3 relative z-10">
                                                <div className={`w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center ${isActive === index ? 'bg-white/80' : ''}`}>
                                                    <span className="text-primary text-xs font-bold">
                                                        {item?.title?.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <span className="hidden sm:inline">{item?.title}</span>
                                                <span className="sm:hidden">
                                                    {item?.title.split(" ")[0]}
                                                </span>
                                            </span>
                                        </Button>
                                    )
                                })
                            }
                        </div>

                        <br />
                        <br />

                        {
                            isActiveTech && (
                                <div className="relative">
                                    {/* Floating Background Elements */}
                                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

                                    <div className="relative bg-gradient-to-br from-[#0a0f1c] via-[#0f1419] to-[#0a0f1c] rounded-2xl border border-[rgba(255,255,255,0.1)] overflow-hidden">
                                        {/* Header Section */}
                                        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 lg:p-8 border-b border-[rgba(255,255,255,0.1)]">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                                                    <span className="text-white text-xl font-bold">
                                                        {isActiveTech?.title?.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h2 className="text-white text-[24px] lg:text-[32px] font-bold">
                                                        {isActiveTech?.title}
                                                    </h2>
                                                    <p className="text-primary text-[14px] lg:text-[16px] font-medium">
                                                        {isActiveTech?.items?.length || 0} Technologies Available
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Technologies Grid */}
                                        <div className="p-6 lg:p-12">
                                            {isActiveTech?.items?.length > 0 ? (
                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
                                                    {
                                                        isActiveTech.items.map((item, index) => {
                                                            return (
                                                                <div
                                                                    className="group relative bg-[#252b3d] p-4 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
                                                                    key={index}
                                                                >
                                                                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl bg-primary"></div>
                                                                    
                                                                    <div className="relative z-10 flex flex-col items-center text-center">
                                                                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                                                                            {iconMap[item?.name] || (
                                                                                <span className="text-primary text-lg lg:text-xl font-bold">
                                                                                    {item?.name?.charAt(0).toUpperCase()}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                        <h3 className="text-white/90 text-[13px] lg:text-[15px] font-semibold leading-tight">
                                                                            {item?.name}
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            ) : (
                                                <div className="text-center text-gray-400 py-12">
                                                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <span className="text-gray-500 text-2xl">💻</span>
                                                    </div>
                                                    <p className="text-lg">No technologies found in this category</p>
                                                    <p className="text-sm mt-2">Technologies will appear here once added to the database</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </>
                )}
            </div>
        </section>
    )
}

export default Technologies