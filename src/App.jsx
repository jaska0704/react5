import { useState } from 'react';
import { MainLayout } from './layout/mainLayaut';
import { Hero } from './components/hero';
import "./main.scss";


function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Hero/>
     <div>
      <h1>hello</h1>
     </div>
    </MainLayout>
  )
}

export default App
