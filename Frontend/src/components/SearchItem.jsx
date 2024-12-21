import React from 'react'
import './SearchItem.css'
import { useNavigate } from 'react-router-dom'



export const SearchItem = ({ item }) => {
    const navigate = useNavigate()

    const goToItemPage = () => {
        navigate(`/items/${item.id}`)
    }


    return (
        <figure className="searchitem-figure" onClick={goToItemPage}>
            <img 
                src={item.pictures[0]}
                />
            <figcaption>
                <div className="searchitem-name">
                    <h1>{ item.name}</h1>
                </div>
                <div className="searchitem-price"> 
                    <h2>{item.price.toLocaleString()}</h2>
                </div>
                <p  className="searchitem-info">{ item.specs }</p>
                <p>{ item.description }</p>
            </figcaption>
        </figure>
    )
}