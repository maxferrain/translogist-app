import React from 'react'
import bgCars from '../../assets/icons/backgroundCars.png'
import styles from './Main.module.scss'
import {Button} from 'antd'

const {mainBg, mainText, mainImg, mainButtons} = styles

const Main = () => {
    return (
        <div className={mainBg}>

            <div className={mainText}>
                <h1>Импортные перевозки<br/>из Китая</h1>
                <p>Доставляем товары из Китая регулярными морскими,
                    железнодорожными и интермодальными сервисами</p>

                <div className={mainButtons}>
                    <Button href="#contactUs" type="primary" size="large">Оставить заявку</Button>
                    <Button href="#calculate" size="large">Рассчитать</Button>
                </div>
            </div>

            <div className={mainImg}>
                <img src={bgCars} alt=""/>
            </div>
        </div>
    )
}

export default Main
