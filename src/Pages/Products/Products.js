import { Component } from 'react';
import { ProductItems } from './ProductItems';
import './Products.css';


class Products extends Component 
{
    render()
    {
        return(
            <div className="products-container">

                {ProductItems.map((item, index) => {
return(
                <div key={index} className= "product-card">
                    
                {item.url}
<h1>{item.pName}</h1>
<h2>{item.price}</h2>
<button className = "product-button" type="button">Dodaj do koszyka</button>

                </div>

                )})}
            </div>
        )
    }
}


export default Products;
