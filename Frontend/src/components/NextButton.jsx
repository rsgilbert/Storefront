import React from 'react'
import './NextButton.css'
import { useNavigate } from 'react-router-dom'
import { getQuestionNumber } from '../utils'
import { useDispatch } from 'react-redux'
import { searchCleared } from '../features/search/searchSlice'



export const NextButton = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(searchCleared())
        const nextQuestionNumber = getQuestionNumber() + 1
        navigate(`/${nextQuestionNumber}`)
        
    }

    return (
        <div className="container nextcontainer">
            <button 
                className="nextbutton"
                onClick={handleClick}>
                Next
            </button>
        </div>
    )
}