import React, {Component} from 'react';
import { FooterItems} from "./FooterItems";
import './Footer.css';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi';

class Footer extends Component{


    render()
    {
        return(
            <footer className="FooterItems">
<h1 className= "footer-logo">A.G.INSTAL</h1>

             {FooterItems.map((item, index) => {{
return(
    
    < li key = {index}>
<a className ={item.cName} href= {item.url}>
    {item.title}
</a>

    </li>
)


             }})} 
      
      <div className="footer-social">
          
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FiFacebook className="fb" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FiInstagram className="insta" /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FiTwitter className="twitter" /></a>
             </div>

             <br/>
             <div className = "info">
             <p className="autor">Autor: Krystian Holubowicz<br/>
             <a className="mail" href="mailto:krystianholubowicz@gmail.com">krystianholubowicz@gmail.com</a></p>
             </div>
            </footer>
        )
    }
}



export default Footer