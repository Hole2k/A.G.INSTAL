import React from 'react';
import './Contact.css';
import { EmployeeItems } from './EmployeeItems';
import {FiFacebook} from 'react-icons/fi';
import {AiFillLinkedin} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';

export default class Contact extends React.Component
{
    render()
    {
        return (

            <div className = "contact-container">
               <div className="photo"> 
              <img src="https://cdn.pixabay.com/photo/2016/10/03/20/04/building-1712699_960_720.jpg" height="800px" alt="Company building "></img>
              </div>

              <div className="workers">

              {EmployeeItems.map((item, index) =>{
    return(

<div className="employee" key = {index}>
    <img src={item.Url} alt="WorkerAvatar"/>
    <h1>{item.Name}</h1>
    <h3>{item.WorkPlace}</h3>
    <p>{item.Description}</p>
    
    <div className="employee-social">
    <a href={item.UrlIn} target="_blank" rel="noreferrer"><AiFillLinkedin className="linkedin" /></a>
    <a href={item.UrlGmail} target="_blank" rel="noreferrer"><SiGmail className="gmail"  /></a>
    <a href={item.UrlFb} target="_blank" rel="noreferrer"><FiFacebook  className="facebook" /></a>
    </div>

</div>


)
    })


                  }


              </div>
<div className= "contact-content">

    <div className="info">
                    
    <h2>A.G.INSTAL</h2>
        <h3>Adres: Wojska Polskiego 112H, 16-400 Suwałki</h3><br/>
        <h3>Godziny pracy:</h3>
        <ul>
            <li>Poniedziałek: 06:00–14:00</li>
            <li>Wtorek: 06:00–14:00</li>
            <li>Środa: 06:00–14:00</li>
            <li>Czwartek: 06:00–14:00</li>
            <li>Piątek: 06:00–14:00</li>
            <li>Sobota: Zamknięte</li>
            <li>Niedziela: Zamknięte</li>
        </ul><br/>
 <p>Telefon: <strong>123 456 789</strong></p>
    </div>



    <div className="map">
    <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2341.890370265384!2d22.92568021586538!3d54.05795198013433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e101dd221ccd4d%3A0xa1b6106287f5a113!2sWojska%20Polskiego%20112H%2C%2016-400%20Suwa%C5%82ki!5e0!3m2!1spl!2spl!4v1629704134452!5m2!1spl!2spl"  allowfullscreen="" loading="lazy"></iframe>
    </div>
</div>


</div>
        )
    }
}