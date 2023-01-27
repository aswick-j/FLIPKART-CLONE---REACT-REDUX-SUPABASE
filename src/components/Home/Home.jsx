import React from "react";
import "./Home.css";

import { CategoryBarData, CarouselData, BestOf } from "../../data";
import CategoryBar from "../CategoryBar/CategoryBar";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import ProductCarousel from "../ProductCarousel/ProductCarousel";

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
        <div className="__home-product-carousel">
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            title="Best of Electronics"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            title="Beauty,Food,Toys"
            Data={BestOf.BeautyFoodsToys}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            title="Winter Essentials"
            Data={BestOf.WinterEssential}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            title="Wedding & Gifting Specials"
            Data={BestOf.WeddingsAndGifts}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
