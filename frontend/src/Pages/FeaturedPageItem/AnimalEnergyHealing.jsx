import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature6 from "../../images/service-images/feature6.jpg";
import Footer from "../../components/Footer";

const AnimalEnergyHealing = () => {
  const imageArray = [
    {
      id: 6,
      image: feature6,
      HeadText: "Animal Energy Healing",
      paragraph1:
        "Animal Energy Healing is a gentle, non-invasive holistic practice that supports the physical, emotional, and energetic well-being of animals. Based on the understanding that all living beings have an energy field, this healing modality aims to balance and clear energetic blockages, promoting natural healing processes.",
      paragraph2:
        "This method help relieve stress, ease pain, boost immunity, and support recovery from illness or trauma. Animal Energy Healing is beneficial for pets, farm animals, and even wild animals, and it works well alongside veterinary care.",
      paragraph3:
        "It is especially effective for animals dealing with anxiety, behavioral issues, aging-related discomfort, or past trauma. Sessions is done remotely, making it accessible and stress-free for the animal. Only requirement is a full photograph of the animal and a brief of issue being faced.",
      paragraph4:
        "Animal Energy Healing is rooted in compassion, intuition, and the deep bond between humans and animals, helping them live healthier and happier lives.",
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
        Animal Energy Healing
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

export default AnimalEnergyHealing;
