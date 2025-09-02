"use client"
import React, { useState } from 'react'
import { technologiesData } from '../data'
import Button from '@mui/material/Button'
const Technologies = () => {

    const [isActive, setIsActive] = useState(0);
    const [isActiveTech, setIsActiveTech] = useState(technologiesData[0]);

    return (
        <section className='bg-[#000319] py-20 pt-10 imageBg'>
            <div className='container'>
                <div className='flex items-center justify-center'>
                    <span className='bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full 
                    text-[14px] text-primary'>Technologies</span>
                </div>

                <h2 className='mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2'>  <span className='text-gred'>Technologies</span> We Use</h2>

                <p className="text-gray-300 text-[20px] text-center">We leverage cutting-edge technologies and industry-leading tools to deliver exceptional solutions</p>

                <br />


                <div className='flex items-center justify-center flex-wrap gap-4 mt-4 technologies'>
                    {
                        technologiesData?.length !== 0 && technologiesData?.map((item, index) => {
                            return (
                                <Button key={index} className={`bg-[#000319] !text-gray-300 !rounded-full !px-5 !py-2 !font-[600] !text-[15px] !capitalize hover:bg-[#222f47] items-center gap-2 ${isActive === index && '!bg-primary !text-white'}`} 
                                onClick={() => {
                                    setIsActive(index);
                                    setIsActiveTech(item)
                                }}>
                                    <img src={item?.icon} alt="image" width={20} /> {item?.name}</Button>
                            )
                        })
                    }
                </div>

                <br />
                <br />


                {
                    isActiveTech &&
                    <div className='technologiesSection'>
                        <h2 className='text-center text-white text-[35px] font-bold'>{isActiveTech?.name}</h2>
                        <br />

                        <div className='p-8 bg-[#01051d] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div className='grid grid-cols-6 gap-8 texhCard'>
                                {
                                    isActiveTech?.data?.length !== 0 && isActiveTech?.data?.map((item, index) => {
                                        return (
                                            <div className='box bg-slate-800/50 p-3 rounded-lg flex flex-col 
                                            gap-2 justify-center text-center h-32 border border-[rgba(255,255,255,0.050)] transition-all hover:scale-110 hover:bg-slate-700' key={index}>
                                                    <img src={item?.img} alt='img' width={50} className='m-auto'/>
                                                    <h3 className='text-white/80 text-[15px] font-bold'>{item?.name}</h3>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                }



            </div>

        </section>
    )
}

export default Technologies