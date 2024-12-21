import React from 'react'
import styles from './PreviousButton.module.css'
import { useNavigate } from 'react-router-dom'
import { getQuestionNumber } from '../utils'
import { useDispatch } from 'react-redux'
import { searchCleared } from '../features/search/searchSlice'



export const PreviousButton = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(searchCleared())
        const previousQuestionNumber = getQuestionNumber() - 1
        navigate(`/${previousQuestionNumber}`)
    }

    return (
        <button 
            className={styles.previousbutton}
            onClick={handleClick}>
            Back
        </button>
    )
}