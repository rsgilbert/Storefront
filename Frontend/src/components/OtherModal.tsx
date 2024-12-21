import React, { useState } from 'react'
import './OtherModal.css'
import classNames from 'classnames'
import { MyButton } from './MyButton'
import { useSelector, useDispatch } from 'react-redux'
import { selectOther, otherUpdated, selectIsModalOpen, modalClosed } from '../features/other/otherSlice'
import { answersUpdated } from '../features/q3/q3Slice'

export const OtherModal = props => {
    const dispatch = useDispatch()

    const other= useSelector(selectOther)
    const isModalOpen = useSelector(selectIsModalOpen)
    // const isModalOpen = true

    const [otherValue, setOtherValue] = useState(other)

    const handleChange = e => setOtherValue(e.target.value)

    const closeModal = () => dispatch(modalClosed())

    const handleSubmit = () =>  {
        dispatch(otherUpdated({ other: otherValue }))
        dispatch(answersUpdated({ answerId: "5", reason: otherValue }))
        closeModal()
    }

   
    return (
        <div className={classNames({
            othermodal: true,
            notdisplayed: !isModalOpen
        })}>
            <div className="dialogbox">
                <h1>Other reason</h1>
                <button 
                    className="close"
                    onClick={closeModal}
                    >
                    &times;
                </button>
                <input 
                    placeholder="Other"
                    value={otherValue}
                    onChange={handleChange}
                    />
                <div className="actions">
                    <button
                        className="submit"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
                
            </div>
        </div>
    )
}