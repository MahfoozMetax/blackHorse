import { useEffect } from "react";
import ClientsLogoSec from "../global/ClientsLogoSec";
import Aos from "aos";
import "aos/dist/aos.css";
const ClientSecondSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const ClientLogoImages = [
    {
      image: "/asicsLogo.png",
    },
    {
      image: "/asicsLogo.png",
    },
    {
      image: "/asicsLogo.png",
    },
    {
      image: "/asicsLogo.png",
    },
    {
      image: "/asicsLogo.png",
    },
    {
      image: "/asicsLogo.png",
    },
    {
      image: "/asicsLogo.png",
    },
    {
      image: "/asicsLogo.png",
    },
  ];

  return (
    <main className="py-16 bg-primary">
      {/* main div */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className=" flex flex-col gap-6 ml-7 justify-center">
            <p className="tracking-[12px] text-[12px] md:text-[18px] font-medium text-danger">
              CLIENTS
            </p>
            <h1 className="md:text-7xl text-4xl font-bold leading-[100px]">
              OUR CLIENTS
            </h1>
          </div>
          <div
            className="col-span-2 grid-cols-1 grid lg:grid-cols-4 md:grid-cols-2 gap-4 mx-auto"
            data-aos="fade-down"
          >
            {ClientLogoImages.map((client) => (
              <ClientsLogoSec image={client.image} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientSecondSection;
