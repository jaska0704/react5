import React from 'react'
import { Hero } from '../hero';
import { dataProduct } from '../../data/data';
import { Banner } from '../banners/banner';
import { Button } from '../buttons';
import { CardSkidki } from '../card/card';
import { cartProduct } from "../../data/cards";
import { Route, Routes } from 'react-router-dom';
import { Cardxiti } from '../cardxiti';
import "./home.scss";

export const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <div className="container banners">
          {dataProduct.map((item) => (
            <Banner img={item.img} title={item.title} text={item.text} />
          ))}
        </div>
        <div>
          <div className="xit-buttons">
            {/* <Link to="/cardxiti"> */}
              <Button edit={"Хиты"} classN={"azure"} />
            {/* </Link> */}
            <Button edit={"Скидки"} classN={"azure"} />
            <Button edit={"Новинки"} classN={"azure"} />
          </div>
          <div className="card-main container">
            {cartProduct.map((item) => (
              <CardSkidki img={item.img} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </div>
      {/* <Route path='/cardxiti' element={<Cardxiti/>}/> */}
    </>
  );
}
