import React from 'react'
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export const MainLayout = ({children}) => {
  return (
    <>
      <header><Header/></header>
      <main>{children}</main>
      <footer><Footer/></footer>
    </>
  );
}
