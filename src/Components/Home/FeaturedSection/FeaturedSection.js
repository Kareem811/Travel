import React from "react";
import featuredStyles from "./featured.module.css";
import luxor from "../../../Images/luxor.jpg";
import temple from "../../../Images/temple.jpg";
import pyramid from "../../../Images/pyramid.jpg";
import { Link } from "react-router-dom";
const FeaturedSection = () => {
  return (
    <section className={featuredStyles.featuredContainer}>
      <h1>Places To Visit</h1>
      <div className={featuredStyles.trips}>
        <div className={featuredStyles.featuredTrip}>
          <img alt="" src={luxor} />
          <div className={featuredStyles.featuredData}>
            <h2>Cairo</h2>
            <Link to={""}>Explore</Link>
          </div>
        </div>
        <div className={featuredStyles.featuredTrip}>
          <img alt="" src={temple} />
          <div className={featuredStyles.featuredData}>
            <h2>Cairo</h2>
            <Link to={""}>Explore</Link>
          </div>
        </div>
        <div className={featuredStyles.featuredTrip}>
          <img alt="" src={pyramid} />
          <div className={featuredStyles.featuredData}>
            <h2>Cairo</h2>
            <Link to={""}>Explore</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
