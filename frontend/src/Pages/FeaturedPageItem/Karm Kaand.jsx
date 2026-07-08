import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature15 from "../../images/service-images/feature15.jpg";
import Footer from "../../components/Footer";

const Vastu = () => {
  const imageArray = [
    {
      id: 15,
      image: feature15,
      HeadText: "Karma Kaand",
      paragraph1:
        "We offer authentic Vedic Karma Kand services to help you clear energetic blockages, seek divine blessings, and realign with your spiritual path. Whether you're facing challenges in health, finances, relationships, or spiritual growth, Karma Kand rituals can bring balance, protection, and peace into your life.",
      paragraph2:
        "Boon Your Karma Kand Ritual to",
      paragraph3: 
        "• Remove doshas like Pitru Dosh, Kaal Sarp Dosh, Graha Dosh",
      paragraph4:
        "• Perform ancestral rituals (Shraddha, Pind Daan, Tarpan)",
      paragraph5:
        "• Invoke divine blessings  through Havan, Rudrabhishek, and Jaaps",
      paragraph6:
        "• Ensure harmony during life events like Griha Pravesh, Naamkaran, Vivah",
      paragraph7:
        "• Enhance prosperity, peace, and spiritual well-being",
      paragraph8:
        "We offer personalized consultation to choose the right ritual. Online & in-person options available.",
      paragraph9:
        "Once the Ritual is selected detailed benefit and expense would be given and the Ritual will be performed on the chosen place and date.",
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
        Karma Kaand
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
              <p className="text-gray-500 my-3">{item.paragraph9}</p>
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
export default Vastu;