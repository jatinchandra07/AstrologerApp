import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature2 from "../../images/service-images/feature2.jpg";
import Footer from "../../components/Footer";

const TarotCardReading = () => {
  const imageArray = [
    {
      id: 2,
      image: feature2,
      HeadText: "Tarot Card Reading - Unlock the Wisdom of the Universe",
      paragraph1:
        "Tarot card reading is a powerful divination tool that provides insight, clarity, and guidance on various aspects of life. It taps into the subconscious mind and universal energies, helping you navigate challenges, make informed decisions, and align with your true path.",
      paragraph2:
        "“At Mahakaal Cosmic Portal, we offer exclusive subscription packages to ensure you receive continuous guidance and support:”",
      paragraph3:
        "✨ General Monthly Guidance - Stay aligned with the energies of each month. This package offers a personalized tarot reading at the beginning of every month to provide clarity on opportunities, challenges, and key focus areas.",
      paragraph4:
        "✨ Specific Life Aspect Guidance - Need insight into love, career, finances, or personal growth? This package delivers in-depth tarot guidance tailored to a specific area of your life, helping you move forward with confidence and clarity.",
      paragraph5:
        "Embrace the wisdom of the Tarot and let the universe illuminate your path!",
     
    },
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
        Tarot Card Reading
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

export default TarotCardReading;
