import React from "react";
import { Button } from "../buttons";
import "./hero.scss";
import "./index"

export const Hero = () => {
  return (
    <div className="hero">
      <div className="slider">
        <img src="./hero1.png" alt="hero_img" />
        <div className="hero-buttons">
          <i id="left" class="fa-solid fa-arrow-left fa-2x"></i>
          <i id="right" class="fa-solid fa-arrow-right fa-2x"></i>
        </div>
        <div className="hero-info">
          <h1 className="hero-info-title">Истина в качестве</h1>
          <p className="hero-info-text">
            КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
            КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
          </p>
          <Button edit={"Купить"} classN={"secondry"} />
        </div>
      </div>
    </div>
  );
};
