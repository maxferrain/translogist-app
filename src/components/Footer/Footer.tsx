import logo from '../../assets/icons/translogo.png'
import styles from './Footer.module.scss'
import React from 'react'
import {Button, Divider} from 'antd'
import {CompassOutlined, InstagramOutlined, MailOutlined, SkypeOutlined, WhatsAppOutlined} from '@ant-design/icons'

const {footer, logoImg, divider, head, mainHeaderInfo, address, showMap, menu} = styles
const Footer = () => {
    return (
        <div className={footer}>
            <div className="container">
                <div className={head}>
                    <a href="/">
                        <img src={logo} className={logoImg} alt="TRANSLOGISTICS"/>
                    </a>

                    <div>
                        <WhatsAppOutlined/>
                        <InstagramOutlined/>
                        <SkypeOutlined/>
                        <MailOutlined/>
                    </div>
                </div>

                <Divider className={divider} orientation="center"></Divider>

                <div className={mainHeaderInfo}>
                    <div className={address}>
                        <h4>Адрес</h4>
                        <p>121248, г.Москва, Кутузовский проспект д. 2</p>

                        <a className={showMap} href='https://yandex.ru/maps/-/CCUOQXgDcB'>
                            <CompassOutlined/>
                            <h4>Открыть на карте</h4>
                        </a>
                    </div>

                    <div className={menu}>
                        <Button href="/" type="link">Главная</Button>
                        <Button href="#auto" type="link">Автомобили</Button>
                        <Button href="#calculate" type="link">Калькулятор</Button>
                        <Button href="#prices" type="link">Цены</Button>
                        <Button href="#contactUs" type="link">О нас</Button>
                    </div>

                    <div className={menu}>
                        <Button href="/" type="link">География перевозок</Button>
                        <Button href="#auto" type="link">Виды грузоперевозок</Button>
                        <Button href="#calculate" type="link">Дополнительные услуги</Button>
                        <Button href="#prices" type="link">Документы</Button>
                        <Button href="#contactUs" type="link">Полезная информация</Button>
                    </div>


                    <div className={address}>
                        <h4>Контакты</h4>
                        <p>8-800-500-32-72</p>
                        <p>info@translogist.su</p>
                        <p>https://translogist.su</p>
                    </div>


                </div>

                <p>© 2007-{new Date().getFullYear()} транспортно-логистическая компания"ТрансЛогистик"</p>
            </div>
        </div>
    )
}

export default Footer
