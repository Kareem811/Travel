import React, { useState } from "react";
import signStyles from "./sign.module.css";
import signImg from "../../Images/luxor.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
const Signin = () => {
  const [user, setUser] = useState({
    email: ``,
    password: ``,
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
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input type="submit" value={"Sign In"} />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signin;
