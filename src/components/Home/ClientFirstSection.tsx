import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import WideImg from "../../../public/background-clients.jpg";
import ProfilePic from "../../../public/profilePic.png";
import { FaCirclePlay } from "react-icons/fa6";
import CircularProgressBar from "../global/CircularProgressBar";
import Aos from "aos";
import "aos/dist/aos.css";
import { Pagination } from "swiper/modules";
import "../Home/clientfirstsectioncss/clientFirstSeection.css";

const ClientFirstSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main className="relative ">
      <div className="">
        <div className=" mx-auto pt-10 relative">
          <img
            src={WideImg}
            alt=""
            className="absolute top-0 -z-10 w-full object-cover h-[950px] md:h-[730px] lg:h-[500px]"
          />

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 max-w-6xl mx-auto px-5">
            <div className="flex flex-col gap-8">
              <FaCirclePlay className="text-7xl" />
              <h1 className="lg:text-5xl font-bold text-3xl" data-aos="fade-up">
                So that's us. There's no otherway to put it.{" "}
              </h1>
            </div>
            <div
              id="clientCard"
              className="bg-[#0C0F16] backdrop-blur-sm w-[100%] md:w-[50%] lg:w-[70%] h-auto mx-auto flex flex-col gap-7 text-black px-12 py-16"
              data-aos="fade-down"
            >
              <p className="text-xs text-gray-500">OUR HAPPY CLIENTS</p>
              <h1 className="font-bold text-[silver] md:text-2xl">
                What Client's Say?
              </h1>
              <Swiper
                className="mySwiper w-full cursor-pointer"
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <div className="flex flex-col gap-4 text-[grey]">
                    <p>Very cost effective and precise estimates.</p>
                    <div className="border border-gray-400 my-5" />
                    <div className="flex gap-2 items-center">
                      <img
                        src={ProfilePic}
                        alt=""
                        className="w-16 bg-gray-300 rounded-full p-2"
                      />
                      <div className="text-sm">
                        <h3 className=" text-white">ALEX REGELMAN</h3>
                        <p>CO-FOUNDER, COLABRIO</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col gap-4">
                    <p className="text-[grey]">
                      We got a fine and fully costumizeable software for our
                      business needs. Thank you Mahfooz for brilliant work.
                    </p>
                    <div className="border border-gray-400 my-5" />
                    <div className="flex gap-2 items-center">
                      <img
                        src={ProfilePic}
                        alt=""
                        className="w-16 bg-gray-300 rounded-full p-2"
                      />
                      <div className="text-sm">
                        <h3 className="font-bold text-white">Naina Mora</h3>
                        <p className="text-[grey]">CO-FOUNDER, USA Builds</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* progress bars */}

          <div className="bg-[#11141B] ">
            <div
              className="flex lg:-mt-24 max-w-6xl mx-auto gap-6 py-5 flex-col md:flex-row"
              data-aos="fade-down"
            >
              <div className="flex items-center gap-2">
                <CircularProgressBar percentage={"89"} />
                <div className="">
                  <p className="text-gray-600 text-xs">Management </p>
                  <h1 className="font-bold">Consultancies</h1>
                </div>
              </div>
              <div className="flex items-center">
                <CircularProgressBar percentage={"90"} />
                <div className="">
                  <p className="text-gray-600 text-xs">Human Resources </p>
                  <h1 className="font-bold">Consultancy</h1>
                </div>
              </div>
              {/* <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }} role="progressbar">70%</div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientFirstSection;
