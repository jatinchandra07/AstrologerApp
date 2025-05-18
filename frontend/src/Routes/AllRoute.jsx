import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Services from "../Pages/Services";
import Contact from "../components/Contact";
import AboutPage from "../Pages/AboutPage";
import Appointment from "../Pages/Appointment";
import Team from "../Pages/Team";
import PaymentSuccess from "../components/PaymentSuccess";
import HumkarawithHaleem from "../Pages/FeaturedPageItem/HumkarawithHaleem";
import TarotCardReading from "../Pages/FeaturedPageItem/TarotCardReading";
import Numerology from "../Pages/FeaturedPageItem/Numerology";
import AuraChakraScanning from "../Pages/FeaturedPageItem/Aura&ChakraScanning";
import Palmistry from "../Pages/FeaturedPageItem/Palmistry";
import AnimalEnergyHealing from "../Pages/FeaturedPageItem/AnimalEnergyHealing";
import AngelicHealing from "../Pages/FeaturedPageItem/Angelic Healing";
import FaceReading from "../Pages/FeaturedPageItem/Face Reading";
import KundaliAnalysis from "../Pages/FeaturedPageItem/Kundali Analysis";
import Mediumship from "../Pages/FeaturedPageItem/Mediumship";
import Graphology from "../Pages/FeaturedPageItem/Graphology";
import LalKitab from "../Pages/FeaturedPageItem/Lal Kitab";
import PrashnaKundali from "../Pages/FeaturedPageItem/Prashna Kundali";
import Vastu from "../Pages/FeaturedPageItem/Vastu";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/team" element={<Team />} />
      <Route
        path="/Humkara-with-Haleem"
        element={<HumkarawithHaleem />}
      />
      <Route
        path="/Tarot-Card-Reading"  
        element={<TarotCardReading />}
      />
      <Route
        path="/numerology"
        element={<Numerology />}
      />
      <Route path="/Aura&ChakraScanning" element={<AuraChakraScanning />} />
      <Route path="/palmistry" element={<Palmistry />} />
      <Route path="/Animal-Energy-Healing" element={<AnimalEnergyHealing />} />
      <Route path="/Angelic-Healing" element={<AngelicHealing/>}/>
      <Route path="/Face-Reading" element={<FaceReading/>}/>
      <Route path="/Kundali-Analysis" element={<KundaliAnalysis/>}/>
      <Route path="/Mediumship" element={<Mediumship/>}/>
      <Route path="/Graphology" element={<Graphology/>}/>
      <Route path="/Lal-Kitab" element={<LalKitab/>}/>
      <Route path="/Prashna-Kundali" element={<PrashnaKundali/>}/>
      <Route path="/Vastu" element={<Vastu/>}/>
    </Routes>
  );
};

export default AllRoute;