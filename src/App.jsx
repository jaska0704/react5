import { useState } from 'react';
import { MainLayout } from './layout/mainLayaut';
import { Hero } from './components/hero';
import { dataProduct } from './data/data';
import { Banner } from './components/banners';
import { Button } from './components/buttons';
import "./main.scss";


function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Hero />
      <div className="container banners">
        {dataProduct.map((item) => (
          <Banner img={item.img} title={item.title} text={item.text} />
        ))}
      </div>
      <div>
        <div className="xit-buttons">
          <Button edit={'Хиты'} classN={'azure'} />
          <Button edit={'Скидки'} classN={'azure'} />
          <Button edit={'Новинки'} classN={'azure'} />
        </div>
      </div>
    </MainLayout>
  );
}

export default App
