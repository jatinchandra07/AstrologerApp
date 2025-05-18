import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill} from "react-icons/bs";

const TopNavbar = () => {
  return (
    <div className=" h-[50px] relative z-10 flex justify-between items-center w-full m-auto px-20 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center text-[15px] justify-around mr-2">
          <BsTelephoneFill className="mr-1" />
          <p>+91 87504 73671 / 96257 41259</p>
        </div>
        <div className="flex items-center text-[15px] justify-around ml-2">
          <AiOutlineMail className="mr-1" />
          <p>support@mahakaalcosmicportal.com </p>
        </div>
      </div>
      <div className="flex justify-between w-[150px] ">
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
  );
};
export default TopNavbar;