import React, { Component } from "react";
import './Offers.css';
import { OffersItems } from "./OffersItems";

class Offers extends Component{
    render()
    {
return (
    
    <div className="offers-container">
          <h1 className="title" >Aktualne oferty pracy </h1>
    <div className ="offers-content">
         
     
        {OffersItems.map((item, index) => {
return(
    <div key ={index} className ="offer-box">
    <h2>{item.position}</h2><br/>
    <h3>Zarobki</h3>
    <h4>{item.money}</h4><br/>
    <h3>Opis stanowiska</h3>
    <p>{item.desc}</p><br/>
    <h3>Czego oczekujemy</h3>
    <p>{item.req}</p><br/>
    <h3>Mile widziane</h3>
    <p>{item.nh}</p><br/>
    <h3>Co oferujemy</h3>
    <p>{item.offer}</p> 
     <a href="mailto:krystianholubowicz@gmail.com"><button className="apply" type="button" >Aplikuj</button></a>
</div>

)

        })} 

</div>         
</div>
)
    }
}


export default Offers;