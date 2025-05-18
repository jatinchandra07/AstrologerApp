import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature13 from "../../images/service-images/feature13.jpg";
import Footer from "../../components/Footer";

const Prashna_Kundali = () => {
  const imageArray = [
    {
          id: 13,
          image: feature13,
          HeadText: "Prashna Kundali – Instant Answers from the Cosmos",
          paragraph1:
            "Prashna Kundali, also known as Horary Astrology, is a precise and powerful branch of Vedic astrology used to answer specific questions based on the exact time and location the question is asked. Instead of using the birth chart, it creates a new chart—the Prashna chart—to reveal divine insights and accurate predictions related to your concern.",
          paragraph2:
            "What Prashna Kundali Can Help With:",
          paragraph3: 
            "❓ Yes/No Answers – Get clear direction on pressing questions about relationships, career, health, travel, or finances.",
          paragraph4:
            "❓ Missing Objects or People – Find clues regarding lost items or disconnected relationships.",
          paragraph5:
            "❓ Urgent Decision-Making – Seek clarity on time-sensitive choices or uncertain situations.",
          paragraph6:
            "❓ Unexpected Situations – When birth details are unavailable or situations arise suddenly, Prashna Kundali offers a reliable solution.",
          paragraph7:
            "❓ Outcome Prediction – Understand the success, timing, and outcome of a planned action or event.",
          paragraph8:
            "At Mahakaal Cosmic Portal, our Prashna Kundali readings combine astrological precision with intuitive insight, helping you make informed and aligned choices. Ask your question with a pure heart—and let the cosmos respond.",
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
        Prashna Kundali
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
export default Prashna_Kundali;