import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import './App.css';
import Background from "./Background.jpg";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import index from "./Pages/index";



function App() {
  return (
   
    <div className="App" className="background-image"    >
        <Navbar />
      <div className="test">

       <Router>
    <Switch>
      <Route exact path ="/" component = {index}/>
      <Route exact path ="/Contact" component = {Contact}/>



      <Route exact path = "/Error" component ={Error}/>
      <Redirect to ="/Error"/>

      
    </Switch>
    </Router>

  <Footer/>
  </div>
  </div>
 
  );
}

export default App;
