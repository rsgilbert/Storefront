import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'



/**
 * 
 * @param {{item: Item}} param0 
 * @returns 
 */
export const Item = ({ item }) => {
    const navigate = useNavigate()
    const picture = item.Pictures[0]

    const goToItemPage = () => {
        navigate(`/items/${item.No}`)
    }


    return (
        <figure className="item-figure" onClick={goToItemPage}>
            <img 
                src={picture?.PictureUrl}
                />
            <figcaption>
                <div className="item-name">
                    { item.Description}
                </div>
                <div className="item-price"> 
                    { item.UnitPrice.toLocaleString() }
                </div>
            </figcaption>
        </figure>
    )
}