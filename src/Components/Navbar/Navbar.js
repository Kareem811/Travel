import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { FiMenu } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [bigMenu, setBigMenu] = useState(false);
  const [close, setClose] = useState(false);
  const [wScroll, setWScoll] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      let windowSize = window.innerWidth;
      windowSize <= 700 ? setMenu(true) : setMenu(false);
    });
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY;
      windowScroll >= 700 ? setWScoll(true) : setWScoll(false);
    });
  });
  const changeMenu = () => {
    setBigMenu(!bigMenu);
    setClose(!close);
  };
  return (
    <header
      style={
        (bigMenu ? { background: "#fff" } : { background: "transparent" },
        window.location.pathname === "/" || window.location.pathname === "/home"
          ? { background: "transparent" }
          : { background: "#f4762d" })
      }
      className={wScroll ? "headerScroll" : undefined}
    >
      <nav style={bigMenu ? { color: "#2b2b2b" } : { color: "#fff" }}>
        <span>LOGO</span>
        <ul
          style={menu ? { display: "none" } : { display: "flex" }}
          className={bigMenu ? "bigMenu" : undefined}
        >
          <li>
            <NavLink
              to={"/home"}
              className={window.location.pathname === "/" ? "active" : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="/#about-section">About</a>
          </li>
          <li>
            <a href="/#contact-section">Contact</a>
          </li>
          <li>
            <NavLink to={"/places"}>Places</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </ul>
        {menu ? (
          close ? (
            <CgCloseO
              onClick={() => changeMenu()}
              size={25}
              cursor={"pointer"}
            />
          ) : (
            <FiMenu onClick={() => changeMenu()} size={25} cursor={"pointer"} />
          )
        ) : bigMenu ? (
          <CgCloseO onClick={() => changeMenu()} size={25} cursor={"pointer"} />
        ) : undefined}
      </nav>
    </header>
  );
};

export default Navbar;
