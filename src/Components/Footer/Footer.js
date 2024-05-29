import React from "react";
import footerStyles from "./footer.module.css";
import { Link } from "react-scroll";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <h2>Travel Travel</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <ul>
          <li>
            <Link to="">
              <FaFacebook size={30} color="#fff"/>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaFacebook size={30} color="#fff" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaFacebook size={30} color="#fff" />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaFacebook size={30} color="#fff" />
            </Link>
          </li>
        </ul>
        <div className={footerStyles.footerBottom}>
          <p>
            CopyRights &copy;2024 Travel Designed by <span>KM Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
