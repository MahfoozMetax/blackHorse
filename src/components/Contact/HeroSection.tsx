import "./TextStyle/style.css";

const HeroSection = () => {
  return (
    <main className=" flex items-center justify-center  mb-12 fixed top-0 h-screen w-full -z-20">
      <div className="absolute -z-10 ">
        <h1 className="md:text-[17rem] text-[70px] fancy-outlined-text">
          CONTACT
        </h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="w-full h-[80vh] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-2 md:-ml-24 mx-3 md:mx-0 text-left">
            <p className="text-danger font-medium text-[19px] ">Let's</p>
            <h1 className="text-5xl font-bold">TALK ABOUT YOUR PROJECT.</h1>
            <p className="text-sm text-gray-400 ">
              Feel free to ask me any question or let's do to talk about our
              future collaboration.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
