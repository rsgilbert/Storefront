import React from 'react'
import './QuantityBox.css'


export const QuantityBox = props => {

    const onQuantityChanged = e => {
        if(e.target.value >= 0) {
            props.onQuantityChanged(e.target.value)
        }
    }

    return  (
        <form className="quantity-form">
            <label  
                htmlFor="quantity"
                className="quantity-header">
                Quantity
            </label>
            <div className="quantity-input">
                <input
                    type="number"
                    min="1"
                    name="quantity"
                    placeholder="Quantity"
                    value={ props.quantity }
                    onChange={onQuantityChanged}
                    />
            </div>
        </form>
    )
}