import React, { useState } from "react";
import signStyles from "./sign.module.css";
import signImg from "../../Images/status.jpg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
const Signup = () => {
  const [cpw, setCpw] = useState(``);
  const [errMsg, setErrMsg] = useState(false);
  const [user, setUser] = useState({
    username: ``,
    password: ``,
    email: ``,
    address: ``,
    phone: ``,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== cpw) {
      setErrMsg(true);
    } else {
      setErrMsg(false);
      axios
        .post(``)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Navbar />
      <section className={signStyles.signContainer}>
        <img src={signImg} alt="" />
        <div className={signStyles.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Sign Up</h1>
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              style={errMsg ? { border: "1px solid red" } : { border: "none" }}
            />
            {errMsg ? <span>Passowrd Not Match</span> : undefined}
            <input
              type="password"
              placeholder="Confirm Password"
              value={cpw}
              onChange={(e) => setCpw(e.target.value)}
              style={errMsg ? { border: "1px solid red" } : { border: "none" }}
            />
            {errMsg ? <span>Passowrd Not Match</span> : undefined}
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <input type="submit" value={"Sign Up"} />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
