import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
const TeamSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  // interface DataTypes{
  //   image:string,
  //   name:string,
  //   positon:string
  // }
  const data: any = [
    {
      image: "/mike.jpg",
      name: "Mike Williams",
      positon: "CEO & President",
    },
    {
      image: "/teamMemberGuy.jpg",
      name: "Dan Morris",
      positon: "Operation Manager",
    },
    {
      image: "/Mahfooz.jpg",
      name: "Mahfooz Ul Haq",
      positon: "Full Stack Software Developer",
    },
  ];

  return (
    <main className=" relative ">
      {/* color div */}
      <div className="absolute right-0 left-0 w-full h-[100%] top-0 bg-primary -z-20" />

      <div className="absolute right-0 md:right-12 w-[100%] md:[47%] h-[100%] top-12 bg-[#1A1E25] -z-10" />
      <div className="grid lg:grid-cols-3 md:grid-col-2 grid-cols-1 max-w-6xl mx-auto pt-48 pb-32 ">
        <div className=" flex flex-col gap-6 ml-7 justify-center ">
          <p className="tracking-[12px] text-[12px] md:text-[18px] font-medium text-[#44584D]">
            EMPLOYEES
          </p>
          <h1 className="md:text-7xl text-4xl font-bold">OUR TEAM.</h1>
        </div>
        <div
          className="col-span-2 mt-16 lg:mt-0 md:mx-16 lg:mx-0"
          data-aos="fade-down"
        >
          {/* images grid */}
          <Swiper
            // slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((data: any) => (
              <SwiperSlide>
                <div className="relative mx-[20%] md:mx-0">
                  <img
                    src={data.image}
                    alt=""
                    className="h-[370px] w-full object-cover"
                  />
                  <div className="absolute bottom-0 text-center w-full bg-gray-900 p-5">
                    <h2 className="font-bold text-xl">{data.name}</h2>
                    <p className="font-light text-gray-400 font-montserrat">
                      {data.positon}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="grid grid-cols-3 gap-6 ">
            


          </div> */}
        </div>
      </div>
    </main>
  );
};

export default TeamSection;
