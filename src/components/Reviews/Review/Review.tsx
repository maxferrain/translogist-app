import styles from './Review.module.scss'
import React from 'react'
import {StarFilled} from '@ant-design/icons'

const {review, personInfo, personInfoName} = styles

interface IReviewPropsType {
    name: string
    position: string
    reviewText: string,
    stars: number
}

const Review = ({name, position, reviewText, stars}: IReviewPropsType) => {
    return (
        <div className={review}>

            <div className={personInfo}>
                <div className={personInfoName}>
                    <h4>{name}</h4>
                    <div>{[...Array(stars)].map((_, i) => <StarFilled key={i} />)}</div>
                </div>
                <h5>{position}</h5>
            </div>

            <p>{reviewText}</p>

        </div>
    )
}

export default Review
