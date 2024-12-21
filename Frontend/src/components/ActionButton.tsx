import React from 'react'

import './ActionButton.css'


export const ActionButton = props => {


    return (
        <button onClick={props.onClick}
            className={`action-button ${props.className}`}>
            {props.title}
        </button>
    )
}