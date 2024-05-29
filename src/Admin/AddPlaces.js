import React, { useState } from "react";
import signStyles from "./admin.module.css";
import signImg from "../Images/temple.jpg";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
const AddPlaces = () => {
  const [place, setPlace] = useState({
    placeName: ``,
    placeDescription: ``,
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
            <h1>Add Place</h1>
            <input
              type="text"
              placeholder="Place Name"
              value={place.placeName}
              onChange={(e) =>
                setPlace({ ...place, placeName: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Place Description"
              value={place.placeDescription}
              onChange={(e) =>
                setPlace({ ...place, placeDescription: e.target.value })
              }
            />
            <button>Add Place</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddPlaces;
