import React from 'react'


import './Icon.css'

interface IconProps {
    icon: string 
}
export const Icon = (props: IconProps) => {
    return (
        <div className="icon-container">
            <img 
                className="icon" 
                src={ props.icon } 
                alt="menu"/>
        </div>
    )

}