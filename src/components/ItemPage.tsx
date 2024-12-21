import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartAdded, selectIsCarted, selectCartItemQuantity } from '../features/cart/cartSlice'
import classNames from 'classnames'


import './ItemPage.css'
import { QuantityBox } from './QuantityBox'
import { Loading } from './Loading'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useItemByIdQuery } from './admin/items/service'
import { MyRootState } from '../store'
import { Item } from '../decl'
import { itemPictureLocationFor } from './Picture'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import { useCreateCartItemMutation } from './cart/service'
import { enqueueSnackbar } from 'notistack'

export const ItemCardPage = props => {
    const params = useParams() as { Id: string }
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

interface ItemCardProps {
    item: Item
}
export const ItemCard = (props: ItemCardProps) => {
    /** @type {Item} */
    const item = props.item;
    const [currentPictureIdx, setCurrentPictureIdx] = useState(0)
    const dispatch = useDispatch()
    const isCarted = useSelector((state: MyRootState) => selectIsCarted(state, item.Id))
    const cartItemQuantity = useSelector((state: MyRootState) => selectCartItemQuantity(state, item.Id))
    const [itemQuantity, setItemQuantity] = useState(1)
    const [createCartItem] = useCreateCartItemMutation()
    const navigate = useNavigate()

    const onQuantityChanged = (itemQuantity: number) => setItemQuantity(itemQuantity)



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
                    <StorageImage
                        alt={item.Description}
                        path={itemPictureLocationFor(picture.PictureUrl)}
                        className="thumbnail-picture"
                    />
                </li>
            )
        }
    })

    const addToCart = async () => {
        createCartItem({
            ItemId: props.item.Id,
            Quantity: itemQuantity
        })
        setItemQuantity(0)
        enqueueSnackbar('Item added to cart', { variant: 'success' })
    }

    async function buyItNowHandler() {
        if(itemQuantity == 0) { 
            // already carted
            return navigate('/cart')

        }
        let result = await createCartItem({
            ItemId: props.item.Id,
            Quantity: itemQuantity
        })

        if (!result.error) {
            navigate('/cart')
        }
    }
    return (
        <div className="itempage">
            <div>
                <div className="item-images">
                    <div>
                        <StorageImage
                            alt={item.Description}
                            path={itemPictureLocationFor(pictures[currentPictureIdx]?.PictureUrl)}
                            className="item-current-image"
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
                    <p> {item.Model}</p>
                    <p>
                        {item.DetailedDescription}
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
                    <button className="buy-it-now" onClick={buyItNowHandler}>
                        BUY IT NOW
                    </button>
                </div>

                <div className="item-info">

                    {/* <p>
                        {item.Model}
                    </p> */}
                    {/* <p>{item.quantity} </p> */}
                </div>


            </div>
        </div>
    )
}