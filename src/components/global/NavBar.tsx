import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../global/NavBar.css";
import logo from "../../assets/bablaLogo.svg";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
import { IoClose } from "react-icons/io5";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 left-0 right-0 px-4 lg:px-0 transition-all duration-300 ${
        scrolled ? "bg-[#1A1E25]" : ""
      }`}
    >
      <div className="flex justify-between my-4 items-center w-full max-w-6xl mx-auto font-syne">
        {/* logo div */}
        <div className="">
          <Link to={"/"}>
            <img src={logo} alt="" className="h-16" />
          </Link>
        </div>
        {/* list */}
        <div className="hidden md:block ">
          <ul className="flex gap-12 items-center text-[15px] font-semibold cursor-pointer">
            <li id="nav-li">
              <Link to={"/"}>Home</Link>
            </li>
            <li id="nav-li">
              {" "}
              <Link to={"/showcase"}>Services</Link>
            </li>
            <li id="nav-li">
              <Link to={"/about"}>About</Link>
            </li>
            <li id="nav-li">
              {" "}
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        {/* on mobile screen */}
        <div className=" md:hidden">
          <button className="" onClick={toggleSheet}>
            <div className="w-16 flex flex-col justify-centers p-2 rounded gap-2 ">
              <div className="border-2 w-[80%]"></div>
              <div className="border-2 w-[80%]"></div>
              <div className="border-2 w-[80%]"></div>
            </div>
          </button>
          <div
            className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-64 transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="p-4">
              <button
                className=" text-white text-4xl rounded"
                onClick={toggleSheet}
              >
                <IoClose />
              </button>

              <div className="">
                <ul className="flex flex-col gap-8 items-center text-xs font-semibold cursor-pointer">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/showcase"}>Services</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
