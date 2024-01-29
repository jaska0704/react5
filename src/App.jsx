import { useState } from 'react';
import { MainLayout } from './layout/mainLayaut';
import { Hero } from './components/hero';
import { dataProduct } from './data/data';
import { Banner } from './components/banners';
import "./main.scss";


function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Hero />
      <div className='container banners'>
        {dataProduct.map((item) => (
          <Banner img={item.img} title={item.title} text={item.text}/>
        ))}
      </div>
    </MainLayout>
  );
}

export default App
