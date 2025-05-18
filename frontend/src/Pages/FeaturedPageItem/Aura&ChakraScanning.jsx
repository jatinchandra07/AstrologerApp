import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature4 from "../../images/service-images/feature4.jpg";
import Footer from "../../components/Footer";

const Palmistry = () => {
  const imageArray = [
    {
      id: 4,
      image: feature4,
      HeadText: "Aura & Chakra Scanning - Decode Your Energy Field",
      paragraph1:
          "Your aura and chakras are the energetic blueprint of your being, reflecting your physical, emotional, mental, and spiritual state. Aura & Chakra Scanning is a powerful diagnostic tool that helps identify imbalances, blockages, and strengths within your energy field.",
      paragraph2:
          "What We Offer:",
      paragraph3:
          "✨ Aura Scanning - Analyzes the colors, strength, and patterns of your aura to reveal emotional and spiritual well-being.",
      paragraph4:
          "✨ Chakra Scanning - Detects blockages in the seven main chakras, ensuring optimal energy flow for balance and harmony.",
      paragraph5:
          "✨ Energy Imbalance Detection - Identifies negative influences, past traumas, and areas needing healing.",
      paragraph6:
          "✨ Personalized Healing Recommendations - Get insights into practices, crystals, or remedies to restore energetic alignment.",
      paragraph7:
          "By understanding your energy field, you can take proactive steps toward healing, self-awareness, and spiritual growth. Experience Aura & Chakra Scanning to realign with your true self and elevate your vibrational frequency!.",
     
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
        Aura & Chakra Scanning
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

export default Palmistry;
