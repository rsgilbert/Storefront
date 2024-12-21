import React, { useState } from 'react'
import { getIdFromWindow } from '../../functions'
import { useSelector, useDispatch } from 'react-redux'
import { selectItem, selectAllItems } from '../itemlist/itemlistSlice'
import { cartAdded, selectIsCarted, selectCartItemQuantity } from '../cart/cartSlice'
import classNames from 'classnames'


import './ItemPage.css'
import { QuantityBox } from '../../components/QuantityBox'
import { Loading } from '../../components/Loading'
import { useLocation, useParams } from 'react-router-dom'
import { useItemByIdQuery } from '../../components/admin/items/service'

export const ItemCardPage = props => {
    const params = useParams()
    const { data, error, isLoading } = useItemByIdQuery(params)


    if (error) {
        return (
            <div>
                {String(error)}
            </div>
        )
    }

    if (isLoading) {
        return <Loading />
    }


    return (
        <ItemCard item={data} />
    )
}


export const ItemCard = props => {
    /** @type {Item} */
    const item = props.item;
    const [currentPictureIdx, setCurrentPictureIdx] = useState(0)
    const dispatch = useDispatch()
    const isCarted = useSelector(state => selectIsCarted(state, item.Id))
    const cartItemQuantity = useSelector(state => selectCartItemQuantity(state, item.Id))
    const [itemQuantity, setItemQuantity] = useState(isCarted ? cartItemQuantity : 1)

    const onQuantityChanged = itemQuantity => setItemQuantity(itemQuantity)


 
    const pictures = item.Pictures



    const renderNonCurrentPictures = () => pictures.map((picture, index) => {
        const changeCurrentPicture = () => setCurrentPictureIdx(index)

        if (pictures[currentPictureIdx] !== picture) {
            return (
                <li
                    className="item-thumbnail"
                    onClick={changeCurrentPicture}
                    key={index}
                >
                    <img
                        src={picture.PictureUrl}
                        className="thumbnail-picture"
                    />
                </li>
            )
        }
    })

    const addToCart = () => {
        dispatch(cartAdded({
            ...item,
            itemQuantity
        }))
    }

    return (
        <div className="itempage">
            <div>
                <div className="item-images">
                    <div>
                        <img
                            className="item-current-image"
                            src={pictures[currentPictureIdx]?.PictureUrl}
                        />
                    </div>
                    <div className="thumbnails">
                        <ul className="thumbnail-list">
                            {renderNonCurrentPictures()}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="item-details">
                <div>
                    <h1>
                        {item.Description}
                    </h1>
                    <p>
                        {item.Model}
                    </p>
                    <h2>{item.UnitPrice}</h2>
                    <div>
                        <QuantityBox
                            quantity={itemQuantity}
                            onQuantityChanged={onQuantityChanged} />
                    </div>
                </div>
                <div className="item-actions">
                    <button
                        onClick={addToCart}
                        className={classNames("add-to-cart", {
                            iscarted: isCarted
                        })}>
                        {isCarted ? "CARTED" : "ADD TO CART"}
                    </button>
                    <button className="buy-it-now">
                        BUY IT NOW
                    </button>
                </div>

                <div className="item-info">

                    <p>
                        {item.Model}
                    </p>
                    {/* <p>{item.quantity} </p> */}
                </div>


            </div>
        </div>
    )
}