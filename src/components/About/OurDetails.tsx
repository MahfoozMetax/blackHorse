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
  At Black Horse Consultancy and Management – F.Z.E, we empower organizations by combining strategic insight with innovative solutions across management and human resources. With deep expertise in business consulting, we help clients streamline operations, enhance organizational structure, and align strategies with long-term goals. Our HR consultancy services cover everything from talent acquisition and workforce planning to employee engagement and development, ensuring businesses build strong, adaptable teams. Whether you're a startup or an established enterprise, we deliver customized strategies and solutions that drive efficiency, boost performance, and support sustainable growth. At Black Horse, we’re dedicated to guiding your business forward—effectively, strategically, and with impact.
</p>

        </div>
      </div>
    </main>
  );
};

export default OurDetails;
