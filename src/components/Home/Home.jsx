import React from "react";
import "./Home.css";

import { CategoryBarData, CarouselData, BestOf } from "../../data";
import CategoryBar from "../CategoryBar/CategoryBar";
import BannerCarousel from "../BannerCarousel/BannerCarousel";

const Home = () => {
  return (
    <div className="__home">
      <div className="__home-category-container">
        <div className="__home-category-bar">
          {CategoryBarData.map((item, index) => (
            <CategoryBar
              key={index}
              Imgsrc={item.imageSrc}
              CategoryName={item.category}
            />
          ))}
        </div>
      </div>
      <div className="__home-conatiner">
        <div className="__home-carousel">
          <BannerCarousel data={CarouselData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
