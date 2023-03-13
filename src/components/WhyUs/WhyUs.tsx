import styles from './WhyUs.module.scss'
import React from 'react'
import cn from 'classnames'
import support from '../../assets/icons/earphones.png'
import computer from '../../assets/icons/computer.png'
import sales from '../../assets/icons/sales.png'
import cars from '../../assets/icons/cars.png'
import {Divider} from 'antd'

const {whyUsBlock, description, reasons, containerWhyUs, card} = styles

const ReasonCard = ({image, title, cardText}: any) => {

    return (
        <div className={card}>
            <img src={image} alt=""/>
            <div>
                <h3>{title}</h3>
                <p>{cardText}</p>
            </div>
        </div>
    )
}
const WhyUs = () => {

    return (
        <div className={whyUsBlock} id="whyUs">
            <div className={cn('container', containerWhyUs)}>
                <div className={description}>
                    <h3>Почему мы?</h3>
                    <p><b>Translogistics</b> предлагает услугу автодоставки «от двери до двери». <br/><br/>
                        Мы доставим груз от склада клиента до станции/порта отправления и от станции/порта прибытия до
                        склада получателя в России.</p>
                </div>

                <div className={reasons}>
                    <div>
                        <ReasonCard
                            image={support}
                            title="Онлайн-поддержка"
                            cardText="Операторы готовы ответить на все Ваши вопросы 24/7"
                        />
                        <Divider orientation="left"></Divider>
                        <ReasonCard
                            image={computer}
                            title="Отслеживание грузов"
                            cardText="Отслеживайте маршруты онлайн и будьте в курсе перемещений транспорта"
                        />
                    </div>
                    <Divider type="vertical"  orientation="center" style={{height: '100%', margin: '30px'}}></Divider>
                    <div>
                        <ReasonCard
                            image={sales}
                            title="Корпортативные тарифы"
                            cardText="Пользуйтесь специальными тарифами и получайте допонительные скидки"
                        />
                        <Divider orientation="left"></Divider>
                        <ReasonCard
                            image={cars}
                            title="Большой автопарк"
                            cardText="В автопарке более 10 видов грузовых автомобилей для перевозок любых грузов"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs

