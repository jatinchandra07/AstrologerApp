import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import Footer from "./Footer";
import { SiGooglemaps } from "react-icons/si";
import {
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiSupport,
} from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const initialFormValue = {
    fullName: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
// const a=import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY_ID_OF_PABLO_AC;
// console.log(a);
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID_OF_PABLO_AC,
        import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID_OF_PABLO_AC,
        form.current,
        import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY_ID_OF_PABLO_AC
      );
      console.log("Form Data", formData)
      console.log("Result after sending email to contact", result)
      setFormData(initialFormValue)
      alert("Message sent successfully!");

    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className=" bg-gray-100 py-6 flex flex-col sm:py-12 ">
        <div className="  m-auto sm:flex sm:items-center sm:justify-between w-[97%] md:w-[90%] lg:w-[70%] sm:m-auto">
          <div className="mb-[50px] border-2 md:w-[46%]">
            <div>
              <div className="flex p-3 gap-4">
                <div className="">
                  <SiGooglemaps size={35} className="cursor-pointer" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Address : </h3>
                  <p>
                    Gurugram, India
                  </p>
                </div>
              </div>
              <div className="flex p-3 gap-4 ">
                <div className="">
                  <BiLogoGmail size={35} className="cursor-pointer" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Email Address : </h3>
                  <p>support@mahakaalcosmicportal.com</p>
                </div>
              </div>
              <div className="flex p-3 gap-4 ">
                <div className="">
                  <BiSupport size={35} className="cursor-pointer" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Customer Support : </h3>
                  <p>We are available 24x7, click to start chat</p>
                </div>
              </div>

              <div className="flex p-3 gap-4 ">
                <div className="">
                  <FaPhone size={35} className="cursor-pointer" />
                </div>
                <div className="">
                  <h3 className="text-xl font-bold">Phone : </h3>
                  <p>+91 87504 73671</p>
                  <p>+91 96257 41259</p>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly ml-1 my-4 w-1/2  ">
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
          <div className="m-auto relative py-3 sm:max-w-xl sm:mx-auto mb-[50px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative py-10 bg-white border-2 shadow-lg sm:rounded-3xl sm:p-10 px-5">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-philosopher text-center">
                    Get in Touch
                  </h1>
                </div>
                <div className="">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-2 relative">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        name="fullName"
                        id="from_name"
                        required
                        autoComplete="off"
                        className="peer placeholder-transparent h-10 w-full px-7 pl-2 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Full Name*
                      </label>
                    </div>
                    <div className="my-3 relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=" Email Address*"
                        id="from_email"
                        autoComplete="off"
                        required
                        className="peer placeholder-transparent h-10 w-full px-7 pl-2 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                        Email Address*
                      </label>
                    </div>
                    <div className="my-3 relative">
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows=""
                        required
                        placeholder=" Type a message*"
                        autoComplete="off"
                        className="w-full py-2 border-b-2 border-gray-300 rounded-none focus:outline-none placeholder-gray-600"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white w-full rounded-sm px-2 py-1"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className=" animate-spin">Loading...</span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
