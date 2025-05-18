import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature8 from "../../images/service-images/feature8.jpg";
import Footer from "../../components/Footer";

const Face_Reading = () => {
  const imageArray = [
    {
          id: 8,
          image: feature8,
          HeadText: "Face Reading - Discover the Story Written on Your Face",
          paragraph1:
            "Face Reading, also known as Physiognomy, is an ancient art of interpreting facial features to reveal deep insights about a person’s personality, emotions, destiny, and life patterns. Every line, curve, and expression on the face holds symbolic meaning, reflecting your inner nature and life experiences.",
          paragraph2:
            "What Face Reading Can Reveal:",
          paragraph3: 
            "✨ Personality Traits - Understand core behavioral patterns, strengths, and weaknesses.",
          paragraph4:
            "✨ Emotional Tendencies - Decode how you express and process emotions through facial features.",
          paragraph5:
            "✨ Career & Success Indicators - Identify signs of leadership, creativity, stability, and financial potential.",
          paragraph6:
            "✨ Health & Vitality - Uncover signs of physical and emotional imbalances reflected on the face.",
          paragraph7:
            "✨ Life Path & Relationships - Gain clarity about life purpose, timing of major events, and compatibility with others.",
          paragraph8:
            "At MahakaalCosmicPortal, our face reading sessions offer profound insights by blending traditional wisdom with intuitive observation. Your face is a living map—let it guide you toward self-awareness, empowerment, and alignment with your destiny.",
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
        Face Reading
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
export default Face_Reading;