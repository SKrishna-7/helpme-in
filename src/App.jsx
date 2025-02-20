import { useState } from 'react'

import './App.css'
import Header from './Components/Header'

import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Work from './Components/Work';
import Stats from './Components/Stats';
import Showreel from './Components/Showreel';
import ClientLogos from './Components/Clients';
import MovingText from './Components/Movingtext';
import GetInTouch from './Components/GetInTouch';
import Vision from './Components/Vision';
import AnimatedText from './Components/Vision';
import Recognition from './Components/Recognition';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Home/>
      <Work/>
      <Stats/>
      <Showreel/>
      <ClientLogos/>
      <MovingText/>
      <GetInTouch/>
      <Vision/>
      <Recognition/>
      <Portfolio/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
