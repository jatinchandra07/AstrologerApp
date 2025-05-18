import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import TopNavbar from "../../components/TopNavbar";
import banner3 from "../../images/sliderImages/slide2.jpg";
import { Link } from "react-router-dom";
import feature12 from "../../images/service-images/feature12.jpg";
import Footer from "../../components/Footer";

const Lal_Kitab = () => {
  const imageArray = [
    {
          id: 12,
          image: feature12,
          HeadText: "Lal Kitab – The Red Book of Destiny and Remedies",
          paragraph1:
            "Lal Kitab is a unique and powerful system of astrology rooted in ancient wisdom and mystical insights. Unlike traditional Vedic astrology, Lal Kitab focuses on practical, easy-to-perform remedies (upayas) that bring swift relief from karmic blocks and planetary imbalances. It is known as the “Wonder Book” of astrology for its accuracy and accessible guidance.",
          paragraph2:
            "What Lal Kitab Analysis Offers:",
          paragraph3: 
            "📕 Karmic Insights – Understand past life influences, hidden patterns, and life lessons.",
          paragraph4:
            "📕 Practical Remedies – Simple rituals like offering food, changing placements at home, or using symbolic items to neutralize planetary doshas.",
          paragraph5:
            "📕 Career, Finance & Relationships – Gain clarity and guidance on major life areas with easy-to-follow solutions.",
          paragraph6:
            "📕 Health & Emotional Balance – Decode root causes of issues and apply remedies that balance both body and spirit.",
          paragraph7:
            "📕 Personalized Charts & Predictions – Based on your birth details, receive accurate and detailed analysis aligned with Lal Kitab principles.",
          paragraph8:
            "At Mahakaal Cosmic Portal, our Lal Kitab consultations help you realign with cosmic flow using this profound system. If you're seeking transformation through simple yet potent remedies, Lal Kitab holds the keys to unlock peace, prosperity, and harmony in life.",
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
        Lal Kitab
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
export default Lal_Kitab;