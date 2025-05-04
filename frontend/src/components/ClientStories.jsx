import React from "react";
import client1 from "../images/clientImage/client1.jpg";
import client2 from "../images/clientImage/client2.jpg";
import client3 from "../images/clientImage/client3.jpg";
const ClientStories = () => {
  return (
    <>
      <div className=" bg-black grid h-auto md:flex lg:flex mt-10 m-auto mb-7 font-sans w-[90%] gap-4">
        <div className=" w-[80%] h-full flex justify-evenly items-center m-auto ">
          <div className=" m-auto">
            <h1 className="text-white text-4xl">
              <div>
                <h1 className="mb-4">HAPPY</h1>
              </div>
              <span className="text-yellow-400">CUSTOMER</span>
            </h1>
          </div>
          <div className="border-2 m-auto h-[300px]  border-yellow-500" />
        </div>
        <div className="m-auto h-full w-full p-3 ">
          <div className="flex justify-evenly items-center bg-slate-800 pb-1 mt-1">
            <div className="w-[20%] rounded-full border-2 border-yellow-500 mt-2 ">
              <img
                src={client2}
                alt=""
                className="rounded-full border-2 border-yellow-500"
              />
            </div>
            <div className="w-[60%] text-white">
              <h2 className="text-yellow-500 text-xl italic font-sans">Mr.Vishal Joshi</h2>
              <p>
              Had amazing experience with him, He answered all queries very politely over call.
              I Will recommend to conenct with him on a call.
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center bg-slate-800 pb-1 mt-1">
            <div className="w-[20%] rounded-full border-2 border-yellow-500 mt-2">
              <img
                src={client1}
                alt=""
                className="rounded-full border-2 border-yellow-500"
              />
            </div>
            <div className="w-[60%] text-white">
            <h2 className="text-yellow-500 text-xl italic font-sans">Mr.Vishwmohan mishra</h2>
              <p>
              It was a good experience and some things were suggested accurately to the point.
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center bg-slate-800 pb-1 mt-1">
            <div className="w-[20%] rounded-full border-2 border-yellow-500 mt-2">
              <img
                src={client3}
                alt=""
                className="rounded-full border-2 border-yellow-500"
              />
            </div>
            <div className="w-[60%] text-white">
            <h2 className="text-yellow-500 text-xl italic font-sans">Mrs Saloni</h2>
              <p>
              It was wonderful. He has given all the answers to my questions and clear 
              my thoughts. Really helpful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClientStories;