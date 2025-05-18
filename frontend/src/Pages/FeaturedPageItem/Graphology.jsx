import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature11 from "../../images/service-images/feature11.jpg";
import Footer from "../../components/Footer";

const Graphology = () => {
  const imageArray = [
    {
          id: 11,
          image: feature11,
          HeadText: "Graphology - Discover the Power of Handwriting Analysis",
          paragraph1:
            "Graphology is the fascinating science of analyzing handwriting to reveal deep insights into an individual’s personality, emotional state, behavior patterns, and subconscious mind. Your handwriting is a mirror of your inner world—every stroke, curve, and pressure tells a story about who you are and how you think, feel, and relate to life.",
          paragraph2:
            "What Graphology Can Reveal:",
          paragraph3: 
            "✍ Personality Traits - Uncover confidence levels, emotional expression, decision-making style, and leadership qualities.",
          paragraph4:
            "✍ Mental & Emotional Health - Detect signs of stress, anxiety, overthinking, or suppressed emotions.",
          paragraph5:
            "✍ Relationship Compatibility - Understand how you communicate and connect with others.",
          paragraph6:
            "✍ Career Alignment - Identify natural talents, working style, and professional potential.",
          paragraph7:
            "✍ Behavioral Patterns & Blocks – Bring awareness to subconscious habits and limiting beliefs.",
          paragraph8:
            "At Mahakaal CosmicPortal, our Graphology sessions offer intuitive and scientific analysis of your handwriting, empowering you with self-awareness and tools for transformation. Whether for personal growth, relationship understanding, or career clarity, handwriting reveals what the heart hides.",
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
        Graphology
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
export default Graphology;