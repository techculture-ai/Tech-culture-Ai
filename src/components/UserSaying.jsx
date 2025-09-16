import { useSite } from '@/context/siteContext';
import axios from 'axios';
import React, { useEffect } from 'react'
import Marquee from "react-fast-marquee";
import { FaUserCircle } from 'react-icons/fa';

const UserSaying = () => {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
    const {
      testimonialData,
      setTestimonialData,
    } = useSite();

    useEffect(() => {
      const fetchTestimonialData = async () => {
        if (!testimonialData) {
          try {
            const res = await axios.get(`${apiBaseUrl}/api/testimonials`);
            setTestimonialData(res.data.testimonials);
            console.log("Testimonial data", res.data.testimonials);
          } catch (error) {
            console.log(error);
          }
        }
      };

      fetchTestimonialData();
    }, [testimonialData, setTestimonialData]);
    return (
      <section className="py-20">
        <div className="container">
          

          <h2 className="mainHd text-[40px] font-bold text-white leading-[60px] text-center mt-2">
            What Our <span className="text-gred">Users are Saying</span>
          </h2>

          <p className="text-gray-300 text-[20px] text-center">
            Hear from satisfied users of the AI Scheduling Assistant
          </p>

          <br />

          <div className="relative marquee__Wrapper">
            <Marquee className="marquee__" direction={"left"}>
              {testimonialData &&
                testimonialData.map((item) => (
                  <div
                    key={item._id}
                    className="box w-full min-h-[170px] p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]"
                  >
                    <div>
                      {/* <div className="img rounded-full w-14 h-14 overflow-hidden">
                        <img
                          src={item.image}
                          alt="image"
                          className="w-full h-full object-cover"
                        />
                      </div> */}
                      <FaUserCircle className="text-white text-6xl" />
                    </div>

                    <div className="info flex flex-col">
                      <p className="text-gray-300 w-[350px]">
                        &quot;{item.message}&ldquo;
                      </p>

                      <h6 className="text-gray-300 font-[600] mt-2">
                        {item.name}
                      </h6>
                      <span className="text-yellow-600">{item.title}</span>
                    </div>
                  </div>
                ))}
            </Marquee>
          </div>

          <br />

          <div className="relative marquee__Wrapper">
            <Marquee className="marquee__" direction={"right"}>
              {testimonialData &&
                testimonialData.map((item) => (
                  <div
                    key={item._id}
                    className="box w-full min-h-[170px] p-5 flex gap-4 bg-[#1e293b80] rounded-md border border-[rgba(255,255,255,0.1)]"
                  >
                    <div>
                      {/* <div className="img rounded-full w-14 h-14 overflow-hidden">
                        <img
                          src={item.image}
                          alt="image"
                          className="w-full h-full object-cover"
                        />
                      </div> */}
                      <FaUserCircle className="text-white text-6xl" />
                    </div>

                    <div className="info flex flex-col">
                      <p className="text-gray-300 w-[350px]">
                        &quot;{item.message}&ldquo;
                      </p>

                      <h6 className="text-gray-300 font-[600] mt-2">
                        {item.name}
                      </h6>
                      <span className="text-yellow-600">{item.title}</span>
                    </div>
                  </div>
                ))}
            </Marquee>
          </div>
        </div>
      </section>
    );
}

export default UserSaying
