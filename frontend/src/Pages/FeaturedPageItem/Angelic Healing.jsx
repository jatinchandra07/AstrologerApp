import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature7 from "../../images/service-images/feature7.jpg";
import Footer from "../../components/Footer";

const Angelic_Healing = () => {
  const imageArray = [
    {
          id: 7,
          image: feature7,
          HeadText: "Angelic Healing - Connect with Divine Light & Guidance",
          paragraph1:
            "Angelic Healing is a gentle yet powerful spiritual practice that involves working with high-vibrational angelic beings to bring emotional, mental, physical, and spiritual healing.",
          paragraph2:
            "These celestial energies offer unconditional love, protection, and divine support, helping you release fear, pain, and energetic blockages.",
          paragraph3: 
            "What Angelic Healing Offers:",
          paragraph4:
            "✨ Deep Emotional & Energetic Cleansing - Let go of trauma, grief, and negative patterns.",
          paragraph5:
            "✨ Divine Protection & Support - Experience the loving presence of Archangels and guardian angels.",
          paragraph6:
            "✨ Chakra & Aura Alignment - Restore balance and harmony within your energy field.",
          paragraph7:
            "✨ Spiritual Awakening - Strengthen your intuition, inner peace, and connection to the divine.",
          paragraph8:
            "✨ Healing Through Light & Intention - Sessions use guided meditation, affirmations, and angelic symbols to channel healing energy.",
          paragraph9:
            "At Mahakaal Cosmic Portal, our Angelic Healing sessions are intuitively guided and infused with divine love.",
          paragraph10:
            "Whether you're seeking clarity, peace, or spiritual connection, the angelic realm offers gentle, radiant support on your healing journey.",
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
        Angelic Healing
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
export default Angelic_Healing;