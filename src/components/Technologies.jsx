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
                <div className='flex items-center justify-center'>
                    <span className='bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full 
                    text-[14px] text-primary'>Technologies</span>
                </div>

                <h2 className='mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2'>
                    <span className='text-gred'>Technologies</span> We Use
                </h2>

                <p className="text-gray-300 text-[20px] text-center">
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
                        <div className='flex items-center justify-center flex-wrap gap-4 mt-4 technologies'>
                            {
                                technologyData?.length > 0 && technologyData?.map((item, index) => {
                                    return (
                                        <Button 
                                            key={index} 
                                            className={`bg-[#000319] !text-gray-300 !rounded-full !px-5 !py-2 !font-[600] !text-[15px] !capitalize hover:bg-[#222f47] items-center gap-2 ${isActive === index && '!bg-primary !text-white'}`} 
                                            onClick={() => {
                                                setIsActive(index);
                                                setIsActiveTech(item)
                                            }}
                                        >
                                            {item?.title}
                                        </Button>
                                    )
                                })
                            }
                        </div>

                        <br />
                        <br />

                        {
                            isActiveTech && (
                                <div className='technologiesSection'>
                                    <h2 className='text-center text-white text-[35px] font-bold'>
                                        {isActiveTech?.title}
                                    </h2>
                                    <br />

                                    <div className='p-8 bg-[#01051d] rounded-md border border-[rgba(255,255,255,0.1)]'>
                                        {isActiveTech?.items?.length > 0 ? (
                                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 texhCard'>
                                                {
                                                    isActiveTech.items.map((item, index) => {
                                                        return (
                                                          <div
                                                            className="box bg-slate-800/50 p-3 rounded-lg flex flex-col 
                                                                gap-2 justify-center text-center h-32 border border-[rgba(255,255,255,0.050)] 
                                                                transition-all hover:scale-110 hover:bg-slate-700 hover:border-primary/30"
                                                            key={index}
                                                          >
                                                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                                                              {iconMap[
                                                                item?.name
                                                              ] || (
                                                                <span className="text-primary text-xl font-bold">
                                                                  {item?.name
                                                                    ?.charAt(0)
                                                                    .toUpperCase()}
                                                                </span>
                                                              )}
                                                            </div>
                                                            <h3 className="text-white/80 text-[15px] font-bold">
                                                              {item?.name}
                                                            </h3>
                                                          </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        ) : (
                                            <div className="text-center text-gray-400 py-8">
                                                <p>No technologies found in this category</p>
                                            </div>
                                        )}
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