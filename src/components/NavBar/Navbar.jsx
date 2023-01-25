import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../../supabase";
import { removeUser } from "../../redux/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.userData.user);

  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setIsOpen(false);
    }
  }, [user]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(removeUser());
    }
  };

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
          {user ? (
            <h3 onClick={signOut}>@{user.email.slice(0, 6)}</h3>
          ) : (
            <button
              className="__navbar-loginbtn"
              onClick={() => setIsOpen(true)}
            >
              Login
            </button>
          )}
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
            <Link to={"/cart"} className="__navbar-cartLink">
              Cart
            </Link>
          </div>
        </div>
        <Login isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Navbar;
