import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature9 from "../../images/service-images/feature9.jpg";
import Footer from "../../components/Footer";

const Kundali_Analysis = () => {
  const imageArray = [
    {
          id: 9,
          image: feature9,
          HeadText: "Kundali Analysis - Unlock the Blueprint of Your Soul",
          paragraph1:
            "Kundali Analysis, also known as birth chart or horoscope analysis, is a powerful Vedic astrology tool that maps the position of planets at the time of your birth. This celestial blueprint reveals your life purpose, personality traits, karmic patterns, strengths, challenges, and the timing of key life events.",
          paragraph2:
            "What Kundali Analysis Can Reveal:.",
          paragraph3:
            "✨ Life Path & Soul Purpose - Understand your dharma (life mission) and karmic lessons.",
          paragraph4:
            "✨  Career & Financial Prospects - Identify your professional strengths and periods of growth or change.",
          paragraph5:
            "✨ Marriage & Relationships - Get clarity on love life, compatibility, and timing of significant relationships.",
          paragraph6:
            "✨ Health Insights - Discover physical or emotional tendencies based on planetary influences.",
          paragraph7:
            "✨ Favorable & Challenging Periods - Learn about dashas (planetary periods), transits, and remedies for smoother navigation.",
          paragraph8:
            "At MahakaalCosmicPortal, we provide in-depth Kundali Analysis to help you make aligned decisions, understand your soul's journey, and transform challenges into opportunities.",
          paragraph9:
            "Your birth chart is not just a prediction—it's a mirror to your divine design. Let the stars guide you to clarity, purpose, and fulfillment.",
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
        Kundali Analysis
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
export default Kundali_Analysis;