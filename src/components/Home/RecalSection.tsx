import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../Contact/TextStyle/style.css";
const RecalSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main className="bg-gradient-to-tl from-primary to-gray-800 py-4 md:py-0">
      {/* mian div */}
      <div className="max-w-6xl mx-auto" data-aos="fade-right">
        <div className="flex justify-between flex-col md:flex-row gap-6">
          <div className=" flex flex-col gap-2 px-5 justify-center md:h-[250px]">
            <p className="text-sm tracking-[4px] text-green-300 font-medium">
              LET'S TALK
            </p>
            <h1 className="text-xl md:text-4xl lg:text-6xl font-bold">
              <span className="fancy-outlined-text">ABOUT YOUR</span> NEXT
              PROJECT<span className="fancy-text">.</span>
            </h1>
          </div>
          <button>
            <Link to={"/contact"} className="relative text-left m-5">
              <a
                href="#_"
                className=" bg-transparent border-2 border-white px-5 py-4 relative group overflow-hidden font-bold inline-block "
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-black text-sm">
                  Get In Touch
                </span>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default RecalSection;
