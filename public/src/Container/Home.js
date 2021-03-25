import React from "react";
import HeroBanner from "../components/HomeComponents/HeroBanner";
import About from "../components/HomeComponents/About";
import Work from "../components/HomeComponents/Work";
import Skills from "../components/HomeComponents/Skills";
import Offer from "../components/HomeComponents/Offer";
// import Modal from "../components/HomeComponents/Modal";

// These are the main route pages that has been used in routing in the config folder

const Home = () => {
  // const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <HeroBanner />
      <About />
      <Work />
      <Skills />
      <Offer />
      )
    </div>
  );
};

export default Home;
