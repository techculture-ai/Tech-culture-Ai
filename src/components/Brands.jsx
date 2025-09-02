import { useSite } from '@/context/siteContext';
import axios from 'axios';
import React, { useEffect } from 'react'
import Marquee from "react-fast-marquee";
export const Brands = () => {

  const { settingsData, setSettingsData } = useSite();
  useEffect(() => {
    async function fetchData() {
      if (!settingsData) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/site-settings`
          );
          if (res.status === 200) {
            setSettingsData(res.data.data);
            console.log("im data ", res.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [settingsData, setSettingsData]);

  return (
    <div className=' brands py-20 pb-0 pt-10'>
      <div className='container flex items-center gap-7'>
       <div className='w-[25%] txtWrapper'>
         <h2 className='text-white/80 text-[22px]'>Trusted by <br />3200+ brands worldwide</h2>
       </div>

        <div className='relative marquee__Wrapper w-[75%]'>
          <Marquee className='marquee__' direction={"left"}>
            <div className='box bg-[#1e293b80] p-11 flex items-center justify-center rounded-lg h-28 w-52'>
              <img src={"https://seoc-html-v2.vercel.app/assets/img/elements/brand-img4.png"}
                className='w-full' alt='image' />
            </div>

            <div className='box bg-[#1e293b80] p-11 flex items-center justify-center rounded-lg h-28 w-52'>
              <img src={"https://seoc-html-v2.vercel.app/assets/img/elements/brand-img1.png"}
                className='w-full' alt='image' />
            </div>

            <div className='box bg-[#1e293b80] p-11 flex items-center justify-center rounded-lg h-28 w-52'>
              <img src={"https://seoc-html-v2.vercel.app/assets/img/elements/brand-img2.png"}
                className='w-full' alt='image' />
            </div>

            <div className='box bg-[#1e293b80] p-11 flex items-center justify-center rounded-lg h-28 w-52'>
              <img src={"https://seoc-html-v2.vercel.app/assets/img/elements/brand-img2.png"}
                className='w-full' alt='image' />
            </div>

             <div className='box bg-[#1e293b80] p-11 flex items-center justify-center rounded-lg h-28 w-52'>
              <img src={"https://seoc-html-v2.vercel.app/assets/img/elements/brand-img4.png"}
                className='w-full' alt='image' />
            </div>

            <div className='box bg-[#1e293b80] p-11 flex items-center justify-center rounded-lg h-28 w-52'>
              <img src={"https://seoc-html-v2.vercel.app/assets/img/elements/brand-img1.png"}
                className='w-full' alt='image' />
            </div>

            <div className='box bg-[#1e293b80] p-11 flex items-center justify-center rounded-lg h-28 w-52'>
              <img src={"https://seoc-html-v2.vercel.app/assets/img/elements/brand-img2.png"}
                className='w-full' alt='image' />
            </div>

            <div className='box bg-[#1e293b80] p-11 flex items-center justify-center rounded-lg h-28 w-52'>
              <img src={"https://seoc-html-v2.vercel.app/assets/img/elements/brand-img2.png"}
                className='w-full' alt='image' />
            </div>

          </Marquee>
        </div>
      </div>
    </div>
  )
}
