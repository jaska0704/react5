import React from 'react';
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-block1">
        <div className="container">
          <div className="footer_a">
            <div className="block1-item1">
              <h2>Есть вопросы?</h2>
              <p>
                Оставьте свои данные и наш менеджер свяжется с вами в ближайшее
                время.
              </p>
            </div>
            <div className="block1-logo">
              <img src="./Frame.png" alt="logo-footer" />
            </div>
            <div className="block1-item2">
              <div className="block1-info">
                <div className="footer-input">
                  <input type="text" placeholder="Ваше имя" />
                  <br />
                  <input type="text" placeholder="Телефон/E-mail" />
                </div>
                <textarea name="coment" id="" cols="33" rows="6"></textarea>
              </div>
              <input type="checkbox" name="" id="" />
              <span>
                Даю согласие на рассылку рекламных материалов, акций и скидок
              </span>
              <br />
              <input type="checkbox" name="" id="" />
              <span>Даю согласие на обработку моих персональных данных</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-block2"></div>
    </footer>
  );
}
