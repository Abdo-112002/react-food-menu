import { useState } from 'react'
import AboutUs from './components/AboutUs';
import FavoriteFruits from './components/FavoriteFruits';
import Footer from './components/Footer';
import FruitShop from './components/FruitShop';
import HeroSection from './components/HeroSection';
import SubscribeSection from './components/SubscribeSection';
import './style/main.scss';

function App() {
  

  return (
    <>
        <HeroSection/>
        <FavoriteFruits/>
        <FruitShop/>
        <AboutUs/>
        <SubscribeSection/>
        <Footer/>
    </>
  )
}

export default App
