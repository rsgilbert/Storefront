import React from 'react'
import styles from './MultipleOption.module.css'
import classNames from 'classnames'

export const MultipleOption = props => {

    const answers = props.answers
    const matchingAnswer = answers.find(ans => ans.answerId === props.option.id)
    const isAnswer = Boolean(matchingAnswer)

    const optionSelected = () => {
        props.handleClick(props.option.id)
    }

    return (
        <label>
            <input 
                type="checkbox" 
                className="checkbox" 
                checked={isAnswer} 
                onChange={optionSelected}/>
            <span></span>
            {props.option.option}
        </label>
    )
    
    // return (
    //     <div
    //         className={classNames({
    //             [styles.answer]: isAnswer,
    //             [styles.multipleoption]: true
    //         })}
    //         onClick={optionSelected}
    //         >
        
    //         <div className={
    //             classNames({
    //                 [styles.verticalbar]: isAnswer
    //             })}>
    //         </div>
    //         <checkbox  />
            
    //         {props.option.option}
    //     </div>
    // )
}