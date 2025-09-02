"use client"
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import Button from '@mui/material/Button';
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";


const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='py-20 pb-10'>
            <div className='container relative'>
                <img src={"/testimonial__small__img.png"} alt='image' className='testimonial__2__small__icon' />
                <div className='flex items-center justify-center'>
                    <span className='bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full 
                    text-[14px] text-primary'>CUSTOMER STORIES</span>
                </div>
                <h2 className='text-[40px] font-bold text-white leading-[60px] text-center mt-2'>Real Stories from  <span className='text-gred'>Happy Customers</span></h2>

                <p className="text-white/70 text-[20px] text-center">Discover how our solutions have transformed businesses across various industries</p>



                <div className='testimonialSlider my-10 relative' >
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}
                        pagination={{
                            clickable: true,
                        }}
                        // onInit={(swiper) => {
                        //     swiper.params.navigation.prevEl = prevRef.current;
                        //     swiper.params.navigation.nextEl = nextRef.current;
                        //     swiper.navigation.init();
                        //     swiper.navigation.update();
                        // }}
                    >
                        <SwiperSlide>
                            <div className='testimonialItem bg-[#16152a] border border-[rgba(255,255,255,0.1)] w-full rounded-md p-10'>
                                <p className=' underline text-white/80 text-[21px] italic text-center leading-10 pb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                                <hr />


                                <div className='flex items-center justify-between gap-5 mt-5'>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex items-center justify-center rounded-full w-20 h-20'>
                                            <img src={"https://foxpixel.vercel.app/bastun/bastun/img/testimonial/testimonial__3.png"} alt='image' className='w-full h-full object-cover' />
                                        </div>

                                        <div className='info flex flex-col'>
                                            <h4 className='font-bold text-[20px] text-white/70'>MATTIE WARNER</h4>
                                            <span className='text-gred text-[16px]'>Business Man</span>
                                        </div>
                                    </div>

                                    <img src={"/testimonial__small.png"} alt='image' />
                                </div>
                            </div>
                        </SwiperSlide>

                 <SwiperSlide>
                            <div className='testimonialItem bg-[#16152a] border border-[rgba(255,255,255,0.1)] w-full rounded-md p-10'>
                                <p className=' underline text-white/80 text-[21px] italic text-center leading-10 pb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                                <hr />


                                <div className='flex items-center justify-between gap-5 mt-5'>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex items-center justify-center rounded-full w-20 h-20'>
                                            <img src={"https://foxpixel.vercel.app/bastun/bastun/img/testimonial/testimonial__3.png"} alt='image' className='w-full h-full object-cover' />
                                        </div>

                                        <div className='info flex flex-col'>
                                            <h4 className='font-bold text-[20px] text-white/70'>MATTIE WARNER</h4>
                                            <span className='text-gred text-[16px]'>Business Man</span>
                                        </div>
                                    </div>

                                    <img src={"/testimonial__small.png"} alt='image' />
                                </div>
                            </div>
                        </SwiperSlide>


                         <SwiperSlide>
                            <div className='testimonialItem bg-[#16152a] border border-[rgba(255,255,255,0.1)] w-full rounded-md p-10'>
                                <p className=' underline text-white/80 text-[21px] italic text-center leading-10 pb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                                <hr />


                                <div className='flex items-center justify-between gap-5 mt-5'>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex items-center justify-center rounded-full w-20 h-20'>
                                            <img src={"https://foxpixel.vercel.app/bastun/bastun/img/testimonial/testimonial__3.png"} alt='image' className='w-full h-full object-cover' />
                                        </div>

                                        <div className='info flex flex-col'>
                                            <h4 className='font-bold text-[20px] text-white/70'>MATTIE WARNER</h4>
                                            <span className='text-gred text-[16px]'>Business Man</span>
                                        </div>
                                    </div>

                                    <img src={"/testimonial__small.png"} alt='image' />
                                </div>
                            </div>
                        </SwiperSlide>


                         <SwiperSlide>
                            <div className='testimonialItem bg-[#16152a] border border-[rgba(255,255,255,0.1)] w-full rounded-md p-10'>
                                <p className=' underline text-white/80 text-[21px] italic text-center leading-10 pb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                                <hr />


                                <div className='flex items-center justify-between gap-5 mt-5'>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex items-center justify-center rounded-full w-20 h-20'>
                                            <img src={"https://foxpixel.vercel.app/bastun/bastun/img/testimonial/testimonial__3.png"} alt='image' className='w-full h-full object-cover' />
                                        </div>

                                        <div className='info flex flex-col'>
                                            <h4 className='font-bold text-[20px] text-white/70'>MATTIE WARNER</h4>
                                            <span className='text-gred text-[16px]'>Business Man</span>
                                        </div>
                                    </div>

                                    <img src={"/testimonial__small.png"} alt='image' />
                                </div>
                            </div>
                        </SwiperSlide>


                        
                    </Swiper>

                    {/* <Button className='actions prev' ref={prevRef}><TfiAngleLeft size={25} className='text-white' /></Button>
                    <Button className='actions next' ref={nextRef}><TfiAngleRight size={25} className='text-white' /></Button> */}
                </div>


            </div>
        </section>
    )
}

export default Testimonials
