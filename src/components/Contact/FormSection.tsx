import { MdOutlineMail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const FormSection = () => {
  return (
    <main className=" mt-[80vh] bg-primary pt-5">
      <div className="max-w-6xl mx-auto">
        {/* main div */}
        <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mx-0">
          <div>
            <h1 className="text-4xl font-bold">Get In Touch.</h1>
            <form action="" className="flex flex-col gap-6 my-16">
              <input
                type="text"
                className="bg-[#0C0F16] border-b py-3 border-gray-500 w-full outline-none "
                placeholder="Name"
              />
              <input
                type="text"
                className="bg-[#0C0F16] border-b py-3 border-gray-500 w-full outline-none "
                placeholder="Email"
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                rows={5}
                className="bg-[#0C0F16] my-4 border p-2 border-gray-500 w-full outline-none"
              ></textarea>
              <button className=" text-left">
                <a
                  href="#_"
                  className=" bg-transparent border-2 border-white px-2 py-2 md:py-4 w-[150px] mx-auto relative group overflow-hidden text-sm inline-block"
                >
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                  <span className="relative group-hover:text-black flex justify-center">
                    SEND MESSAGE
                  </span>
                </a>
              </button>
            </form>
          </div>
          {/* contact section */}
          <div className="md:mx-16 flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Contact Info.</h1>
            <div className="flex flex-col gap-3">
              <h2>LET'S TALK</h2>
              <p className="text-gray-400 flex items-center gap-2">
                {" "}
                <span>
                  <MdOutlineMail />
                </span>{" "}
                info@unitedpreconstruction.com
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2>VISIT US.</h2>
              <p className="text-gray-400 flex items-center gap-2">
                <span>
                  <FiMapPin />
                </span>{" "}
                100 Business Park LN, Unit E, Miltlon , Delaware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormSection;
