import styles from './Question.module.scss'
import React, {useCallback, useState} from 'react'
import cn from 'classnames'

const {questionBlock, questionIcon, faqQuestion, questionIconOpen} = styles

interface IQuestionPropsType {
    question: string
    answer: string
}

const Question = ({question, answer}: IQuestionPropsType) => {
    const [isOpened, toggleFaq] = useState(false)
    const toggler = useCallback(() => toggleFaq(!isOpened), [isOpened])

    return (
        <div className={questionBlock}>
            <div className={faqQuestion} onClick={toggler}>
                <h3>{question}</h3>
                <div className={cn(questionIcon, {[questionIconOpen]: isOpened})}>
                    <svg className="icon icon-plus" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="11" y="4" width="2" height="16" rx="1" fill="currentColor"></rect>
                        <rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"></rect>
                    </svg>
                </div>
            </div>
            {isOpened && <p>{answer}</p>}
        </div>
    )
}

export default Question
