import React from 'react'
import './Picture.css'
import { StorageImage } from '@aws-amplify/ui-react-storage'

interface PictureProps {
    picture: string
}
export const Picture = (props: PictureProps) => {


    return (
        <div>
            <StorageImage
                alt={props.picture}
                path={props.picture}
                className="picture"
            />
        </div>
    )
}