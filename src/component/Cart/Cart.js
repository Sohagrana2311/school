import React, { useEffect } from 'react';
import './Cart.css'
import { getShoppingCart } from '../../utilities/fakedb';

const Cart = ({cart}) => {
    useEffect(()=>{
        const storedCart = getShoppingCart();
        
        console.log(storedCart)
    },[])
    let total = 0;
    let shipping = 0;
   for (const product of cart){
    total = product.price + total
    shipping = product.shipping + shipping
    
   }
   const tax = ((total + shipping) * 0.2).toFixed(2)
    const grandTotal = total + shipping + (+tax)
    return (
        <div className='cart-content'>
            <h1>Order Summary</h1>
            <h2>selected Items : {cart.length}</h2>
            <h4>Total Price : {total}</h4>
            <h4>Total Shipping : {shipping}</h4>
            <h4>Total Tex : {tax}</h4>
            <h2>Grand Total: {grandTotal}</h2>
        </div>
    );
};

export default Cart;