import React from 'react'
import './PageTitle.css'

export const PageTitle = props => {
    return (
        <h1 className="title">{props.title}</h1>
    )
}