import logo from "../../assets/Untitled-2.png";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const DetailsAndForm = () => {
  return (
    <main className="bg-[#11141B]">
      {/* main div */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto ">
        {/* contact div */}
        <div className="flex flex-col gap-10 bg-[#151921] px-6 py-16">
          <img src={logo} alt="" className="w-[170px]" />
          <ul className="flex flex-col gap-5">
            <li>
              Black Horse Consultancy and Management 
F.Z.E
            </li>
            <li className=" font-montserrat flex items-center gap-2">
              <MdOutlineMailOutline />{" "}
              <span className="md:block hidden">EMAIL :</span>{" "}
              <span className="font-montserrat font-light text-sm tracking-widest">
               info@blackhorseconsultancy.com
              </span>
            </li>
            
            <li className="flex items-start md:items-center gap-2">
              <FiMapPin />
              <span className="md:block hidden">Location :</span>{" "}
              <span className="font-montserrat font-light text-sm tracking-tight">
                B.C. 1300254 Ajman UAE
              </span>
            </li>
          </ul>
          <button className="bg-white border-white border-[1px] text-black w-[150px] py-3 hover:bg-transparent hover:text-white font-semibold transition-all duration-500 ease-out transform translate-y-0">
            <Link to={"/contact"}>Contact Us</Link>
          </button>
        </div>
        {/* form div */}
        <div className="flex flex-col w-[85%] md:w-full gap-4 px-6 py-16">
          <p>NEWSLATTER</p>
          <form action="" className="">
            <label
              htmlFor="email"
              className="block text-xs text-danger tracking-wider my-2"
            >
              Sign up to get notified about our latest ventures.
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Your Email"
                className="px-2  outline-none bg-[#14171E] flex-1 border-r-0 border-l-[1px] border-b-[1px] border-t-[1px] border-danger "
              />
              <button className="bg-white flex justify-center transition-all duration-500 ease-out transform translate-y-0 hover:text-white hover:bg-transparent md:h-[65px] h-[30px] w-20  border-l-0 border-r-[1px] border-b-[1px] border-t-[1px] border-danger p-5 text-black md:w-28 font-medium text-[12px] md:text-[15px] items-center">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DetailsAndForm;
