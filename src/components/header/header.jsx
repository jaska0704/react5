import React from 'react';
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-items">
        <div className="container">
          <div className="header-item">
            <div className="header-logo">
              <img src="./Лого.png" alt="logo" />
              <span className="header-logo-title">
                Колбасы и мясные деликатесы
              </span>
            </div>
            <div className="header-icons">
              <img src="./Vector1.svg" alt="icon" />
              <img src="./Vector.svg" alt="icon" />
              <div className="header-icons-info">
                <p className="header-icons-item1">Товаров: 3</p>
                <p className="header-icons-item2">6 540 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-navs">
        <div className="container">
          <div className="nav-lists">
            <ul className="nav-list">
              <li>
                <a href="#">О ресноте</a>
              </li>
              <li>
                <a href="#">Каталог</a>
              </li>
              <li>
                <a href="#">Наши магазины</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
            <div className="nav-search">
              <input
                className="search"
                type="search"
                name="search"
                placeholder="Поиск по сайту"
              />
              <button className="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
