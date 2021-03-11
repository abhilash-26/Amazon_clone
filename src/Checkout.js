import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './Stateprovider';

function Checkout() {
    const [{basket},dispatch] = useStateValue();


    return (
        <>
        <div>
          <Subtotal/>
        </div>
        <div>
        <h1>{basket.map(item => <CheckoutProduct id = {item.id} title={item.title} image ={item.image} price={item.price}/>)}</h1>
        </div>
        </>
    )
}

export default Checkout
