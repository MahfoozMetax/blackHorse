import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import ClientFirstSection from "./ClientFirstSection";
import NewsSection from "./NewsSection";
import RecalSection from "./RecalSection";
import DetailsAndForm from "./DetailsAndForm";

const HomePage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <HeroSection />
      {/* <div className="w-full h-screen" /> */}

      <AboutSection />
      <ServiceSection />
      <ClientFirstSection />
      <NewsSection />
      <RecalSection />
      <DetailsAndForm />

      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
