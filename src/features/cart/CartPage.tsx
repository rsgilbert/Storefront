import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllCartItems, cartItemQuantityUpdated, cartItemRemoved } from './cartSlice'
import { Link } from 'react-router-dom'
import { QuantityBox } from '../../components/QuantityBox'
import './CartPage.css'
import { QuantityBoxCart } from '../../components/QuantityBoxCart'
import { Cart, CartItem } from '../../decl'

export const CartPage = () => {
    const cart: Cart = useSelector<any, Cart>(selectAllCartItems)
    const dispatch = useDispatch()

    let total = 0
    cart.map((cartItem : CartItem)=> total += cartItem.ItemUnitPrice * cartItem.ItemQuantity)

    

    const renderEmptyCart = (
        <div className="empty-cart">
            <h1 className="cartpage-title">Cart</h1>
            <p>
                Cart is empty. Please add some <Link to="/">items</Link>
            </p>
        </div>
    )


    const renderCartItems = () => cart.map(cartItem => { 
        const setItemQuantity = (itemQuantity: number) => {
            dispatch(cartItemQuantityUpdated({
                cartItemId: cartItem.Id,
                itemQuantity
            }))
        }

        const removeFromCart = () => {
            dispatch(cartItemRemoved({ id: cartItem.Id }))
        }
        
        return (
            <li className="cart-item-complexity">
                <div className="cart-item">
                    <div className="cart-item-info">   
                        <img 
                            src={cartItem.ItemPictureUrl}
                            className="cart-item-thumbnail"
                            />
                        <p>{ cartItem.ItemDescription }</p>
                    </div>
                    <div className="price-and-quantity">
                        <p>{ `${cartItem.ItemQuantity} ${cartItem.ItemQuantity}` }</p>
                        <QuantityBoxCart 
                            quantity={cartItem.ItemQuantity}
                            onQuantityChanged={setItemQuantity} />
                        <div className="cart-item-info info-desc-total">
                            <p className="info-desc">Total: </p>
                            <p>{ (cartItem.ItemQuantity * cartItem.ItemUnitPrice).toLocaleString() }</p>
                        </div>
                    </div>
                </div>
                <button className="cart-remove-item"
                    onClick={removeFromCart}>
                    Remove
                </button>               
            </li>
        )
    })
    

    if(!cart.length) return renderEmptyCart

    return (
        <div className="cartpage">
            <h1 className="cartpage-title">Cart</h1>
            { cart.length && (
                <div>
                    <div className="cart-headings cart-item">
                        <h1>PRODUCT</h1>
                        <h1>PRICE</h1>
                    </div>
                    { renderCartItems() }                    
                </div>
            )}
            <div className="cart-total">
                <p>
                    Total
                </p>
                <p>
                    {total.toLocaleString()}
                </p>
            </div>

            <div className="checkout">
                <button  className="checkout-button">CHECK OUT</button>
            </div>
        </div>
    )
}