import React, { useEffect, useState } from "react";
import tripsStyles from "./trips.module.css";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
const SinglePlace = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => setTrips(res.data.products))
      .then((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <section className={tripsStyles.tripsTitle}>
        {/* <h1>Trips</h1> */}
      </section>
      <section className={tripsStyles.tripsContainer}>
        {trips.map((el, idx) => (
          <div className={tripsStyles.trip} key={idx}>
            <img src={el.thumbnail} alt="" />
            <div className={tripsStyles.tripData}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
              <Link to={`${el.id}`}>Read More</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SinglePlace;
