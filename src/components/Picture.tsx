import React from 'react'
import './Picture.css'
import { StorageImage } from '@aws-amplify/ui-react-storage'

interface PictureProps {
    picture: string
}


export const itemPicturePrefix = 'item-pictures/'
export function itemPictureLocationFor(filename: string ) {
    return `${itemPicturePrefix}${filename}`
}

export const Picture = (props: PictureProps) => {


    return (
        <div>
            <StorageImage
                alt="Item Picture"
                path={itemPictureLocationFor(props.picture)}
                className="picture"            
            />
        </div>
    )
}