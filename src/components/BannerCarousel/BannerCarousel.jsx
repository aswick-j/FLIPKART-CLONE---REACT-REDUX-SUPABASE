import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import "./BannerCarousel.css";
import Slider from "react-slick";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const BannerCarousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="__banner-carousel">
      <Slider {...settings}>
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
