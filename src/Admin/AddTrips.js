import React, { useState } from "react";
import signStyles from "./admin.module.css";
import signImg from "../Images/temple.jpg";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import { FaUpload } from "react-icons/fa6";
const AddTrips = () => {
  const [trip, setTrip] = useState({
    tripName: ``,
    tripPrice: ``,
    tripCategory: ``,
    tripDescription: ``,
    tripGuide: ``,
    tripImgs: [],
    tripDate: ``,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(``)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <section className={signStyles.signContainer}>
        <img src={signImg} alt="" />
        <div className={signStyles.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Add Trip</h1>
            <input
              type="text"
              placeholder="Trip Name"
              value={trip.tripName}
              onChange={(e) => setTrip({ ...trip, tripName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Trip Price"
              value={trip.tripPrice}
              onChange={(e) => setTrip({ ...trip, tripPrice: e.target.value })}
            />
            <input
              type="text"
              placeholder="Trip Category"
              value={trip.tripCategory}
              onChange={(e) =>
                setTrip({ ...trip, tripCategory: e.target.value })
              }
            />
            <textarea
              placeholder="Trip Description"
              value={trip.tripDescription}
              onChange={(e) =>
                setTrip({ ...trip, tripDescription: e.target.value })
              }
            ></textarea>
            {/* <input
              type="text"
              placeholder="Trip Price"
              value={trip.tripPrice}
              onChange={(e) => setTrip({ ...trip, tripPrice: e.target.value })}
            /> */}
            <input
              type="text"
              placeholder="Trip Guide"
              value={trip.tripGuide}
              onChange={(e) => setTrip({ ...trip, tripGuide: e.target.value })}
            />
            <input
              type="date"
              value={trip.tripPrice}
              onChange={(e) => setTrip({ ...trip, tripPrice: e.target.value })}
            />
            <label htmlFor="files">
              <FaUpload size={30} />
              Upload Images
            </label>
            <input
              style={{ display: "none" }}
              type="file"
              value={trip.tripImgs}
              multiple
              id="files"
            />
            <button>Add Trip</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddTrips;
