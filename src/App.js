import React, { useEffect } from "react";
import "./App.css";

import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import ProductDetails from "./components/ProductsDetails/ProductDetails.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Navbar from "./components/NavBar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import supabase from "./supabase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data.session) {
      dispatch(setUser(data.session.user));
      console.log(data.session.user);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
