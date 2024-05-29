import React from "react";
import servicesStyles from "./services.module.css";
const ServicesSection = () => {
  return (
    <section className={servicesStyles.servicesContainer}>
        <h1>Our Services</h1>
      <div className={servicesStyles.services}>
        <div className={servicesStyles.serviceBox}>
          <h2>01</h2>
          <h3>Service One</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <div className={servicesStyles.serviceBox}>
          <h2>02</h2>
          <h3>Service Two</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
        <div className={servicesStyles.serviceBox}>
          <h2>03</h2>
          <h3>Service Three</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
