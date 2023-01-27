import React from "react";
import "./ProductBanner.css";

const ProductBanner = ({ ImgSrc, Title, Brand }) => {
  return (
    <div className="__product-banner">
      <img src={ImgSrc} alt="" className="__product-banner-img" />
      <p className="__product-banner-title">
        {Title.length < 25 ? Title : Title.slice(0, 25) + "..."}
      </p>
      <p className="__product-banner-shopNow">Shop Now!</p>
      <p className="__product-banner-brands">{Brand}</p>
    </div>
  );
};

export default ProductBanner;
