import styles from './Questions.module.scss'
import React from 'react'
import {questionsData} from './quesrionsData'
import Question from './Question/Question'

const {questionsBlock, title} = styles
const Questions = () => {
    return (
        <div className='container'>
            <div className={questionsBlock}>
                <h2 className={title}>Вопросы и ответы</h2>

                {
                    questionsData.map(({id, question, answer}) => <Question key={id} question={question} answer={answer}/>)
                }
            </div>
        </div>
    )
}

export default Questions
