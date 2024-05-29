// import React from "react";
// import placesStyles from "./places.module.css";
// import img from "../../../Images/pyramid2.jpg";
// import { Link } from "react-router-dom";
// const Places = () => {
//   return (
//     <section className={placesStyles.placesContainer}>
//       <div className={placesStyles.places}>
//         <img src={img} alt="" />
//         <div className={placesStyles.placesData}>
//           <h1>Trip Name</h1>
//           <Link to={`cairo`}>Read More</Link>
//         </div>
//       </div>
//       <div className={placesStyles.places}>
//         <img src={img} alt="" />
//         <div className={placesStyles.placesData}>
//           <h1>Trip Name</h1>
//           <Link to={`cairo`}>Read More</Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Places;
import React from "react";
import placesStyles from "./places.module.css";
import bg from "../../../Images/pyramid.jpg";
import { Link } from "react-router-dom";
const Places = () => {
  return (
    <section className={placesStyles.placesContainer}>
      <h1>Places</h1>
      <div className={placesStyles.places}>
        {/* Da ely hat3ml map 3leh ya koko */}
        <div className={placesStyles.place}>
          <img alt="" src={bg} />
          <div className={placesStyles.placeData}>
            <h3>Place Name</h3>
            <Link to={""}>Show More</Link>
          </div>
        </div>
        <div className={placesStyles.place}>
          <img alt="" src={bg} />
          <div className={placesStyles.placeData}>
            <h3>Place Name</h3>
            <Link to={``}>Show More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Places;
