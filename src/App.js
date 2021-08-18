import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import {SliderData} from './components/Slider/SliderData';
import ImageSlider from './components/Slider/ImageSlider';
import './App.css';
import Background from "./Background.jpg";



function App() {
  return (
    <div className="App" className="background-image"    >
        <Navbar />
      <div className="test">

  <ImageSlider slides={SliderData}/>
  <hr/>
  <Content/>
  <hr/>
  <Footer/>
  </div>
  </div>
  );
}

export default App;
