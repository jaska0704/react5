import React from 'react';
import { MainLayout } from './layout/mainLayaut';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/home';
import { Katalog } from './components/Katalog';
import "./main.scss";


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home />}/>
          <Route path='katalog' element={<Katalog/>}/>      
      </Route>
    </Routes>
    </>
  );
}

export default App
