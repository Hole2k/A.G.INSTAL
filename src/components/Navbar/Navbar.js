import React, {Component} from 'react';
import { MenuItems} from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';


class Navbar extends Component{
state = {clicked: false }

handleClick = () => {
    this.setState({clicked: !this.state.clicked})
}

    render()
    {
        return( 
<nav className ="NavbarItems">
<h1 className ="navbar-logo">A.G.INSTAL<i className="fas fa-ship"></i></h1>
<div className="menu-icon" onClick={this.handleClick}>{/*Ikona menu z funkcją onClick */}
<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> {/*Zmiana ikony menu (Jeżeli klikniemy pojawi się X, aby ,,zamknąc")*/}
</div>
<ul className ={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>{/* */}

    {MenuItems.map((item, index) =>{{/* Mapa z MenuItems.js która posiada item oraz index*/}
  
  
  return(
<li key = {index}>{/* index pobierany z mapy wyżej. */}
    <a className = {item.cName} href = {item.url} >{/* Do ,,a" jest przypisana klasa, href oraz Nazwa. Wszystkie informacje znajdują się pliku MenuItems.js*/}
{item.title}
</a>
</li>
)
   
   
   
   })}<div>

    </div>
    
    
    
</ul>
<input type="search" placeholder="Szukaj" className="input"></input>{/* Miejsce na wprowadzenie tekstu */}
<button className="search"><i class="fas fa-search"></i></button>{/* Przycisk szukania */}
<Button>Zaloguj się</Button>






</nav>
        ); 
    }
}

export default Navbar