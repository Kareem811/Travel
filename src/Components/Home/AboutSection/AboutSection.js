import aboutSectionStyles from "./about.module.css";
import aboutImg from "../../../Images/luxor.jpg";

const AboutSection = () => {

  return (
    <section id="about-section"
      className={aboutSectionStyles.aboutSectionContainer}
    >
      <h1>About Us</h1>
      <div className={aboutSectionStyles.about}>
        <div
        className={aboutSectionStyles.aboutContent}
        >
          <h1>Welcome To Our Website</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button>Learn More</button>
        </div>
        <div className={aboutSectionStyles.aboutImage}>
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
