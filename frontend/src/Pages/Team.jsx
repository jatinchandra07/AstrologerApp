import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import feature6 from "../images/Kartik-images/kartik_about.jpg";
import Ritu from "../images/Kartik-images/Sadak Ritu Bhatia.jpg";
const Team = () => {
  return (
    <>
        <div className="hidden md:block">
            <TopNavbar />
        </div>    
        <div className="bg-black h-[70px]">
            <BottomNavbar className="text-black" />
        </div>
        <h1 className="font-dancing text-[50px] md:text-[60px] to-blue-900 text-center mt-8 mb-4 animate-pulse drop-shadow-lg tracking-wide">
          Jai Shri Mahakaal 
        </h1>
        <div className="  bg-white absolute w-full">
        <div className="mt-10 pb-10 px-8 ">
          <h3 className="font-philosopher text-xl pl-3 font-bold">Sadhak Ritu Bhatia</h3>
          <br />
          <div className=" flex flex-col md:flex-row justify-between text-gray-700 leading-relaxed">
            <div className=" w-full md:w-[50%] px-3 sm:mb-10 text-popp">
            <br />
            <p>
            Sadhak Ritu Bhatia is a seasoned astrologer with over 7 years of experience in guiding individuals through 
            the profound wisdom of the stars. Her deep understanding of both Western and Vedic astrology allows her to 
            deliver highly personalized insights, helping clients navigate various aspects of their personal and professional 
            lives with clarity and confidence.
            </p>
            <br />
            <p>
            She specializes in birth chart analysis, future predictions, and relationship advice, and has empowered 
            countless individuals to make informed decisions and embrace their true path. Her client-centered approach 
            is rooted in compassion, accuracy, and a genuine desire to support her clients' growth.
            </p>
            <br/>
            <p>
            In addition to astrology, Ritu also offers Angelic Healing, mediumship, face reading, 
            and tarot reading among many modalities—creating a holistic and intuitive experience 
            for those seeking deeper spiritual guidance. Her mission is to help others connect with 
            astrology and metaphysical tools in a meaningful way, unlocking their inner potential and 
            achieving lasting fulfillment.
            </p>
            <br/>
            </div>
            <div className="w-full md:w-[40%] flex items-center mt-16 sm:mt-8 md:mt-[-50px]">
              <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden bg-black/20">
                <img
                  src={Ritu}
                  className="w-full h-auto rounded-3xl"
                  alt=""
                />
              </div>
              <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden -ml-[220px] -mt-28">
                <img
                  src={Ritu}
                  className="w-full h-auto rounded-3xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pb-10 px-8 ">
          <h3 className="font-philosopher text-xl pl-3 font-bold">Kuppuswami Sriram Kartik</h3>
          <div className=" flex flex-col md:flex-row justify-between text-gray-700 leading-relaxed">
            <div className=" w-full md:w-[50%] px-3 sm:mb-10 text-popp">
            <p>
            From Corporate to Cosmic: The Spiritual Journey of Kuppuswami Sriram Kartik
            </p>
            <br />
            <p>
            Kuppuswami Sriram Kartik, a native of New Delhi, exemplifies the courage it takes 
            to pursue one's true calling. After a 20-year corporate journey and serving as a 
            department head in the real estate sector, Kartik made a bold transition in 2023, 
            driven by disillusionment with industry malpractices. With an MBA in HR from Symbiosis, 
            he could have continued climbing the corporate ladder—but his heart led him elsewhere.
            </p>
            <br/>
            <p>
            Fuelled by a lifelong inclination toward spirituality, Kartik immersed himself 
            in the mystical sciences, earning certifications in Tarot, Numerology, and 
            Palmistry. His passion for guiding others through spiritual insights took 
            form in 2024 when he founded the Academy of Universal Mysticism, offering
             professional-level courses in spiritual disciplines.
            </p>
            <br/>
            <p>To further his mission, he launched the Mahakaal Cosmic Portal, 
              an online platform for personal consultations. His services span Tarot 
              reading, Numerology, and the powerful vibrational healing method known 
              as Humkara with Haleem. Beyond consultations, Kartik offers a range of 
              spiritual tools including crystals, rudraksha beads, and mantras—each 
              carefully selected to aid clients on their healing journeys.
            </p>
            <br/>
            <p>
            In addition to working with people, Kartik also extends his healing 
            abilities to animals, offering energy-based support to help them overcome 
            physical, emotional, or behavioral issues. His compassionate approach bridges 
            the human-animal connection through holistic practices.
            </p>
            </div>
            <div className="w-full md:w-[40%] flex items-center mt-16 sm:mt-8 md:mt-[-50px]">
              <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden bg-black/20">
                <img
                  src={feature6}
                  className="w-full h-auto rounded-3xl"
                  alt=""
                />
              </div>
              <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden -ml-[220px] -mt-28">
                <img
                  src={feature6}
                  className="w-full h-auto rounded-3xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Team;
