"use client"
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineShowChart } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, offset: 50 });
    }, []);

    return (
        <section className='py-20 aboutSection'>
            <div className='container'>
                <div className='flex items-center gap-20 wrapper'>
                    <div className='img relative w-[50%]'>
                        <img src="/about__2.png" alt='image' />
                        <span className='animateText txt-shadow'>About Us</span>
                        <img src="/about__small__img__2.png" className='aboutIconImg absolute top-16 right-40' alt='image' />
                    </div>

                    <div className='info w-[50%] flex flex-col gap-5'>
                        <h2 className='mainHd text-[50px] font-bold text-white leading-[60px] '>Smarter E-commerce <br />
                            <span className='text-gred'>Powered by AI</span></h2>

                        <p className='text-white/70 text-[20px]'>Our AI-powered chatbot is designed specifically for e-commerce owners, helping you manage inventory, boost sales, and provide exceptional customer support 24/7.</p>

                        <div className='flex items-center gap-5 flex-col lg:flex-row justify-start text-left'>
                            <span className='flex items-center gap-2 text-white/70 text-[18px] w-full lg:w-auto'>
                                <MdOutlineShowChart size={20} className='text-primary' />
                                Instant Responses
                            </span>

                            <span className='flex items-center gap-2 text-white/70 text-[18px] w-full lg:w-auto'>
                                <FiUsers size={20} className='text-primary' />
                                24/7 Support
                            </span>

                            <span className='flex items-center gap-2 text-white/70 text-[18px] w-full lg:w-auto'>
                                <IoChatbubbleOutline size={20} className='text-primary' />
                                Smart Automation
                            </span>

                        </div>

                        <div className='btn mt-3'>
                            <Button className='bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-3 !capitalize !font-bold gap-2' size='large'>
                                <IoPlayOutline size={25} /> Request a Demo
                            </Button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
