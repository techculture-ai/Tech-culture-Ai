import React from 'react'
import { IoStar } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
const HomeScreen = () => {
    return (
        <section className='homeScreen h-[1200px] relative'>
            <img src={"/plus.png"} alt='image' className='plusImg keyframe5' />
            <div className='container'>
                <div className='flex items-center justify-center pt-[100px] lg:pt-[200px]'>
                    <span className='text-center text-white bg-white/10 py-2 px-4 rounded-full text-[14px]'>Top A.I Driven App</span>
                </div>
                <h1 className='text-white font-bold space-x-2 text-[60px] leading-[80px] text-center my-2 txt-shadow' data-aos="fade-up">
                    Transform Your Business with</h1>

                <h2 className='text-white font-medium text-[60px] leading-[80px] text-center my-2 txt-shadow
                flex items-center gap-4 justify-center' data-aos="fade-up">
                    <span className='relative text-center txtLine text-primary'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'AI-Powered',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Development',
                                1000,
                                'Web Application',
                                1000,
                                'Mobile Application',
                                1000
                            ]}
                            wrapper="span"
                            speed={150}
                            repeat={Infinity}
                        />
                    </span>
                    Application
                </h2>

                <img src={"/homeScreenaimg3.png"} alt='image' className='absolute top-96 left-36 aniamtion-key-2' />

                <br />

                <p className='text-center text-white/70 text-[20px] w-[55%] m-auto' data-aos="fade-up">
                    Welcome to SEO where we specialize in revolutionizing your online
                    presence through expert SEO and digital marketing solutions.
                </p>


                <div className='homeScreenImg absolute bottom-0 left-0 w-full text-center flex items-center justify-center'>
                    <img src={"https://seoc-html-v2.vercel.app/assets/img/all-images/new-img/header-img14.png"} alt='img' className='w-[750px] hidden lg:block' data-aos="zoom-in" />

                    <img src={"/elements29.png"} className='homeScreen_img2 absolute homeScreen_img2Animation' alt='image' />


                    <div className='flex items-center bg-white p-3 rounded-md homescreenExpTab absolute 
                    -top-24 right-7 w-80 gap-2 text-left aniamtion-key-8'>
                        <span><FaCircleCheck size={25} className='text-primary' /></span>
                        <p>With 12+ years of experience helping the community.</p>
                    </div>


                    <div className='homeScreenRating hidden lg:flex flex-col gap-2 absolute top-64 right-24' data-aos="fade-left">
                        <div className='flex items-center gap-1'>
                            <IoStar size={20} className='text-primary' />
                            <IoStar size={20} className='text-primary' />
                            <IoStar size={20} className='text-primary' />
                            <IoStar size={20} className='text-primary' />
                            <IoStar size={20} className='text-primary' />
                        </div>

                        <h4 className='text-white/80 text-[18px] text-left'>“We are dedicated, reliable<br />
                            & assigned to grow your business.”
                        </h4>
                        <span className='text-primary text-[16px] text-left flex items-center gap-1'>
                            <img src={"/star1.png"} alt='image' />
                            CEO & Founder
                        </span>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HomeScreen
