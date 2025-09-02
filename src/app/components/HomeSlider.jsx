"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Brands } from './Brands';

const HomeSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <section className='homeSlider relative'>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                speed={300}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                <SwiperSlide>
                    <div className="item bg-[url('/slide1.jpg')] h-screen w-full bg-cover bg-center relative">
                        <img src={"/slide1.jpg"} className='w-full h-screen object-cover' />
                        <div className='info absolute top-[25%] left-[5.6%] w-[70%] h-screen flex flex-col z-[60] gap-4'>
                            <div className='block'>
                                <span className='bg-[rgba(255,255,255,0.1)] inline-block text-gray-300 text-[14px] font-light rounded-full px-4 py-1 border border-[rgba(255,255,255,0.1)]'>Cloud Solutions</span>
                            </div>
                            <h2 className='text-white text-[60px] font-bold leading-[80px]'>Scalable & resilient infrastructure with Cloud Solutions</h2>
                            <h4 className='text-primary text-[30px] font-extralight'>Empower Your Digital Transformation</h4>
                            <p className='text-gray-300 font-extralight text-[18px] w-[60%]'>Building modern, scalable cloud infrastructure and migrating legacy systems to the cloud for enhanced performance and security.</p>


                            <div className='flex items-center gap-4 mt-2'>
                                <Button className='!bg-white !text-gray-900 !capitalize !font-bold 
                                !rounded-lg !px-5 !py-3 hover:!bg-gray-200' size='large'>Learn More <IoIosArrowRoundForward size={25} /></Button>

                                <Button className='bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-5 !py-3 !capitalize !font-bold' size='large'>Contact Us</Button>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item bg-[url('/slide2.jpg')] h-screen w-full bg-cover bg-center relative">
                        <img src={"/slide2.jpg"} className='w-full h-screen object-cover' />
                        <div className='info absolute top-[25%] left-[5.6%] w-[70%] h-screen flex flex-col z-[60] gap-4'>
                            <div className='block'>
                                <span className='bg-[rgba(255,255,255,0.1)] inline-block text-gray-300 text-[14px] font-light rounded-full px-4 py-1 border border-[rgba(255,255,255,0.1)]'>Cybersecurity & Compliance</span>
                            </div>
                            <h2 className='text-white text-[60px] font-bold leading-[80px]'>Protecting your assets with Cybersecurity & Compliance</h2>
                            <h4 className='text-primary text-[30px] font-extralight'>Fortifying Your Digital Defenses</h4>
                            <p className='text-gray-300 font-extralight text-[18px] w-[60%]'>Implementing robust security protocols and ensuring compliance with industry regulations to protect your data from threats and vulnerabilities.</p>


                            <div className='flex items-center gap-4 mt-2'>
                                <Button className='!bg-white !text-gray-900 !capitalize !font-bold 
                                !rounded-lg !px-5 !py-3 hover:!bg-gray-200' size='large'>Learn More <IoIosArrowRoundForward size={25} /></Button>

                                <Button className='bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-5 !py-3 !capitalize !font-bold' size='large'>Contact Us</Button>
                            </div>


                        </div>
                    </div>
                </SwiperSlide>



                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>

            </Swiper>
        </section>
    )
}

export default HomeSlider
