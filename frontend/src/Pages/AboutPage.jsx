import React from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import feature6 from "../images/Kartik-images/about.jpg";
const AboutPage = () => {
  return (
    <>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div className="  bg-white absolute w-full">
        <div className="mt-10 pb-10 px-8 ">
          <h3 className="font-philosopher text-xl pl-3 font-bold">Mahakaal Cosmic Portal – Your Gateway to Mystical Transformation</h3>
          <br/>
          <div className=" flex flex-col md:flex-row justify-between text-gray-700 leading-relaxed">
            <div className=" w-full md:w-[50%] px-3 sm:mb-10 text-popp">
            <p>
              Welcome to Mahakaal Cosmic Portal, a sacred space where ancient wisdom meets divine 
              guidance. Rooted in spiritual depth and cosmic intelligence, our portal is designed to 
              help you heal, awaken, and realign with your highest path.
            </p>
            <br />
            <p>        
              At Mahakaal Cosmic Portal, we offer a diverse range of services rooted in time-honored traditions and intuitive science:
            </p>
            <br/>
            <p>
              Our Signature Offerings Include:
            </p>
            <br/>
            <p>
              1. Tarot Card Reading
            </p>
            <p>
              Receive monthly general guidance or in-depth insights on specific life areas such as love, 
              career, and health through accurate and intuitive Tarot readings.
            </p>
            <br/>
            <p>
              2. Numerology
            </p>
            <p>
              Decode your destiny through name and date of birth analysis, mobile number evaluation, and vibrational corrections.
            </p>
            <br />
            <p>
              3. Kundali Analysis & Prashna Kundali
            </p>
            <p>
              Explore your soul’s blueprint through detailed Vedic birth chart analysis or ask direct cosmic questions with instant answers via Prashna Kundali.
            </p>
            <br />
            <p>
              4. Lal Kitab Remedies
            </p>
            <p>
              Experience the power of simple, effective remedies from the mystical Lal Kitab to dissolve karmic patterns and improve life circumstances.
            </p>
            <br />
            <p>
              5. Palmistry & Face Reading
            </p>
            <p>
              Unveil your strengths, challenges, and destiny through the sacred maps of your hands and face.
            </p>
            <br />
            <p>
              6. Angelic Healing & Mediumship
            </p>
            <p>
              Receive divine healing and messages from spirit guides, angels, and departed loved ones in a safe, guided space.
            </p>
            <br />
            <p>
              7. Humkara with Haleem
            </p>
            <p>
              Harness the power of ancient sounds and vibrations to release deep-seated energetic blocks and awaken your true potential.
            </p>
            <br />
            <p>
              8. Aura & Chakra Scanning
            </p>
            <p>
              Cleanse and align your energy field, balancing the subtle body for enhanced well-being and inner clarity.
            </p>
            <br />
            <p>
              9. Crystal Bracelets, Rudraksha & Mantras
            </p>
            <p>
              Adorn yourself with healing crystal bracelets and Rudrakshas charged with specific mantras to attract positive vibrations and protection.
            </p>
            <br />
            <p>
              10. Graphology (Handwriting Analysis)
            </p>
            <p>
              Reveal hidden personality traits, emotional patterns, and subconscious blocks through handwriting and signature analysis.
            </p>
            <br />
            <p>
              11. Certification Courses
            </p>
            <p>
              Master sacred sciences like Tarot and Numerology through certified online courses designed for personal growth or professional practice.
            </p>
            <br />
            <p>
              Guided by Masters
            </p>
            <br />
            <p>
              Our consultations and trainings are led by:
            </p>
            <p>
              Sadhak Ritu Bhatia – A gifted spiritual practitioner and trainer with extensive experience in energy healing, divination, and esoteric sciences.
            </p>
            <p>  
              Kuppuswami Sriram Kartik – A seasoned astrologer and teacher with deep knowledge of Vedic systems, Lal Kitab, and intuitive counsel.
            </p>
            <br />
            <p>
              Together, they bring decades of wisdom, integrity, and transformational energy into every session and course.
            </p>
            <p>
              Explore our services, book your personal consultation, and access tools to support your spiritual evolution.
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
        {/* Mission and vision starts here  */}
        <div className="grid md:flex lg:flex m-auto mb-7 font-sans w-[70%] gap-4">
          <div className=" m-auto bg-purple-600 text-center p-4 w-full rounded-br-3xl rounded-tl-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-philosopher text-center">
              Mission
            </h1>
            <p className="text-white font-poppains">
            To awaken inner divinity by guiding souls through 
            transformative spiritual experiences—shifting from darkness to light.
            </p>
          </div>

          <div className=" m-auto bg-purple-600 text-center p-4 w-full rounded-bl-3xl rounded-tr-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-philosopher text-center">
              Vision
            </h1>
            <p className="text-white font-poppins">
                To be a cosmic gateway for global seekers,
                  by empowering humanity to rise in light, truth, and higher purpose.
            </p>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
