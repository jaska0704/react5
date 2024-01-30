import React from 'react'

export const Cardxiti = () => {
  return (
    <div className="container">
      <div className="cardsxit">
        <div className="cardxit">
          <img src={img} alt="cardxit-image" />
          <img className="xit-icon" src="./xit.svg" alt="image" />
          <p className="xit-text">Хит</p>
          <h3 className="cardxit-title">{title}</h3>
          <p className="cardxit-text">{text}</p>
          <p className="cardxit-price">500₽</p>
          <div className="cardxit-items">
            <span className="cardxit-item1">660₽</span>
            <span className="cardxit-item2">15%</span>
            <span className="cardxit-item3">Экономия 160 ₽</span>
          </div>
          <div className="cardxit-buttons">
            <Button edit={"Купить"} classN={"button-card1"} />
            <Button edit={"В 1 клик"} classN={"button-card2"} />
          </div>
        </div>
      </div>
    </div>
  );
}
