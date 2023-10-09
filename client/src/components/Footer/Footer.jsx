import React, { useEffect } from "react";
import "./Footer.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  let path = useLocation().pathname;
  console.log(path);

  return (
    <div
      className="footer"
      style={path === "/" ? { width: "48%" } : { width: "95%" }}
    >
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex tempore
            rem libero maxime minima fugit eius eos quisquam blanditiis tenetur,
            modi debitis rerum voluptate, similique exercitationem dolorem atque
            corporis! Nihil?
          </span>
        </div>
        <div className="item">
          <h1>Contacts</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex tempore
            rem libero maxime minima fugit eius eos quisquam blanditiis tenetur,
            modi debitis rerum voluptate, similique exercitationem dolorem atque
            corporis! Nihil?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Desk Decor</span>
          <span className="copyright">
            &copy; Copyright 2023 All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="../../img/payment.png" alt="" />
        </div>
      </div>
      <div className="quoteContainer">
        <span>
          "Man who work for passion always richer, than man who work for money."
        </span>
        <span>-Mr. Myagi</span>
      </div>
    </div>
  );
};

export default Footer;
