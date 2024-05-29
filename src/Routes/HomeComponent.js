import React, { Fragment } from "react";
import Navbar from "../Components/Navbar/Navbar";
import BackgroundSection from "../Components/Home/BackgroundSection/BackgroundSection";
import AboutSection from "../Components/Home/AboutSection/AboutSection";
import ServicesSection from "../Components/Home/ServicesSection/ServicesSection";
import FeaturedSection from "../Components/Home/FeaturedSection/FeaturedSection";
import ContactSection from "../Components/Home/ContactSection/ContactSection";
import Footer from "../Components/Footer/Footer";

const HomeComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <BackgroundSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedSection />
      <ContactSection />
      <Footer />
    </Fragment>
  );
};

export default HomeComponent;
