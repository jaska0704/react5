import React from 'react';
import "./card.scss";
import { Button } from '../buttons';

export const CardSkidki = ({img, title, text}) => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card">
          <img src={img} alt="card-image" />
          <img className="skidka-icon" src="./skidka.svg" alt="image" />
          <p className='skidka-text'>Скидка</p>
          <h3 className="card-title">{title}</h3>
          <p className="card-text">
            {text}
          </p>
          <p className="card-price">500₽</p>
          <div className="card-items">
            <span className="card-item1">660₽</span>
            <span className="card-item2">15%</span>
            <span className="card-item3">Экономия 160 ₽</span>
          </div>
          <div className="card-buttons">
            <Button edit={"Купить"} classN={"button-card1"} />
            <Button edit={"В 1 клик"} classN={"button-card2"} />
          </div>
        </div>
      </div>
    </div>
  );
}
