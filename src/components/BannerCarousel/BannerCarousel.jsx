import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import "./BannerCarousel.css";
import Slider from "react-slick";
import { useState } from "react";
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

const BannerCarousel = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="__banner-carousel">
      <Slider nextArrow={<Next />} prevArrow={<Prev />} {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <img
              src={item.Imgsrc}
              alt="Carousel Images"
              className="__banner-carousel-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
