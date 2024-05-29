// import React, { useEffect, useState } from "react";
// import backgroundStyles from "./background.module.css";
// import luxor from "../../../Images/luxor.jpg";
// import temple from "../../../Images/temple.jpg";
// import pyramid from "../../../Images/pyramid.jpg";
// import { Link } from "react-scroll";
// const BackgroundSection = () => {
//   const [img] = useState([luxor, temple, pyramid]);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setCount(count + 1);
//       count >= img.length - 1 && setCount(0);
//     }, 3000);
//   });
//   return (
//     <section className={backgroundStyles.backgroundContainer}>
//       <img src={img[count]} alt="" />
//       <div className={backgroundStyles.backgroundData}>
//         <h1>Welcome</h1>
//         {/* <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p> */}
//         <div className={backgroundStyles.buttons}>
//           <Link to="">Get Started</Link>
//           <Link to="">Explore</Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BackgroundSection;
import React from "react";
import backgroundStyles from "./background.module.css";
const BackgroundSection = () => {
  return (
    <section className={backgroundStyles.backgroundContainer}>
      <div className={backgroundStyles.backgroundLayer}>
        <div className={backgroundStyles.backgroundData}>
          <h1>Greatness Egypt Tours</h1>
          <p>
            Greatness Egypt Tours is a tour company in Giza , we are team of
            qualified tour guides , tour operators and drivers , we organize
            amazing holidays in Egypt .
          </p>
          <div className={backgroundStyles.buttons}>
            <a href="#about-section">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
