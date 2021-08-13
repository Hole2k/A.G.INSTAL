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
<div className="menu-icon" onClick={this.handleClick}>
<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> {/*Zmiana ikony menu (Jeżeli klikniemy pojawi się X, aby ,,zamknąc")*/}
</div>
<ul className ={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

    {MenuItems.map((item, index) =>{
    return(
<li key = {index}>
    <a className = {item.cName} href = {item.url} >
{item.title}


</a>

</li>

)
    })}
    
</ul>
<input type="search" placeholder="Szukaj" className="input"></input>
<button className="search"><i class="fas fa-search"></i></button>
<Button>Zaloguj się</Button>

</nav>
        ); 
    }
}

export default Navbar