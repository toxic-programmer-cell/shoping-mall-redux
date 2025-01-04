import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <div className='cartSummary'>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img 
                                src={item.thumbnail} 
                                alt={item.title} 
                            />
                            {item.title} - ${item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No product in cart</p>
            )}
            
        </div>
    );
}

export default Cart;
