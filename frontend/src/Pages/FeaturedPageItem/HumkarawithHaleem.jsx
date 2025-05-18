import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature1 from "../../images/service-images/feature1.jpg";
import Footer from "../../components/Footer";

const HumkarawithHaleem = () => {
  const imageArray = [
    {
      id: 1,
      image: feature1,
      HeadText: "Humkara with Haleem - A Powerful Mystical Practice",
      paragraph1:
        "Humkara with Haleem is a profound spiritual practice that harnesses the vibrational power of sacred sounds to cleanse negativity, awaken inner strength, and align with cosmic energies. Rooted in ancient wisdom, this technique involves the chanting of powerful seed mantras that generate high-frequency vibrations, dissolving blockages and inviting divine protection.",
      paragraph2:
        "“Benefits of Humkara with Haleem:”",
      paragraph3:
        "✨ Removes Negative Energies - Clears obstacles, karmic burdens, and unwanted influences.",
      paragraph4:
          "✨ Enhances Spiritual Protection - Creates a powerful energetic shield against negativity.",
      paragraph5:
          "✨ Amplifies Manifestation Power - Aligns intentions with universal forces for abundance and success.",
      paragraph6:
          "✨ Balances Chakras & Energizes Aura - Restores inner harmony and boosts vitality.",
      paragraph7:
          "✨ Deepens Meditation & Intuition - Strengthens spiritual awareness and connection to higher realms.",
      paragraph8:
          "This sacred practice is a gateway to transformation, helping seekers shift from limitations to empowerment. Experience the profound effects of Humkara with Haleem and step into your highest potential!",  
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
        Humkara with Haleem
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
export default HumkarawithHaleem;