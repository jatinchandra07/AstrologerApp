import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature10 from "../../images/service-images/feature10.jpg";
import Footer from "../../components/Footer";

const Mediumship = () => {
  const imageArray = [
    {
          id: 10,
          image: feature10,
          HeadText: "Mediumship - Bridging the Realms of Spirit and Soul",
          paragraph1:
            "Mediumship is the sacred ability to connect with spirits, ancestors, and higher realms to receive messages, guidance, and healing. A medium serves as a divine channel, facilitating communication between the physical world and the spiritual dimension, offering comfort, closure, and deeper understanding.",
          paragraph2:
            "What Mediumship Can Offer:",
          paragraph3: 
            "✨ Messages from Departed Loved Ones - Receive loving guidance, unresolved messages, or affirmation of their continued presence.",
          paragraph4:
            "✨ Spiritual Guidance - Connect with spirit guides, angels, and ascended beings for direction and clarity.",
          paragraph5:
            "✨ Emotional Healing & Closure - Find peace, forgiveness, and healing through soul-to-soul communication.",
          paragraph6:
            "✨ Validation of the Afterlife - Experience evidence-based insights that affirm the continuity of life beyond death.",
          paragraph7:
            "✨ Awakening Intuition & Spiritual Growth - Mediumship often opens your path to deeper soul awareness.",
          paragraph8:
            "At Mahakaal CosmicPortal, our mediumship sessions are conducted in a protected, high-vibrational space with deep respect for spirit and your healing journey. Whether you seek answers, comfort, or connection, mediumship offers a heart-centered bridge between worlds.",
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
        Mediumship
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
export default Mediumship;