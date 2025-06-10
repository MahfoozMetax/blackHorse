import laptopHeroImg from "../../../public/ServiceCarousalLaptopImg.jpg";
const AboutHeroSec = () => {
  return (
    <main>
      <div className="bg-black/50 h-[70vh] w-full absolute top-0 flex justify-center items-center">
        <div className="text-center text-white flex flex-col gap-6">
          <h1 className="text-3xl md:text-7xl font-bold">About Us</h1>
          <p className="w-[70%] mx-auto font-light">
            Home /{" "}
            <span className="text-danger font-semibold text-xl">About Us</span>
          </p>
          {/* <a
                        href="#_"
                        className=" bg-transparent border-2 border-white px-5 py-2 md:py-4 w-[30%] md:w-[20%] w- mx-auto relative group overflow-hidden font-sm inline-block"
                    >
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-black">
                            Learn More
                        </span>
                    </a> */}
          {/* <button className="bg-transparent border-2 border-white px-5 py-4 w-[20%] mx-auto">
                  Learn More
                </button> */}
        </div>
      </div>
      <img
        src={laptopHeroImg}
        alt=""
        className="h-[70vh] w-full object-cover"
      />
    </main>
  );
};

export default AboutHeroSec;
