import aboutImg from "/cons.jpg";
const AboutMissons = () => {
  return (
    <main className=" relative">
      <div className="absolute top-0 left-0 w-full bg-[#11141B] h-[100%] -z-20" />

      <div className="absolute top-0 left-0 md:w-[40%] w-full bg-[#1A1E25] h-[100%] -z-10" />
      {/* main div */}
      <div className="grid grid-cols-1 md:grid-cols-2 my-12 py-16 max-w-6xl mx-auto">
        <div className="flex md:justify-end justify-center mr-0 md:mr-12 mb-16 md:mb-0">
          <img
            src={aboutImg}
            alt=""
            className="md:w-[90%] w-[90%] h-[300px] md:h-[500px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 mx-6 md:mx-0 ">
          <h1 className="text-4xl font-bold">About us.</h1>
          <p className="text-sm text-gray-400">
            To empower businesses and construction professionals with reliable
            design, accurate estimates, and cutting-edge digital tools that
            drive efficiency, clarity, and success.
          </p>
          <div className=" flex flex-col gap-8 my-4">
            <div className="flex gap-2">
              {/* numbering circle */}
              <p className="">1</p>
              <div>
                <h2 className="font-bold">Our Mission</h2>
                <p className="text-xs text-gray-400">
                  Build custom web and software solutions using MERN stack,
                  Laravel, and PHP to support businesses in the digital age.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {/* numbering circle */}
              <p className="">2</p>
              <div>
                <h2 className="font-bold">Our Goals</h2>
                <p className="text-xs text-gray-400">
                  Deliver innovative architectural design services that blend
                  functionality with aesthetic appeal.
                  <br />
                  Build custom web and software solutions using MERN stack,
                  Laravel, and PHP to support businesses in the digital age.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {/* numbering circle */}
              <p className="">3</p>
              <div>
                <h2 className="font-bold">Why Us?</h2>
                <p className="text-xs text-gray-400">
                  We’re more than a service provider—we’re your strategic
                  partner. Whether you're laying the foundation for a building
                  or building your digital presence, we combine technical
                  expertise with industry insight to ensure your vision becomes
                  reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMissons;
