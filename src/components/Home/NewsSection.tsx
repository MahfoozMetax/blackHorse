// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// Import required modules
import { Pagination } from "swiper/modules";
import BlogCard from "../global/BlogCard";

const NewsSection = () => {
  const blogData = [
    {
      img: "./team-member-1.jpg",
      date: 5,
      admin: "By / Admin",
      para: " The Start-Up Ultimate Guide to Make Your WordPress Journal.",
    },
    {
      img: "./teamMemberGuy.jpg",
      date: 6,
      admin: "By / Admin",
      para: " The Start-Up Ultimate Guide to Make Your WordPress Journal.",
    },
    {
      img: "./teamMemberHijab.jpg",
      date: 7,
      admin: "By / Admin",
      para: " The Start-Up Ultimate Guide to Make Your WordPress Journal.",
    },
    {
      img: "./team-member-1.jpg",
      date: 8,
      admin: "By / Admin",
      para: " The Start-Up Ultimate Guide to Make Your WordPress Journal.",
    },
    {
      img: "./team-member-1.jpg",
      date: 9,
      admin: "By / Admin",
      para: " The Start-Up Ultimate Guide to Make Your WordPress Journal.",
    },
    {
      img: "./team-member-1.jpg",
      date: 10,
      admin: "By / Admin",
      para: " The Start-Up Ultimate Guide to Make Your WordPress Journal.",
    },
  ];

  return (
    <main className="bg-[#11141B] py-24">
      {/* main div */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 ml-7 items-center">
          <p className="tracking-[12px] md:text-[18px] text-[12px] text-danger font-medium">
            LATEST NEWS
          </p>
          <h1 className="md:text-7xl text-4xl font-bold leading-[100px]">
            OUR BLOGS.
          </h1>
        </div>
        <div className="my-16">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              748: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {blogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <BlogCard
                  image={blog.img}
                  date={blog.date}
                  admins={blog.admin}
                  paragraph={blog.para}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default NewsSection;
