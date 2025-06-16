import aboutImg from "/meetingHeroImg.jpg";

const AboutMissions = () => {
  return (
    <main className="relative">
      <div className="absolute top-0 left-0 w-full bg-[#11141B] h-full -z-20" />
      <div className="absolute top-0 left-0 md:w-[40%] w-full bg-[#1A1E25] h-full -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 my-12 py-16 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="flex md:justify-end justify-center mr-0 md:mr-12 mb-16 md:mb-0">
          <img
            src={aboutImg}
            alt="About Black Horse"
            className="md:w-[90%] w-[90%] h-[300px] md:h-[500px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center gap-6 mx-6 md:mx-0">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-sm text-gray-400">
            At Black Horse Consultancy and Management – F.Z.E, we are committed to empowering businesses through strategic management and human resources consultancy. Our solutions are designed to improve organizational efficiency, align workforce strategy with business goals, and create sustainable, people-centric growth.
          </p>

          <div className="flex flex-col gap-8 my-4">
            {/* Mission */}
            <div className="flex gap-2">
              <p>1</p>
              <div>
                <h2 className="font-bold">Our Mission</h2>
                <p className="text-xs text-gray-400">
                  To provide forward-thinking consultancy services that enhance business performance, optimize workforce potential, and drive innovation across every organizational level.
                </p>
              </div>
            </div>

            {/* Goals */}
            <div className="flex gap-2">
              <p>2</p>
              <div>
                <h2 className="font-bold">Our Goals</h2>
                <p className="text-xs text-gray-400">
                  Support clients in creating resilient business models and agile HR frameworks.  
                  <br />
                  Deliver measurable results through strategic planning, process optimization, and human capital development.
                </p>
              </div>
            </div>

            {/* Why Us */}
            <div className="flex gap-2">
              <p>3</p>
              <div>
                <h2 className="font-bold">Why Choose Us?</h2>
                <p className="text-xs text-gray-400">
                  We’re not just consultants—we’re your growth partners. With a blend of industry expertise, strategic thinking, and people-first solutions, we help turn your business challenges into long-term successes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMissions;
