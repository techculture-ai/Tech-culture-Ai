"use client"
import Button from '@mui/material/Button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenNav, setIsOpenNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`w-full h-20  flex items-center justify-center fixed top-0 left-0 z-[100] ${isScrolled === true && 'scroll'}`}>
            <div className='container flex items-center justify-between'>
                <Link href={"/"} className='logo flex items-center gap-2'>
                    <span className='flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white font-bold'>T</span>
                    <span className='text-white font-bold text-[20px]'>TechCultureAi</span>
                </Link>


                <nav className={`flex items-center gap-7 fixed top-0 -right-[100%] lg:static bg-[#040416] lg:bg-transparent flex-col lg:flex-row h-screen lg:h-auto z-[101] opacity-0 lg:opacity-100 ${isOpenNav === true && 'opacity-100 right-0'}`}>
                    <Link href={"/about-us"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all' onClick={()=>setIsOpenNav(false)} >Who We Are </Link>
                    <Link href={"/services"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all' onClick={()=>setIsOpenNav(false)} >What We Do  </Link>
                    <Link href={"/portfolio"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all' onClick={()=>setIsOpenNav(false)} > Portfolio  </Link>
                    <Link href={"/technologies"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all' onClick={()=>setIsOpenNav(false)} >Technologies</Link>
                    <Link href={"/client-stories"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all' onClick={()=>setIsOpenNav(false)} >Client Stories </Link>
                    <Link href={"/team"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all' onClick={()=>setIsOpenNav(false)} >Our Experts  </Link>
                    <Link href={"/contact-us"} className='text-white text-[17px] opacity-90 hover:opacity-100 hover:text-primary transition-all' onClick={()=>setIsOpenNav(false)} >Contact Us  </Link>

                    <div className='flex lg:hidden w-full'>
                        <Button className='bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-2 !capitalize !font-bold' size='large' onClick={()=>setIsOpenNav(false)} >Schedule Demo</Button>
                    </div>

                </nav>

                <AiOutlineMenu size={30} className='block lg:hidden text-white' 
                onClick={()=>setIsOpenNav(true)} />

                {
                    isOpenNav === true &&
                    <div className='overlay w-full h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] visible lg:hidden'  onClick={()=>setIsOpenNav(false)} ></div>
                }



                <Button className='bg-gradient-to-r from-[#ff6333] via-[#e15226] to-[#fe9272] !text-white !rounded-md !px-6 !py-2 !capitalize !font-bold !hidden lg:!flex' size='large' onClick={()=>setIsOpenNav(false)} >Schedule Demo</Button>


            </div>
        </header>
    )
}

export default Header