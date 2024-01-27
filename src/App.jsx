import { useState } from 'react';
import { MainLayout } from './layout/mainLayaut';
import "./main.scss";


function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
     <div>
      <h1>hello</h1>
     </div>
    </MainLayout>
  )
}

export default App
