import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature14 from "../../images/service-images/feature14.jpg";
import Footer from "../../components/Footer";

const Vastu = () => {
  const imageArray = [
    {
          id: 14,
          image: feature14,
          HeadText: "Vastu Shastra",
          paragraph1:
            "Vastu Shastra is the ancient Indian science of architecture and spatial arrangement, focusing on harmonizing the environment with natural elements to promote health, prosperity, and well-being. Derived from the Sanskrit words ‘Vastu’ (dwelling) and ‘Shastra’ (science), it lays out guidelines for the construction and design of buildings, homes, temples, and other structures.",
          paragraph2:
            "Rooted in the belief that the five elements — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Aakash) — influence human life, Vastu aims to balance these elements through directional alignments and spatial geometry.",
          paragraph3: 
            "Key principles include:",
          paragraph4:
            "Proper orientation of rooms (e.g., kitchen in the southeast, entrance in the northeast)",
          paragraph5:
            "Placement of furniture and utilities",
          paragraph6:
            "Use of shapes and symmetry in design",
          paragraph7:
            "Maximizing natural light and ventilation",
          paragraph8:
            "Vastu is often consulted during home buying, interior design, and renovations to attract positive energy and dispel negativity. Though traditional in nature, many modern architects and interior designers incorporate Vastu elements into contemporary designs.",
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
        Vastu
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
export default Vastu;