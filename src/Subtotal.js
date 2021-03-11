import React from 'react'
import './Subtotal.css'
import { useStateValue } from './Stateprovider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();

    return (
        <div className='checkout_container'>
            <div className='subtotal'>
                <p>Subtotal({basket.length} items):<strong>${getBasketTotal(basket)}</strong></p>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
