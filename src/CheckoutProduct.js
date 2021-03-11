import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './Stateprovider';


function CheckoutProduct({id,title,image,price}) {
    const [{basket}, dispatch] = useStateValue();

    const removeItem = ()=>
{
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,
    })
}
    return (
        <div className='checkoutProductContainer'>
            <img className='checkoutImage' src ={image}/>
            <div className='CheckoutProductInfo'>
            <p>{title}</p>
            <p>${price}</p>
            <button onClick={removeItem}>Remove item from the basket
            </button>
            </div>
           
        </div>
    )
}

export default CheckoutProduct
