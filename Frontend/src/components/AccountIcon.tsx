import React from 'react'

import account from '../icons/account.svg'
import './Icon.css'


export const AccountIcon = props => {

    return (
        <div>
            <img 
                className="icon" 
                src={ account } 
                alt="cart"/>
        </div>
    )

}