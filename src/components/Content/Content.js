import { Component } from 'react';
import './Content.css';
import { ContentItems } from "./ContentItems";


class Content extends Component{
    render()
    {
        return(
            
       
<div className="container">
            <div className="logos">
            {ContentItems.map((item, index) =>{{/* Mapa z MenuItems.js która posiada item oraz index*/}
    return(
        <div className="logo">
<div key = {index}>{/* index pobierany z mapy wyżej. */}       
  {item.logo}

<h1>{item.title}</h1>
<p>{item.text}</p>
</div>

</div>
                    )
                })}



            </div>
            <div className="container1">
                    <div className="video" >
                    <iframe title="CompanyVideo" frameborder="0" width = "100%" height ="100%" src="https://www.youtube.com/embed/7sDY4m8KNLc" ></iframe>
                    </div>
                    
                    <div className="video-text">

                    <a href="https://www.youtube.com/"><h1 className="yt">Youtube</h1></a>
<p>Sprawdź nas na youtube. Znajdziesz tam filmy z naszym udziałem, poradniki oraz wiele więcej. Pomóz nam się rozwijać. Udostępnij znajomym i nie zapomnij o subskrypcji. </p>
                   

<a href="https://www.facebook.com/"><h1 className="fb">Facebook</h1></a>
<p>Sprawdź nas na youtube. Znajdziesz tam filmy z naszym udziałem, poradniki oraz wiele więcej. Pomóz nam się rozwijać. Udostępnij znajomym i nie zapomnij o subskrypcji. </p>
                    

<a href="https://www.instagram.com/"> <h1 className="in">Instagram</h1></a>
<p>Sprawdź nas na youtube. Znajdziesz tam filmy z naszym udziałem, poradniki oraz wiele więcej. Pomóz nam się rozwijać. Udostępnij znajomym i nie zapomnij o subskrypcji. </p>
                   


<a href="https://twitter.com/">  <h1 className="tw">Twitter</h1></a>
<p>Sprawdź nas na youtube. Znajdziesz tam filmy z naszym udziałem, poradniki oraz wiele więcej. Pomóz nam się rozwijać. Udostępnij znajomym i nie zapomnij o subskrypcji. </p>
                    
                    </div>

                </div>
            </div>
        )
    }
}

export default Content;