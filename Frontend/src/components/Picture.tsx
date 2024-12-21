import React from 'react'
import './Picture.css'


interface PictureProps {
    picture: string
}
export const Picture = (props: PictureProps) => {


    return (
        <div>
            <img 
                className="picture"
                src={props.picture}
                />
        </div>
    )
}