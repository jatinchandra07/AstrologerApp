import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature5 from "../../images/service-images/feature5.jpg";
import Footer from "../../components/Footer";

const Palmistry = () => {
  const imageArray = [
    {
      id: 5,
      image: feature5,
      HeadText: "Palmistry - The Blueprint of Your Destiny",
      paragraph1:
        "Palmistry, or Chiromancy, is an ancient divination art that reveals insights about your personality, life path, strengths, and challenges by analyzing the lines, mounts, and shapes of your hands. Your palms hold the imprints of your past, present, and future, making them a powerful tool for self-discovery and guidance.",
      paragraph2:
        "“What Palmistry Can Reveal:”",
      paragraph3: 
        "✨ Life Path & Destiny - Understand your true purpose and karmic lessons.",
      paragraph4:
        "✨ Career & Financial Growth - Identify potential opportunities and challenges in your professional journey.",
      paragraph5:
        "✨ Relationships & Compatibility - Gain clarity on love, marriage, and emotional connections.",
      paragraph6:
        "✨ Health & Vitality - Decode physical and mental well-being through the lines and mounts of the palm.",
      paragraph7:
      "✨ Spiritual Insights - Discover hidden talents, psychic abilities, and past-life influences.",
      paragraph8:
      "At Academy of Universal Mysticism, we offer detailed palm readings to help you navigate life's journey with confidence and wisdom. Unlock the secrets within your hands and embrace the guidance they hold for your future!",
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
          Palmistry
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
              <p className="text-gray-500 my-3">{item.paragraph8}</p>
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
export default Palmistry;
