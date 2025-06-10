import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface PageProps {
  color: string;
  icon: any;
  title: string;
  subtitle: string;
}

const ServiceCard = ({ color, icon, title, subtitle }: PageProps) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main className={`${color} `} data-aos="fade-right">
      {/* content div */}
      <div className="flex flex-col text-center items-center justify-center h-[370px] gap-5 px-4 ">
        {icon}
        {/* <BsPaintBucket className="text-green-300  " /> */}
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="font-light text-gray-200">{subtitle}</p>
      </div>
    </main>
  );
};

export default ServiceCard;
