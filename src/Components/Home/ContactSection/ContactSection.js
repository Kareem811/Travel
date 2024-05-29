// import React, { useState } from "react";
// import contactStyles from "./contact.module.css";
// const ContactSection = () => {
//   const [contact, setContact] = useState({
//     userName: ``,
//     email: ``,
//     message: ``,
//   });
//   const handleContact = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <section id="contact-section" className={contactStyles.contactContainer}>
//       <div className={contactStyles.contactBox}>
//         <div className={contactStyles.contactLeft}></div>
//         <div className={contactStyles.contactRight}>
//           <h2>Contact Us</h2>
//           <form onSubmit={(e) => handleContact(e)}>
//             <input
//               type="text"
//               placeholder="Enter Your Name"
//               value={contact.userName}
//               onChange={(e) =>
//                 setContact({ ...contact, userName: e.target.value })
//               }
//             />
//             <input
//               type="text"
//               placeholder="Enter Your Email"
//               value={contact.email}
//               onChange={(e) =>
//                 setContact({ ...contact, email: e.target.value })
//               }
//             />
//             <textarea
//               placeholder="Enter Your Message"
//               value={contact.message}
//               onChange={(e) =>
//                 setContact({ ...contact, message: e.target.value })
//               }
//             ></textarea>
//             <button>Send</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React, { useState } from "react";
import contactStyles from "./contact.module.css";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
const ContactSection = () => {
  const [contact, setContact] = useState({
    fname: ``,
    lname: ``,
    email: ``,
    phone: ``,
    message: ``,
  });
  const handleContact = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact-section" className={contactStyles.contactContainer}>
      <div className={contactStyles.contactForm}>
        <h1>Contact Us</h1>
        <form onSubmit={(e) => handleContact(e)}>
          <div className={contactStyles.contactField}>
            <input
              type="text"
              placeholder="First Name"
              value={contact.userName}
              onChange={(e) =>
                setContact({ ...contact, fname: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, lname: e.target.value })
              }
            />
          </div>
          <div className={contactStyles.contactField}>
            <input
              type="text"
              placeholder="Email"
              value={contact.userName}
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={contact.email}
              onChange={(e) =>
                setContact({ ...contact, phone: e.target.value })
              }
            />
          </div>
          <div className={contactStyles.contactField}>
            <textarea
              placeholder="Enter Your Message"
              value={contact.message}
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
            ></textarea>
          </div>
          <button>Send</button>
        </form>
      </div>
      <div className={contactStyles.contactSocial}>
        <h2>Contact Info</h2>
        <div className={contactStyles.info}>
          <div className={contactStyles.singleinfo}>
            <FaLocationDot size={30} />
            <span>Location</span>
          </div>
          <div className={contactStyles.singleinfo}>
            <FaLocationDot size={30} />
            <span>Location</span>
          </div>
          <div className={contactStyles.singleinfo}>
            <FaLocationDot size={30} />
            <span>Location</span>
          </div>
        </div>
        <div className={contactStyles.icons}>
          <FaFacebook size={30} />
          <FaFacebook size={30} />
          <FaFacebook size={30} />
          <FaFacebook size={30} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
