import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import './HeroSectionCss/style.css';
import "../Home/TestStyles/styles.css";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const data = [
    {
      title: "Web Development",
      image: "/workingHeroImg.jpg",
    },
    {
      title: "Architecture Designing",
      image: "/meetingHeroImg.jpg",
    },
  ];

  return (
    <main className="">
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((prod, index) => {
            const words = prod.title.split(/\s+/);
            const firstWord = words[0];
            const restOfTitle = words[1];

            return (
              <SwiperSlide key={index}>
                <div className="h-screen w-full relative">
                  <img
                    src={prod.image}
                    alt=""
                    className="h-screen w-full object-cover absolute -z-10"
                  />
                  <div
                    className="text-center text-white flex flex-col gap-6 items-center justify-center h-screen w-full"
                    data-aos="fade-right"
                  >
                    <h1 className="font-bold">
                      <span className="fancy-text text-[45px] md:text-[70px] -ml-24 md:-ml-40">
                        {firstWord}
                      </span>{" "}
                      <br />{" "}
                      <span className="md:ml-40 ml-6 text-[60px] md:text-[110px] text-[#0C0F16]">
                        {restOfTitle}
                      </span>
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </main>
  );
};

export default HeroSection;
