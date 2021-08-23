import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import Cookies from './Pages/Cookies/Cookies';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import index from "./Pages/index";



function App() {
  return (
   
    <div className="App" className="background-image"    >
        <Navbar />
      <div className="contents">

       <Router>
    <Switch>
      <Route exact path ="/" component = {index}/>
      <Route exact path ="/Contact" component = {Contact}/>
      <Route exact path ="/Cookies" component = {Cookies}/>


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
