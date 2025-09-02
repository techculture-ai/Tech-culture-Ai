import React from 'react'
import Marquee from "react-fast-marquee";

const UserSaying = () => {
    return (
        <section className='py-20'>
            <div className='container'>
                <div className='flex items-center justify-center'>
                    <span className='bg-orange-50 p-1 px-3 border border-[#ffad4f] rounded-full 
                    text-[14px] text-primary'>Testimonials</span>
                </div>

                <h2 className='mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2'>What Our  <span className='text-gred'>Users are Saying</span></h2>

                <p className="text-gray-300 text-[20px] text-center">Hear from satisfied users of the AI Scheduling Assistant</p>

                <br />

                <div className='relative marquee__Wrapper'>
                    <Marquee className='marquee__'
                        direction={"left"}>
                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>

                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                    </Marquee>
                </div>

                <br />

                <div className='relative marquee__Wrapper'>
                    <Marquee className='marquee__'
                        direction={"right"}>
                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>

                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                        <div className='box w-full p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]'>
                            <div>
                                <div className='img rounded-full w-14 h-14 overflow-hidden'>
                                    <img src={"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"} alt='image' className='w-full h-full object-cover' />
                                </div>
                            </div>

                            <div className='info flex flex-col'>
                                <p className='text-gray-300 w-[350px]'>&quot;I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings!&ldquo;</p>

                                <h6 className='text-gray-300 font-[600] mt-2'>David Miller</h6>
                                <span className='text-yellow-600'>Project Manager at Tech Innovators</span>
                            </div>
                        </div>


                    </Marquee>
                </div>

            </div>
        </section>
    )
}

export default UserSaying
