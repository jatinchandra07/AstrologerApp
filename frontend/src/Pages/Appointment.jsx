import React, { useState } from "react";
import axios from "axios";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import banner3 from "../images/sliderImages/slide2.jpg";
import * as Yup from "yup";
import logo from "../images/logo/logo.png";
import { LuLoader2 } from "react-icons/lu";

const Appointment = () => {
  const numerologySubServices = {
    "Basic Report": 1100,
    "Mobile Numerology": 1499,
    "Name Numerology": 1499,
    "Relationship Compatibility": 2100,
    "Best period of Month/Year": 2100,
    "Full Report": 5999,
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const initialFormValue = {
    firstName: "",
    lastName: "",
    dob: "",
    mobileNumber: "",
    email: "",
    service: "",
    subService: "",
    mode:"",
    date: new Date().toISOString().substr(0, 10),
    time: getCurrentTime(),
  };
  const getModeOptions = (service) => {
    switch (service) {
      case "Mediumship":
        return ["Offline"];
      case "Numerology":
      case "Humkara with Haleem":
      case "Animal Healing":
        return ["Online"];
      case "Vastu":
        return ["Offline - Delhi NCR", "Offline - Outside Delhi NCR"];
      default:
        return ["Online", "Offline"];
    }
  };  
  const getPrice = (service, mode,subService) => {
    const prices = {
      "Angelic Healing": { Online: 2100, Offline: 2500 },
      "Animal Healing": { Online: 1111 },
      "Aura and Chakra Scanning": { Online: 2100 },
      "Face Reading": { Online: 2100, Offline: 2500 },
      "Graphology": { Online: 2100, Offline: 2500 },
      "Humkara with Haleem": { Online: 3333 },
      "Kundali Analysis": { Online: 2100, Offline: 2500 },
      "Lal Kitab": { Online: 2100, Offline: 2500 },
      "Mediumship": { Offline: 2500 },
      "Numerology": { Online: numerologySubServices[subService]|| 2000 },
      "Palmistry": { Online: 2100, Offline: 4100 },
      "Prashant Kundali": { Online: 2100, Offline: 2500 },
      "Tarot Question Based (3 question)": { Online: 500, Offline: 1000 },
      "Tarot Session Based": { Online: 1100, Offline: 2100 },
      "Vastu": {
        "Offline - Delhi NCR": 5100,
        "Offline - Outside Delhi NCR": 11000,
      },
    };
  
    return prices[service]?.[mode] || "";
  };    
  const [formData, setFormData] = useState(initialFormValue);

  const [loading, setLoading] = useState(false);

  const [userDataFromPayment, setUserDataFromPayment] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\[^\s@]+$/;

    if (name === "mobileNumber" && !/^\d{0,10}$/.test(value)) {
      return;
    }

    if (name === "email" && emailRegex.test(value)) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkoutHandler = async (e, formData) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      dob,
      mobileNumber,
      email,
      service,
      subService,
      mode,
      date,
      time,
    } = formData;
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !dob.trim() ||
      !mobileNumber.trim() ||
      !email.trim() ||
      !service.trim() ||
      !mode.trim()||
      !date.trim() ||
      !time.trim()
    ) {
      alert("Please fill all the details.");
      return;
    }
    setLoading(true);

    const {
      data: { key },
    } = await axios.get(`${import.meta.env.VITE_HOST_URL_ENDPOINT}/api/getkey`);
    const price = getPrice(service, mode,subService);
    try {
      const {
        data: { order },
      } = await axios.post(
        `${import.meta.env.VITE_HOST_URL_ENDPOINT}/api/checkout`,
        { price },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const options = {
        key,
        amount: order.price,
        currency: "INR",
        name: "Mahakaal Cosmic Portal",
        description: "Transaction",
        image: logo,
        order_id: order.id,
        callback_url: `${import.meta.env.VITE_HOST_URL_ENDPOINT
          }/api/paymentverification`,
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: `${formData.email}`,
          contact: `${formData.mobileNumber}`,
        },
        notes: {
          address: "Mahakaal Cosmic Portal",
        },
        theme: {
          color: "#003CF0",
        },
      };
      const razor = new window.Razorpay(options);
      gettingDataFromPlacingOrder(options, order);

      razor.open();
      
    } catch (error) {
      console.error("Error during checkout:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const gettingDataFromPlacingOrder = async (allTheData, order) => {
    try {
      const razorpay_order_id = order.id;
      setUserDataFromPayment(razorpay_order_id);

      const dataToSend = {
        firstName: allTheData.prefill.name.split(" ")[0],
        lastName: allTheData.prefill.name.split(" ")[1],
        mobileNumber: allTheData.prefill.contact,
        email: allTheData.prefill.email,
        dob:formData.dob,
        service:formData.service,
        subService:formData.subService,
        mode:formData.mode,
        date: formData.date,
        time: formData.time,
        price: getPrice(formData.service, formData.mode,formData.subService),
        razorpay_order_id: razorpay_order_id,
        currentDate: new Date(),
        currentTime: getCurrentTime(),
      };
      
      const response = await axios.post(
        `${import.meta.env.VITE_HOST_URL_ENDPOINT}/api/appointment`,
        dataToSend
      );
      console.log(response, "Response getting or not ...");
      alert(response.data.message);
    } catch (error) {
      console.error("Error while adding data to the database:", error);
    }
  };
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <>
      <section className="bg-gray-100 min-h-screen">
        <div className="hidden md:block"><TopNavbar /></div>
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
        <div className="grid md:flex lg:flex mx-auto mb-7 font-sans w-[90%] gap-4">
          <div className="m-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-7 font-semibold mb-4 font-philosopher text-center">
              Book an Appointment
            </h2>
            <h3 className="text-[13px] italic font-sans md:text-[16px] lg:text-[18px] text-gray-500 mb-3  ">
              Unlock Solutions, Embrace Serenity.
            </h3>
            <div>
              <p>
              In years of practicing occult sciences, I've discovered a profound truth - every problem is a 
              lock with a key. Whether it's delving into Energy Healing, tarot, or palmistry, I provide seekers 
              with remedies, unlocking doors to happiness & goals.
              </p>
              <p>
              Life becomes precious, and the lessons learned are cherished for good. Find solutions, 
              feel sorted, and embrace the journey towards a fulfilled life.
              </p>
            </div>
          </div>
          <div className="px-4 m-auto md:px-0 py-8 max-w-lg w-[1000px] mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-7 font-semibold mb-4 font-philosopher text-center">
              Appointment Form
            </h1>
            <form
              action=""
              onSubmit={(e) => checkoutHandler(e, formData)}
              className="bg-white font-poppins shadow-md rounded px-3 pt-6 pb-8 mb-4 space-y-4 border border-blue-300"
            >
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label>First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label>Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div>
                <label>Date Of Birth*</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label>Mobile Number*</label>
                <input
                  type="number"
                  placeholder=""
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="shadow appearance-none border rounded border-blue-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label>Email*</label>
                <input
                  type="email"
                  placeholder=""
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                  className="shadow appearance-none border rounded border-blue-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label>Consulation Service*</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded border-blue-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a service</option>
                  <option value="Tarot Session Based">Tarot Session Based </option>
                  <option value="Tarot Question Based (3 question)">Tarot Question Based (3 question) </option>
                  <option value="Angelic Healing">Angelic Healing</option>
                  <option value="Mediumship">Mediumship</option>
                  <option value="Face Reading">Face Reading</option>
                  <option value="Kundali Analysis">Kundali Analysis</option>
                  <option value="Lal Kitab">Lal Kitab</option>
                  <option value="Graphology">Graphology</option>
                  <option value="Prashant Kundali">Prashant Kundali</option>
                  <option value="Vastu">Vastu</option>
                  <option value="Numerology">Numerology</option>
                  <option value="Humkara with Haleem">Humkara with Haleem</option>
                  <option value="Animal Healing">Animal Healing</option>
                  <option value="Aura and Chakra Scanning">Aura and Chakra Scanning</option>
                  <option value="Palmistry">Palmistry</option>
                </select>
              </div>
              {formData.service === "Numerology" && (
                <div>
                  <label>Sub-Service*</label>
                  <select
                    name="subService"
                    value={formData.subService}
                    onChange={handleInputChange}
                    required
                    className="shadow appearance-none border rounded border-blue-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select a sub-service</option>
                    <option value="Basic Report">Basic Report</option>
                    <option value="Mobile Numerology">Mobile Numerology</option>
                    <option value="Relationship Compatibility">Relationship Compatibility</option>
                    <option value="Best period of Month/Year">Best period of Month/Year</option>
                    <option value="Full Report">Full Report</option>
                  </select>
                </div>
              )}
              <div>
                <label>Preferred Mode*</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded border-blue-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a service</option>
                  {getModeOptions(formData.service).map((option) => (
                    <option key={option} value={option}>
                      {option}
                  </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label>Consulation Date*</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={currentDate}
                    autoComplete="off"
                    className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label>Consulation Time*</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    autoComplete="off"
                    className="shadow appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center w-[130px] m-auto">
                      <LuLoader2 className="animate-spin mr-2" /> Loading...
                    </span>
                  ) : (
                    "Book Appointment"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" w-[60%] m-auto px-3 mb-7 text-center">
          <p>
          In life's journey, our paths intertwine, and our actions can touch lives.
          </p>
          <p>
          A warm, service-oriented touch transforms the world into a happier place.
          </p>
          <p>
          As you reach for my knowledge, it's not just about comfort; it's about doing 
          justice to the essence of life—making it meaningful and impactful.
          </p>
          <div className="text-[13px] italic font-sans md:text-[16px] lg:text-[18px] text-gray-500 mb-3 mt-3">
            - Mahakaal Cosmic Portal
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Appointment;