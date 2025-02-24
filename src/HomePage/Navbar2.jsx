import React from "react";
import "../Homepage/navbar2.css";
import menu from "../image/menu.png";

const Navbar2 = () => {
  return (
    <div className="navbar2">
      <div id="ul">
        <ul>
          <div id="div">
            <img src={menu} alt="" id="menu" />
            <p id="all">All</p>
          </div>
          <li>Mx Player</li>
          <li>Sell</li>
          <li>Todays Deal</li>
          <li>Amazon Pay</li>
          <li>Kepp Shopping For</li>
          <li>Better Seller</li>
          <li>Buy Again</li>
          <li>Prime</li>
          <li>Mobiles</li>
          <li>Customer Service</li>
          <li>New Releases</li>
          <li>Amazon Basics</li>
          <li>Home & Kitchen</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
