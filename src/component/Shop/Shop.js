import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';


const Shop = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch ('products.json')
        .then (res => res.json())
        .then (data => setProducts(data))

    },[])

    // const storedCart = [];
    // useEffect(()=>{
    //     const storedShoppingCart = getShoppingCart()
    // },[products])
    
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    

    return (
        <div className='shop-container'>
            {/* {/* products component */}
            <div className='produts-container'>
            {
                products.map(product=> <Product addCart = {addToCart} key = {product.id} product = {product}></Product>)
            } 

            </div>


            {/* Order Preview */}
            <div className='cart-container'>
                
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;