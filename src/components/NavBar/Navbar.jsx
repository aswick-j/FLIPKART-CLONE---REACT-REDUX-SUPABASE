import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="__navbar-conatiner">
        <div className="__navbar">
          <Link to={"/"}>
            <img
              src="https://i0.wp.com/govinfo.me/wp-content/uploads/2019/01/flipkart.jpg?resize=364%2C137&ssl=1"
              alt=""
              className="__navbar-logo"
            />
          </Link>
          <div className="__navbar-search">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="__navbar-searchbox"
            />

            <button className="__navbar-searchbtn">
              <IoSearch />
            </button>
            </div>
            <button className="__navbar-loginbtn">Login</button>
            <div className="__navbar-bs">
              <h3>Become a Seller</h3>
            </div>
            <div className="__navbar-more">
              <h3>
                More
                <i className="__navbar-moredropdown">
                  <MdKeyboardArrowDown />
                </i>
              </h3>
            </div>
            <div className="__navbar-cart">
              <div className="__navbar-cartIcon">
                <FaShoppingCart />
              </div>
              <Link to={"/cart"} className="__navbar-cartLink">Cart</Link>
            </div>
          </div>
        </div>
  
    </>
  );
};

export default Navbar;
