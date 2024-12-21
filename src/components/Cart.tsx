import React from 'react'

import cart from './cart.svg'
import './Cart.css'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useCartItemsQuery } from './cart/service'


export const Cart = props => {
    const {data, isLoading} = useCartItemsQuery()

    const cartCount = data?.length || 0;
    const navigate = useNavigate()

    const goToCart = () => navigate("/cart")
   

    return (
        <div 
            className="cart"
            onClick={goToCart}>
            <img 
                className="cart-img" 
                src={ cart } 
                alt="cart"/>
            <div   
                className="cart-count"
                >
                <span>{ cartCount }</span>
            </div>
        </div>
    )

}