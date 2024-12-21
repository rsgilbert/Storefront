import React from 'react'
import styles from './Option.module.css'
import classNames from 'classnames'

export const Option = props => {

    const answerId = props.answerId

    const isAnswer = answerId === props.option.id

    const optionSelected = () => {
        props.handleClick(props.option.id)
    }

    return (
        <div
            className={styles.option}
            onClick={optionSelected}
            >
            <div className={
                classNames({
                    [styles.verticalbar]: true,
                    [styles.colored]: isAnswer
                })} />
            <div className={styles.data}>
                {props.option.option}
            </div>
        </div>
    )
}