import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'
import { ItemRecord } from '../decl'
import { itemPictureLocationFor } from './Picture'
import { StorageImage } from '@aws-amplify/ui-react-storage'



/**
 * 
 * @param {{item: ItemRecord}} param0 
 * @returns 
 */
export const Item = ({ item }) => {
    const navigate = useNavigate()
    const picture = item.Pictures[0]

    const goToItemPage = () => {
        navigate(`/items/${item.Id}`)
    }


    return (
        <figure className="item-figure" onClick={goToItemPage}>
            <StorageImage
                alt={item.Description}
                path={itemPictureLocationFor(picture?.PictureUrl)}
                className="picture"
            />

            <figcaption>
                <div className="item-name">
                    {item.Description}
                </div>
                <div className="item-price">
                    {item.UnitPrice.toLocaleString()}
                </div>
            </figcaption>
        </figure>
    )
}