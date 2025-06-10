import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Aos from "aos";
import "aos/dist/aos.css";
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./HeroSectionCss/style.css";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const data = [
    {
      title: "Transforming Plans into Reality",
      text: " Your trusted partner for comprehensive and perfect estimates. Superior Estimates combines accuracy with excellence, offering top-tier services to turn your challenges into opportunities and vision into reality",
      image: "/cons.jpg",
    },
    {
      title: "Fine Estimatings and Architectures",
      text: " If u need to redsign your new project,new visual strategy,ux structure or you do have some cool ideas for collaboration.",
      image: "/meetingHeroImg.jpg",
    },
    {
      title: "Software Development and Design",
      text: " If u need to develop a website or software, we can built it for you to boost your busiess",
      image: "/workingHeroImg.jpg",
    },
  ];
  return (
    <main className=" fixed top-0 h-screen w-full -z-20">
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((data) => (
            <SwiperSlide>
              <div className="bg-black/50 h-screen w-full absolute z-50 top-0 flex justify-center items-center">
                <div
                  className="text-center text-white flex flex-col gap-10 md:gap-6"
                  data-aos="fade-right"
                >
                  <h1 className="text-2xl md:text-6xl font-bold">
                    {data.title}
                  </h1>
                  <p className="w-[70%] mx-auto font-light">{data.text}</p>
                  <a
                    href="#_"
                    className=" bg-transparent border-2 border-white px-5 py-2 md:py-4 w-[50%] md:w-[20%] w- mx-auto relative group overflow-hidden font-sm inline-block"
                  >
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-black">
                      Learn More
                    </span>
                  </a>
                </div>
              </div>
              <img
                src={data.image}
                alt=""
                className="h-screen w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default HeroSection;
