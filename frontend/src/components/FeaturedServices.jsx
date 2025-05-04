import React, { useState } from "react";
import FeaturedVideoEmbed from "./FeaturedVideoEmbed";
import About from "../Pages/About";
import Footer from "./Footer";
import "../App.css";
import feature1 from "../images/service-images/feature1.jpg";
import feature2 from "../images/service-images/feature2.jpg";
import feature3 from "../images/service-images/feature3.jpg";
import feature4 from "../images/service-images/feature4.jpg";
import feature5 from "../images/service-images/feature5.jpg";
import feature6 from "../images/service-images/feature6.jpg";
import feature7 from "../images/service-images/feature7.jpg";
import feature8 from "../images/service-images/feature8.jpg";
import feature9 from "../images/service-images/feature9.jpg";
import feature10 from "../images/service-images/feature10.jpg";
import feature11 from "../images/service-images/feature11.jpg";
import feature12 from "../images/service-images/feature12.jpg";
import feature13 from "../images/service-images/feature13.jpg";
import feature14 from "../images/service-images/feature14.jpg";
import ClientStories from "./ClientStories";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const imageArray = [
    {
      image: feature1,
      navigatePath: "Humkara-with-Haleem",
      HeadText: "Humkara with Haleem",
      paragraph:
        "Humkara heals and Haleem seals the transformation.",
    },
    {
      image: feature2,
      navigatePath: "Tarot-Card-Reading",
      HeadText: "Tarot Card Reading",
      paragraph:
        "The Cards know what you need.",
    },
    {
      image: feature3,
      navigatePath: "numerology",
      HeadText: "Numerology",
      paragraph:
        "Understand the life's path with your date of birth.",
    },
    {
      image: feature4,
      navigatePath: "Aura&ChakraScanning",
      HeadText: "Aura & chakra Scanning",
      paragraph:
        "Decode your aura and restore the balance.",
    },
    {
      image: feature5,
      navigatePath: "palmistry",
      HeadText: "Palmistry",
      paragraph:
        "Your Souls story is on your palms.",
    },
    {
      image: feature6,
      navigatePath: "Animal-Energy-Healing",
      HeadText: "Animal energy healing",
      paragraph:
        "Support your pet's wellness-energetically",
    },
    {
      image: feature7,
      navigatePath: "Angelic-Healing",
      HeadText: "Angelic Healing",
      paragraph:
        "",
    },
    {
      image: feature8,
      navigatePath: "Face-Reading",
      HeadText: "Face Reading",
      paragraph:
        "",
    },
    {
      image: feature9,
      navigatePath: "Kundali-Analysis",
      HeadText: "Kundali Analysis",
      paragraph:
        "",
    },
    {
      image: feature10,
      navigatePath: "Mediumship",
      HeadText: "Mediumship",
      paragraph:
        "",
    },
    {
      image: feature11,
      navigatePath: "Graphology",
      HeadText: "Graphology",
      paragraph:
        "",
    },
    {
      image: feature12,
      navigatePath: "Lal-Kitab",
      HeadText: "Lal Kitab",
      paragraph:
        "",
    },
    {
      image: feature13,
      navigatePath: "Prashna-Kundali",
      HeadText: "Prashna Kundali",
      paragraph:
        "",
    },
    {
      image: feature14,
      navigatePath: "Vastu",
      HeadText: "Vastu",
      paragraph:
        "",
    },
  ];

  const [isFlippedArray, setIsFlippedArray] = useState(Array(14).fill(false));

  const handleFlip = (index) => {
    const updatedArray = [...isFlippedArray];
    updatedArray[index] = !updatedArray[index];
    setIsFlippedArray(updatedArray);
  };

  return (
    <>
      <div className=" absolute mt-[1620px] md:mt-[1200px] lg:mt-[1160px] bg-white w-full">
        <About />
        <div>
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher mt-[800px] md:mt-[300px] lg:mt-[150px] mb-5">
            Featured Services
          </h1>
        </div>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center w-[90%] m-auto">
          {isFlippedArray.map((isFlipped, index) => (
            <div
              key={index}
              className={`border px-3 py-3 ${isFlipped ? "flipped" : ""}`}
              onMouseEnter={() => handleFlip(index)}
              onMouseLeave={() => handleFlip(index)}
            >
              <div className={`flipper ${isFlipped ? "flipped" : ""}`}>
                <div className="front">
                  <img
                    src={imageArray[index].image}
                    alt=""
                    className="m-auto object-cover"
                  />
                </div>
                <div className="back">
                  <h3 className="text-center m-auto font-bold">
                    {imageArray[index].HeadText}
                  </h3>
                  <div className="w-[90%] m-auto">
                    <p className="text-[14px]">{imageArray[index].paragraph}</p>
                  </div>
                  <Link to={imageArray[index].navigatePath}>
                    <button className="text-white mt-2 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                      Get Started Here
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <FeaturedVideoEmbed embedID="LK6oYTQ3-6M" />
        </div>
        <div className=" m-auto w-[50%] mb-4">
          <h1 className=" text-2xl text-center md:text-3xl lg:text-4xl m-3 font-philosopher">
            Client Stories
          </h1>
          <p className="text-center">
            Explore the inspiring success stories of individuals whose lives
            have been positively impacted by Achariya Debtauua guidance and
            expertise.
          </p>
        </div>
        <div>
          <ClientStories />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
