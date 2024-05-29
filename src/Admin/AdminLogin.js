import React, { useState } from "react";
import signStyles from "./admin.module.css";
import signImg from "../Images/temple.jpg";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
const AdminLogin = () => {
  const [admin, setAdmin] = useState({
    adminEmail: ``,
    adminpassword: ``,
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
            <h1>Admin Login</h1>
            <input
              type="email"
              placeholder="Email"
              value={admin.email}
              onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={admin.password}
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            />
            <button>Sign In</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminLogin;
