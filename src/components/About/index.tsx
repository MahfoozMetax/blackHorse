import ClientFirstSection from "../Home/ClientFirstSection";
import DetailsAndForm from "../Home/DetailsAndForm";
import RecalSection from "../Home/RecalSection";
import TeamSection from "../Home/TeamSection";
import AboutHeroSec from "./AboutHeroSec";
import AboutMissons from "./AboutMissons";
import OurDetails from "./OurDetails";

const AboutPage = () => {
  return (
    <>
      <AboutHeroSec />
      <OurDetails />
      <div className="my-24">
        <ClientFirstSection />
      </div>
      {/*  team section*/}
      <TeamSection />
      <AboutMissons />
      <RecalSection />
      <DetailsAndForm />
    </>
  );
};

export default AboutPage;
