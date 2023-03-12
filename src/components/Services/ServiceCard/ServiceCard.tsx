import styles from './ServiceCard.module.scss'
import React, {useCallback, useState} from 'react'
import cn from 'classnames'
import {IServicePropsType} from '../../../infoData/servicesData'

const {card, face, face1, face2} = styles
const ServiceCard = ({name, img, description}: IServicePropsType) => {
    const [isOpened, toggleFaq] = useState(false)
    const toggler = useCallback(() => toggleFaq(!isOpened), [isOpened])

    return (
        <div className={card}>
            <div className={cn(face, face1)}>
                <h2>{name}</h2>
                <p>{description}</p>
                {/*<a href="#">Подробнее</a>*/}
            </div>
            <div className={cn(face, face2)}>
                <h2>{name}</h2>
                <img src={img} alt=""/>
            </div>
        </div>
    )
}

export default ServiceCard
