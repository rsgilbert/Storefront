import React from 'react'

import search from './search.svg'
import './SearchIcon.css'
import { useNavigate } from 'react-router-dom'


export const SearchIcon = props => {
    const navigate = useNavigate()

    const goToSearch = () => navigate("/search")

    return (
        <div 
            // onClick={goToSearch}
            >
            <img 
                className="searchicon" 
                src={ search } 
                alt="cart"/>
        </div>
    )

}