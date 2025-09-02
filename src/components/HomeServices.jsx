"use client"
import Button from '@mui/material/Button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { servicesData } from '../app/data';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useSite } from '@/context/siteContext';
import axios from 'axios';

const HomeServices = () => {
    const [coreServices, setCoreServices] = React.useState([])
    const [mainServices, setMainServices] = React.useState([])
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const { serviceData, setServiceData } = useSite();

    useEffect(() => {
      const fetchServiceData = async () => {
        if (!serviceData) {
          try {
            const res = await axios.get(`${apiBaseUrl}/api/services`);
            setServiceData(res.data.services);
          } catch (error) {
            console.log(error);
          }
        }

        //filter according to the category if core added in the core otherwise main
        if (serviceData) {
          const tempCore = serviceData.filter(
            (service) => service.category === "core"
          );
          const tempMain = serviceData.filter(
            (service) => service.category === "main"
          );

          setCoreServices(tempCore);
          setMainServices(tempMain);
        }
      };

      fetchServiceData();
    }, [serviceData, setServiceData]);

    const [expendNum, setexpendNum] = useState(3);
    const [isExpend, setisExpend] = useState(false);

    useEffect(() => {
        isExpend === false ? setexpendNum(3) : setexpendNum(100)
    }, [isExpend])

    return (
        <section className="py-0 pb-10 bg-[#000319] serviceSection imageBg">
            <div className='container'>
                <h2 className='mainHd text-[50px] font-bold text-white leading-[60px] text-center'>Comprehensive <span className='text-gred'>Solutions</span></h2>
                <p className='text-white font-light text-[20px] py-3 text-center'>Transform your business with advanced technologies</p>
                <br/>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 py-4 services'>
                    {
                        servicesData?.length !== 0 && servicesData?.map((item, index) => {
                            if (index <= expendNum) {
                                return (
                                    <Link href={"#"} key={index} className='box h-96 rounded-md overflow-hidden relative group hover:-translate-y-3 transition-all'>
                                        <img src={item?.img} className='full transition-all h-full object-cover' alt='image' />
                                        <div className='info p-6 absolute top-0 left-0 z-50 w-full h-full '>
                                            <div className='flex justify-between items-center !absolute top-5 pr-5 w-[96%]'>
                                                <h2 className='text-gray-100 text-[25px] font-light px-5 leading-8'>{item?.name}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }

                        })
                    }


                </div>

                <div className='lg:flex items-center justify-center mt-10 hidden'>
                    <Button className='!bg-white !text-gray-800 !font-bold !capitalize items-center' size='large' onClick={() => setisExpend(!isExpend)}>View All Topics
                        {
                                isExpend === false ?  <IoIosArrowRoundDown size={30} /> :  <IoIosArrowRoundUp size={30} />
                        }

                       </Button>
                </div>


            </div>
        </section>
    )
}

export default HomeServices
