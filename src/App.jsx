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
import OurSPA from './Components/OurSPA';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';

function App() {
 

  return (
    <>
      <Header/>
    <div className="">
      <div id="home">
      <Home/>
      </div>
      <div id="inspiration">
      <Showreel/> 
      </div>
      <div id="aboutus">
      <Services/>

      </div>
      <div id="ourspa">
      <OurSPA/>

      </div>
      <div id="work">
      <Aboutus/>
      <Vision/>
      <MovingText/>
      </div>
      <div id="contact">
      <GetInTouch/>
      </div>
    </div>
      {/* <ClientLogos/> */}
      {/* <Portfolio/> */}
      <Footer/>
  
    </>
  )
}

export default App
