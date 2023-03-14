import logo from '../../assets/icons/translogo.png'
import styles from './Footer.module.scss'
import React from 'react'
import {Button, Divider} from 'antd'
import {CompassOutlined, InstagramOutlined, MailOutlined, SkypeOutlined, WhatsAppOutlined} from '@ant-design/icons'

const {footer, logoImg, divider, head, mainHeaderInfo, address, showMap, menu, contacts} = styles
const Footer = () => {
    return (
        <div className={footer}>
            <div className="container">
                <div className={head}>
                    <a href="/"><img src={logo} className={logoImg} alt="TRANSLOGISTICS"/></a>

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
                        <p>121248, г.Москва, Кутузовский пр-т, д. 2</p>

                        <a className={showMap} target='_blank' type="text" href='https://yandex.ru/maps/-/CCUOQXgDcB'>
                            <CompassOutlined/>
                            <h4>Открыть на карте</h4>
                        </a>
                    </div>

                    <div className={menu}>
                        <Button href="/" type="link">Главная</Button>
                        <Button href="#features" type="link">Услуги</Button>
                        <Button href="#containers" type="link">Контейнеры</Button>
                        <Button href="#services" type="link">Преимущества</Button>
                        <Button href="#reviews" type="link">Отзывы</Button>
                    </div>

                    <div className={menu}>
                        <Button target='_blank' href="https://translogist.su/uslugi/gruzoperevozki/" type="link">
                            География перевозок</Button>
                        <Button target='_blank' href="https://translogist.su/uslugi/vidy-gruzoperevozok/" type="link">
                            Виды грузоперевозок</Button>
                        <Button target='_blank' href="https://translogist.su/uslugi/dopolnitelnyie-uslugi/" type="link">
                            Дополнительные услуги</Button>
                        <Button target='_blank' href="https://translogist.su/klientam/dokumentyi/" type="link">
                            Документы</Button>
                        <Button target='_blank' href="https://translogist.su/klientam/poleznaya-informacziya/" type="link">
                            Полезная информация</Button>
                    </div>


                    <div className={contacts}>
                        <h4>Контакты</h4>
                        <Button type='text' href='tel:88005003272'>8-800-500-32-72</Button>
                        <Button type='text' href='mailto: info@translogist.su'>info@translogist.su</Button>
                        <Button type='link' target='_blank' href='https://translogist.su'>translogist.su</Button>
                    </div>


                </div>

                <p>© 2007-{new Date().getFullYear()} транспортно-логистическая компания"ТрансЛогистик"</p>
            </div>
        </div>
    )
}

export default Footer
