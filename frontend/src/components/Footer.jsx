import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="m-auto w-full bg-black pt-4">
      <div className="text-white bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-3 ml-2 font-poppins">Services</h2>
          <ul className="ml-2 text-[16px]">
            <Link to="/Humkara-with-Haleem">
              <li className="">Humkara with Haleem </li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />
            <Link to="/Tarot-Card-Reading">
              <li className="">Tarot Card Reading </li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/numerology">
              <li className="">Numerology</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Aura&ChakraScanning">
              <li className="">Aura & chakra Scanning</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/palmistry">
              <li className="">Palmistry</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Animal-Energy-Healing">
              <li className="">Animal energy healing</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Angelic-Healing">
              <li className="">Angelic Healing</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Face-Reading">
              <li className="">Face Reading</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Kundali-Analysis">
              <li className="">Kundali Analysis</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Mediumship">
              <li className="">Mediumship</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Graphology">
              <li className="">Graphology</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Lal-Kitab">
              <li className="">Lal Kitab</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Prashna-Kundali">
              <li className="">Prashna Kundali</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/Vastu">
              <li className="">Vastu</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3 ml-2 font-poppins">
            Quick Links
          </h2>
          <ul className="ml-2 text-[16px]">
            <Link to="/about-page">
              <li>About Me</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/services">
              <li>Services</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />

            <Link to="/appointment">
              <li>Appointment</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />
            <Link to="/team">
              <li>Team</li>
            </Link>
            <hr className="border border-s-violet-400 border-gray-300 my-2 m-auto" />
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3 font-poppins ml-2">
            Get In Touch
          </h2>
          <div className="text-[16px] ml-2">
            <p>Gurugram, India</p>
            <p>Email: support@mahakaalcosmicportal.com</p>
            <p>Phone: +91 87504 73671</p>
            <p>Phone: +91 96257 41259</p>
          </div>
          {/* Social icons div here */}
          <div className="flex justify-between md:ml-2 lg:ml-2 w-[150px] m-auto mt-[70px]">
            <div className="bg-[#1877F2] rounded-full p-1 cursor-pointer">
            <a href="https://www.facebook.com/share/1BuM2E3oEn/ ">
              <BiLogoFacebook className="text-2xl text-white" />
              </a>
            </div>
            <div className="bg-[#d63384] rounded-full p-1 cursor-pointer">
            <a href="https://www.instagram.com/mahakaalcosmicportal?igsh=Mjd4czh0ZG85dWxt">
              <BiLogoInstagram className="text-2xl text-white" />
              </a>
            </div>
            <div className="bg-[#0072b1] rounded-full p-1 cursor-pointer">
            <a href="https://www.linkedin.com/in/kuppuswami-shriram-kartik-astrologer?utm_
          source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <BiLogoLinkedin className="leading-3 text-[24px] text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className=" w-[90%] border-s-violet-400 border-gray-300 my-10 mb-2 m-auto" />
      </div>
      <div className="m-auto text-center text-white pb-2">
        Designed by Jatin Chandra
      </div>
    </div>
  );
};

export default Footer;
