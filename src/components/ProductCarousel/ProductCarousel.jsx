import React from "react";
import "./ProductCarousel.css";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductBanner from "../ProductBanner/ProductBanner";
import { Link } from "react-router-dom";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Next = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};
const Prev = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIosNew
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};

const ProductCarousel = ({ BgImg, title, Data }) => {
  const Settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    infinite: false,
  };
  return (
    <div className="__product-carousel">
      <div
        className="__product-carousel-left"
        style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}
      >
        <p className="__product-title">{title}</p>
        <button className="__product-button" onClick={""}>
          View All
        </button>
      </div>
      <div className="__product-carousel-right">
        <Slider nextArrow={<Next />} prevArrow={<Prev />} {...Settings}>
          {Data.map((item, index) => (
            <Link
              key={index}
              to={"/products"}
              className="__product-carousel-link"
            >
              <ProductBanner
                ImgSrc={item.ImgSrc}
                Title={item.CategoryName}
                Brand={item.Brand}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
