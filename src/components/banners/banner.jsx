import React from 'react'
import "./banner.scss";

export const Banner = ({img, title, text}) => {
  return (
    <div className="banner">
      <img src={img} alt="banners" />
      <div className="banner-info">
        <h2 className="banner-info-title">{title}</h2>
        <p className="banner-info-text">
          {text}
        </p>
      </div>
    </div>
  );
}
