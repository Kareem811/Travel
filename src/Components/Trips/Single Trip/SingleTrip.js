import React from "react";
import singleTripStyles from "./singletrip.module.css";
import thumbnail from "../../../Images/pyramid.jpg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
const SingleTrip = () => {
  return (
    <>
      <Navbar />
      <section className={singleTripStyles.singleTripContainer}>
        <h1>Trip Name</h1>
        <div className={singleTripStyles.tripData}>
          <img src={thumbnail} alt="" />
          <div className={singleTripStyles.singleTripDetails}>
            <h1>Trip Name</h1>
            <h3>Cairo</h3>
            <p>
              Greatness Egypt Tours is a tour company in Giza , we are team of
              qualified tour guides , tour operators and drivers , we organize
              amazing holidays in Egypt .
            </p>
            <h3>$Trip Price</h3>
            <span>More Information</span>
            <button>Book Now</button>
          </div>
        </div>
        <div className={singleTripStyles.singleTripGallery}>
        <img src={thumbnail} alt="" />
        <img src={thumbnail} alt="" />
        <img src={thumbnail} alt="" />
        <img src={thumbnail} alt="" />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default SingleTrip;
