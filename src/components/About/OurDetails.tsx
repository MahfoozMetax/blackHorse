import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const OurDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main>
      {/* main div */}
      <div className="max-w-6xl mx-auto">
        <div className="flex py-28 flex-col md:flex-row gap-4 px-5">
          <h1 className="text-3xl font-bold w-[100%]">Who We Are ?</h1>
          <p className="text-gray-400">
            At United Pre Construction, we bridge the gap between construction
            and technology by delivering expert solutions across multiple
            domains. With a strong foundation in the construction industry, we
            specialize in architectural design and detailed cost
            estimating—providing accurate material takeoffs and planning to
            ensure efficient, budget-conscious projects. In addition, our
            technology team offers cutting-edge web and software development
            services using the latest stacks including MERN (MongoDB, Express,
            React, Node.js) and Laravel/PHP. Whether you're a builder,
            architect, or business owner, we create tailored digital
            solutions—ranging from responsive websites to powerful construction
            management tools—that streamline operations and elevate your vision.
            We’re committed to blending industry expertise with modern
            innovation to support your success from concept to completion.
          </p>
        </div>
      </div>
    </main>
  );
};

export default OurDetails;
