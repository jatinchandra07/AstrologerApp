import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature3 from "../../images/service-images/feature3.jpg";
import Footer from "../../components/Footer";

const Numerology = () => {
  const imageArray = [
    {
      id: 3,
      image: feature3,
      HeadText: "Numerology - Decode the Secrets of Your Destiny",
      paragraph1:
        "Numerology is an ancient mystical science that reveals how numbers influence your life, personality, and destiny. By analyzing your birth date and name, numerology provides deep insights into your strengths, challenges, and life path, helping you make empowered choices.",
      paragraph2:
        "“At Mahakaal Cosmic Portal, we specialize in:”",
      paragraph3:
        "✨ Life Path & Destiny Numbers - Understand your core purpose and karmic lessons.",
      paragraph4:
        "✨ Name Numerology - Discover how the vibrations of your name impact your energy, success, and relationships. Learn if a name correction can enhance your fortune. ",
      paragraph5:
        "✨ Mobile Number Numerology - Your mobile number carries a unique energy signature. Find out if it aligns with your personal vibrations and attracts positive opportunities.",
      paragraph6:
        "✨ Compatibility & Relationship Numbers - Gain insight into the harmony between you and your loved ones through numerology.",
      paragraph7:
      "Unlock the hidden power of numbers and align your life with the universe's energy!",
    }
  ];
  return (
    <section>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className="w-full">
        <img
          src={banner3}
          alt="banner image"
          className="h-[50vh] object-cover w-full"
        />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-7 font-semibold mb-4 font-philosopher text-center">
        Numerology
        </h1>
      </div>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 text-center w-[90%] m-auto">
        {imageArray.map((item, index) => {
          return (
            <div className="m-auto border-2 w-[100%] h-auto px-7" key={item.id}>
              <img
                src={item.image}
                alt="feature image"
                className="w-[300px] m-auto rounded-full my-4"
              />
              <h3 className="font-bold text-xl my-3">{item.HeadText}</h3>
              <p className="text-gray-500">{item.paragraph1}</p>
              <p className="text-gray-800 my-4 font-bold">{item.paragraph2}</p>
              <p className="text-gray-500 my-3">{item.paragraph3}</p>
              <p className="text-gray-500 my-3">{item.paragraph4}</p>
              <p className="text-gray-500 my-3">{item.paragraph5}</p>
              <p className="text-gray-500 my-3">{item.paragraph6}</p>
              <p className="text-gray-500 my-3">{item.paragraph7}</p>
              <Link to={"/appointment"}>
                <button className="text-white my-5 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black hover:text-black transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default Numerology;
