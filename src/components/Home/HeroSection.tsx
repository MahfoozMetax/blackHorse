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
    title: "Bridging Vision with Execution",
    text: "Your reliable partner for tailored consultancy solutions. At BlackHorse Consultancy, we specialize in providing accurate insights and strategic support to help organizations turn challenges into growth opportunities.",
    image: "/workingHeroImg.jpg",
  },
  {
    title: "Expert Management & HR Consultancy",
    text: "Whether you're reimagining your business strategy, enhancing UX, or exploring new collaborative ventures, our consultancy services in management and human resources are here to support your transformation.",
    image: "/meetingHeroImg.jpg",
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
