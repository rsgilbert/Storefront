import React from 'react'
import './MyButton.css'


export const MyButton = props => {
    const handleClick = e => props.handleClick()
    return (
        <button className="my-button" onClick={handleClick}>
            { props.title }
        </button>
    )
}