import React from "react";
import HeroSec from "./HomeComponents/HeroSec";
import Collaborations from "./HomeComponents/Collaborations";
import Offerings from "./HomeComponents/Offerings";
import TrainingPrograms from "./HomeComponents/TrainingPrograms";
import PricingSection from "./HomeComponents/PricingSection";
import CompanyValues from "./HomeComponents/CompanyValues";

const Home = () => {
  return (
    <>
      <HeroSec />
      <Collaborations />
      <Offerings fname="Our" sname="Offerings" />
      <TrainingPrograms />
      <PricingSection />
      <CompanyValues />
    </>
  );
};

export default Home;
