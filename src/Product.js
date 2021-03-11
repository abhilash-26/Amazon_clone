import React from 'react';
import './Product.css'
import { useStateValue } from './Stateprovider';

function Product({id,title,price,image}) {
    const [state, dispatch] = useStateValue();

    const addToBasket=()=>
    {
       dispatch({
           type:'ADD_TO_BASKET',
           item:{
               id:id,
               title:title,
               image:image,
               price:price
           }
       })
    }
    return (
        <>
        <div className='product'>
            <p>{title}</p>
            <p>{price}</p>
            <img className='product_image' src={image}/>
            <button onClick={addToBasket} className='add_button'>Add to basket</button>
        </div>
        </>
    )
}

export default Product
