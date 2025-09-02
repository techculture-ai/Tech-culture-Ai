import Button from '@mui/material/Button'
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";

const BottomSec = () => {
    return (
        <section className="h-auto py-20 bg-[url('/bg-banner.png')] imageBg  bg-cover bg-center flex items-center">
            <div className='container flex items-center justify-between'>
                <div className='info flex flex-col gap-3'>
                    <h2 className='text-white txt-shadow text-[40px] font-bold'>Ready To Power Up Your <br/>Savings And Reliability?</h2>

                    <form className='relative w-[550px]'>
                        <input type='text' className='w-full h-[65px] bg-white rounded-lg p-3 px-5 outline-none' placeholder='Your Email Address'/>
                         <Button className='bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-2 !capitalize !font-bold !absolute top-[5px] 
                         right-[5px] !h-[55px]' size='large'>Subscribe <IoMdArrowForward 
                         className='text-white -rotate-[30deg]' size={25}/></Button>
                    </form>
                </div>


                <div className='flex items-center gap-3'>
                    <div className='box bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-5 flex items-center gap-3'>
                        <div className='bg-white flex items-center justify-center rounded-full w-14 h-14'>
                            <FiPhoneCall size={30} className='text-primary'/>
                        </div>

                        <div className='info flex flex-col'>
                            <span className='text-white text-[16px]'>Call Us 24/7</span>
                            <span className='text-white text-[22px] font-bold'>+123 456 7890</span>
                        </div>
                    </div>


                    <div className='box bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-5 flex items-center gap-3'>
                        <div className='bg-white flex items-center justify-center rounded-full w-14 h-14'>
                            <GoMail size={30} className='text-primary'/>
                        </div>

                        <div className='info flex flex-col'>
                            <span className='text-white text-[16px]'>Mail Us Anytime</span>
                            <span className='text-white text-[22px] font-bold'>contact@aischeduler.com</span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default BottomSec