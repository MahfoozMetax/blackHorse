import HeadingSection from "../global/HeadingSection";
import ServiceCard from "../global/ServiceCard";
import { BsPaintBucket } from "react-icons/bs";
import meetingHeroImg from "../../../public/aboutSecImg.jpg";
import { useEffect, useState } from "react";
import { CountAnimation } from "../global/CountAnimation";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { LuMedal } from "react-icons/lu";
import { MdOutlineGraphicEq } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
// import React, { useRef, useState } from 'react';
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ServiceSectionProjectsCss/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [activeIndex] = useState(0);
  console.log(activeIndex);

  // const ServiceCrousalSection={
  //   {
  //     images:carousalLaptopImg

  //   }
  // }

  return (
    <main className="relative">
      <div className="w-full  h-[2500px] md:h-[2000px] lg:h-[1000px] bg-primary absolute  -z-20" />
      <div className="relative max-w-6xl mx-auto ">
        <HeadingSection />
        <div
          className="grid lg:grid-cols-4 md:grid-cols-2 mt-16 px-5 lg:px-0"
          data-aos="fade-right"
        >
          <div className="w-full relative ">
            <div className="bg-black/50 absolute flex justify-center items-center  h-[370px] w-full">
              <div className="text-center text-white flex flex-col gap-6 ">
                <h1 className=" text-2xl  font-bold">Best Of Our Services</h1>

                <Link to={"/showcase"}>
                  <a
                    href=""
                    className=" bg-transparent border-2 border-white px-5 py-4  mx-auto relative group overflow-hidden font-medium inline-block"
                  >
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-black">
                      See All Services
                    </span>
                  </a>
                </Link>
                {/* <button className="bg-transparent border-2 border-white px-5 py-4 w-[20%] mx-auto">
                  Learn More
                </button> */}
              </div>
            </div>
            <img src={meetingHeroImg} alt="" className="h-[370px] w-full  " />
          </div>

   <ServiceCard
  icon={<BsPaintBucket className="text-[silver] text-4xl" />}
  color={"bg-[#181B21]"}
  title="Organizational Strategy"
  subtitle="Designing customized business strategies to boost performance, streamline operations, and drive growth."
/>
<ServiceCard
  icon={<MdOutlineGraphicEq className="text-[silver] text-4xl" />}
  color={"bg-[#1A1E25]"}
  title="Workforce Planning & Development"
  subtitle="Enhancing human capital through talent mapping, training programs, and effective resource planning."
/>
<ServiceCard
  icon={<GiSkills className="text-[silver] text-3xl" />}
  color={"bg-[#20242C]"}
  title="Performance & Process Optimization"
  subtitle="Improving organizational efficiency through data-driven analysis, process refinement, and strategic consultancy."
/>

        </div>
        {/* count animation */}
        <div className="relative my-28">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 lg:divide-x gap-8 lg:gap-0">
            <CountAnimation
              icon={
                <BsPaintBucket className="text-gray-600 absolute -z-10 w-28 h-32" />
              }
              initialValue={0}
              targetValue={2400}
              text="Happy Clients"
            />
            <CountAnimation
              icon={
                <IoBagHandleOutline className="text-gray-600 absolute -z-10 w-28 h-32" />
              }
              initialValue={0}
              targetValue={133}
              text="Completed Projects"
            />
            <CountAnimation
              icon={
                <IoCloudDownloadOutline className="text-gray-600 absolute -z-10 w-28 h-32" />
              }
              initialValue={0}
              targetValue={25000}
              text="Files Downloaded"
            />
            <CountAnimation
              icon={
                <LuMedal className="text-gray-600 absolute -z-10 w-28 h-32 " />
              }
              initialValue={0}
              targetValue={46}
              text="Award Win"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceSection;
