import React, { useState } from "react";
import "./Login.css";

import { RxCross2 } from "react-icons/rx";

import supabase from "../../supabase";

const Login = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState("");

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (data.user) {
      alert("Account Created. Please verify your Email");
    }
    console.log(data, error);
    alert(error.message);
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data, error);
    if (error) {
      alert(error?.message);
      return;
    }
  };

  return isOpen ? (
    <div className="__login-overlay">
      <div className="__login-modal">
        <div className="__login-left">
          <div className="__login-leftContainer">
            <p className="__login-title">Login</p>
            <p className="__login-desc">
              Get Access to your orders, wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="__login-right">
          <div className="__login-inputBox">
            <input
              type="email"
              className="__login-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="__login-inputBox">
            <input
              type="password"
              className="__login-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <p className="__login-tnc">
            By Continuing, you agree to Flipkart's
            <span style={{ color: "blue" }}>Terms of use</span> and
            <span style={{ color: "blue" }}> Privacy Policy.</span>
          </p>
          {loginType ? (
            <button className="__login-btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="__login-btn" onClick={signup}>
              Signup
            </button>
          )}
          {loginType ? (
            <p className="__login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="__login-signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="__login-close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Login;
