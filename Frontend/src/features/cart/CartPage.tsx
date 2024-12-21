import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllCartItems, cartItemQuantityUpdated, cartItemRemoved } from './cartSlice'
import { Link } from 'react-router-dom'
import { QuantityBox } from '../../components/QuantityBox'
import './CartPage.css'
import { QuantityBoxCart } from '../../components/QuantityBoxCart'

export const CartPage = props => {
    const cart = useSelector(selectAllCartItems)
    const dispatch = useDispatch()

    let total = 0
    cart.map(cartItem => total += cartItem.price * cartItem.itemQuantity)

    

    const renderEmptyCart = (
        <div className="empty-cart">
            <h1 className="cartpage-title">Cart</h1>
            <p>
                Cart is empty. Please add some <Link to="/">items</Link>
            </p>
        </div>
    )


    const renderCartItems = () => cart.map(cartItem => { 
        const setItemQuantity = itemQuantity => {
            dispatch(cartItemQuantityUpdated({
                cartItemId: cartItem.id,
                itemQuantity
            }))
        }

        const removeFromCart = () => {
            dispatch(cartItemRemoved({ id: cartItem.id }))
        }
        
        return (
            <li className="cart-item-complexity">
                <div className="cart-item">
                    <div className="cart-item-info">   
                        <img 
                            src={cartItem.pictures[0]}
                            className="cart-item-thumbnail"
                            />
                        <p>{ cartItem.name }</p>
                    </div>
                    <div className="price-and-quantity">
                        <p>{ cartItem.price.toLocaleString() }</p>
                        <QuantityBoxCart 
                            quantity={cartItem.itemQuantity}
                            onQuantityChanged={setItemQuantity} />
                        <div className="cart-item-info info-desc-total">
                            <p className="info-desc">Total: </p>
                            <p>{ (cartItem.itemQuantity * cartItem.price).toLocaleString() }</p>
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