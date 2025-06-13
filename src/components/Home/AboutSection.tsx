import imacImg from "../../../public/imacAboutImg.jpg";
import laptopImg from "../../../public/aboutSecImglaptop.jpg";
import aboutImg from "../../../public/aboutSecImg.jpg";
import { RxDragHandleDots2 } from "react-icons/rx";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsPaintBucket } from "react-icons/bs";
import { LuMedal } from "react-icons/lu";

const AboutSection = () => {
  return (
    <main className="bg-primary mt-[100vh]">
      {/* main div */}
      <div className="max-w-6xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-4 py-20 mx-12 grid-cols-1">
          {/* image grid */}
          <div className="hidden lg:block">
            <div className="grid md:grid-cols-2 lg:pr-16 gap-4 items-center">
              <img src={imacImg} alt="" className="mt-[5%] rounded-2xl" />
              <div className="flex flex-col gap-4 md:mx-auto">
                <img src={laptopImg} alt="" className="rounded-2xl w-[300px]" />
                <img
                  src={aboutImg}
                  alt=""
                  className="rounded-2xl  w-[200px] h-[200px] object-cover"
                />
              </div>
            </div>
          </div>
          {/* text content div */}
          <div className="flex flex-col gap-6 my-6">
            <p className="flex items-center gap-2 ">
              <RxDragHandleDots2 className="text-xl text-[#44584D]" /> ABOUT US
            </p>
            <h1 className="text-4xl font-bold">Innovating Digital Solutions</h1>
            <p className="text-gray-400 ">
              At <span className="font-syne font-bold">Black Horse Consultancy</span> ,
              we specialize in transforming ideas into engaging digital
              experiences.Our expert team offers top-notch services and training
              in key areas of achitecture estimatings and software developments.
            </p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
              <div className="bg-[#11141B]  py-6 rounded">
                <div className="flex flex-col items-center justify-center gap-4 px-2">
                  <AiOutlineThunderbolt className="text-[silver] text-4xl" />
                  <h1 className="font-light text-center text-sm ">
                    IGNITING CREATIVITY
                  </h1>
                </div>
              </div>
              {/* no 2 card */}
              <div className="bg-[#11141B]  py-6 rounded">
                <div className="flex flex-col items-center justify-center gap-4 px-2">
                  <BsPaintBucket className="text-[silver] text-4xl" />
                  <h1 className="font-light text-center text-sm">
                    FOSTERING INNOVATION
                  </h1>
                </div>
              </div>
              {/* 3 no card */}
              <div className="bg-[#11141B] col-span-2 md:col-span-1  py-6 rounded">
                <div className="flex flex-col items-center justify-center gap-4 px-2">
                  <LuMedal className="text-[silver] text-4xl" />
                  <h1 className="font-light text-center text-sm ">
                    EMPOWERING DIGITAL MINDS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
