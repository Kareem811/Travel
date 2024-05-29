import React from "react";
import { Fragment } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Places from "../Components/Trips/Places/Places";
import Footer from "../Components/Footer/Footer";
const PlacesComponent = () => {
  return (
    <Fragment>
      <Navbar />
      <Places />
      <Footer/>
    </Fragment>
  );
};

export default PlacesComponent;
