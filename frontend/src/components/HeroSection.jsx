import React, { useEffect, useState } from "react";
import mbanner from "../images/mob.png";
import banner1 from "../images/cover.png";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";
import FeaturedServices from "./FeaturedServices";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 912);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImage = isSmallScreen ? mbanner : banner1;

  return (
    <>
      <div className="relative">
        <div className="fixed w-full h-screen">
          <img
            src={backgroundImage}
            alt=""
            className="top-10 left-0 w-full h-screen object-cover absolute"
          />
        </div>
        <div className="hidden md:block">
          <TopNavbar />
        </div>
        <BottomNavbar />
        {/* <About /> */}
        <div className=" flex justify-center items-center w-full absolute m-auto h-screen">
          <div className="absolute text-center top-[70%] md:top-[50%] lg:top-[80%]  right-10 md:right-14 lg:right-32 ">
            <Link to={"/appointment"}>
              <button className="text-white bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out ">
                Your Journey Begins Here
              </button>
            </Link>
          </div>
        </div>
        <FeaturedServices />
      </div>
    </>
  );
};

export default HeroSection;
