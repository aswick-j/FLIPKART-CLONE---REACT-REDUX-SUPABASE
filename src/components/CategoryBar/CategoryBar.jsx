import React from "react";
import "./CategoryBar.css";

const CategoryBar = ({ Imgsrc, CategoryName }) => {
  return (
    <div className="__category-bar">
      <div className="__category-img">
        <img src={Imgsrc} alt="CategoryImage" />
      </div>
      <p className="__category-bar-name">{CategoryName}</p>
    </div>
  );
};

export default CategoryBar;
