import React from 'react'

import hamburger from '../icons/hamburger.svg'
import './Icon.css'


export const HamburgerIcon = props => {


    return (
        <div>
            <img 
                className="icon" 
                src={ hamburger } 
                alt="menu"/>
        </div>
    )

}