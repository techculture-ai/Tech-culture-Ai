import Button from '@mui/material/Button'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const Section4 = () => {

    const [isActive, setIsActive] = useState(0);

    const tabs = [
        "Face Recognition",
        "GIS Services",
        "Social Media Tracking",
        "Quick Promotion",
        "Real Time Chat",
        "AI Voice Calling"
    ]

    return (
        <section className='py-20'>
            <div className='container'>
                <div className='flex items-center justify-center gap-10'>
                    {
                        tabs?.length !== 0 && tabs?.map((item, index) => {
                            return (
                                <Button key={index} className={`bg-[#000319] !text-gray-300 !rounded-full !px-5 !py-2 !font-[600] !text-[18px] !capitalize hover:bg-[#222f47] items-center gap-2 ${isActive === index && '!bg-primary !text-white'}`}
                                    onClick={() => {
                                        setIsActive(index);
                                    }}
                                >
                                    {item}</Button>
                            )
                        })
                    }
                </div>



                <div className='py-10 flex items-center gap-10'>
                    <div className='video w-[28%] rounded-lg overflow-hidden'>
                        <ReactPlayer
                            src='/videos/facialrecongnition.mp4'
                            className='w-full'
                            loop={true}
                            playing={true}
                            controls={false}
                             />
                    </div>

                    <div className='info flex flex-col gap-2 w-[72%]'>
                        <h2 className='text-white txt-shadow text-[40px] font-bold'>Face Recognition </h2>

                        <p className='text-white text-[20px]'>With a 75% project success rate, Optivus redefining the possibilities of AI in every industry.</p>

                        <p className='text-white/80 text-[17px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Section4