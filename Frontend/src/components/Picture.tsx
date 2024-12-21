import React from 'react'
import './Picture.css'

export const Picture = props => {


    return (
        <div>
            <img 
                className="picture"
                src={props.picture}
                />
        </div>
    )
}