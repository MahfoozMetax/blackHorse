import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const BlogCard = ({ image, date, admins, paragraph }: any) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main>
      {/* main div */}
      <div className="flex flex-col md:flex-row" data-aos="fade-left">
        {/* image div */}
        <div className="md:h-[350px] md:w-[50%] h-[320px] w-full flex justify-center bg-[#1A1E25] pt-5 md:pt-0">
          <img src={image} alt="" className="h-[460px] w-[90%] object-cover" />
        </div>
        <div className="px-6 py-16 flex-1 flex flex-col gap-5 bg-[#1A1E25] ">
          <div>
            <p className="font-medium font-montserrat">
              {date}
              <span className="font-bold"> AUG</span>
            </p>
            <p className="text-danger font-medium text-sm">{admins}</p>
          </div>

          <p className="font-medium lg:text-xl text-lg font-montserrat py-3">
            {paragraph}
          </p>
          <button className="text-left bg-white flex justify-center hover:bg-transparent hover:text-white border-[1px font-medium] transition-all duration-300 text-black py-2 w-[50%]">
            READ MORE
          </button>
        </div>
      </div>
    </main>
  );
};

export default BlogCard;
