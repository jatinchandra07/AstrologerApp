import React from "react";
import Kartik from "../images/Kartik-images/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" px-10 bg-white absolute w-full mt-[-400px]">
      <div className="mt-10 pb-10">
        <h3 className="font-philosopher text-xl">About</h3><br/>
        <div className=" flex flex-col md:flex-row justify-between">
          <div className=" w-full md:w-[50%] px-3 sm:mb-10 text-popp">
            <p>
            Mahakaal Cosmic Portal – Your Gateway to Mystical Transformation
            </p>
            <br />
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
            <br />
            <Link to={"/about-page"}>
              <button className="text-white bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black transition duration-700 ease-in-out hover:text-black">
                Know More
              </button>
            </Link>
          </div>
          <div className="w-full md:w-[40%] flex items-center mt-16 sm:mt-8 md:mt-[-50px]">
            <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden bg-black/20">
              <img
                src={Kartik}
                className="w-full h-auto rounded-3xl"
                alt=""
              />
            </div>
            <div className="border-2 border-green-200 rounded-3xl w-[300px] h-auto relative overflow-hidden -ml-[220px] -mt-28">
              <img
                src={Kartik}
                className="w-full h-auto rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
