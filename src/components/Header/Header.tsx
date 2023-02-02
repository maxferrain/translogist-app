import logo from '../../assets/icons/translogo.png'
import styles from './Header.module.scss'
import React from 'react'
import {Button, Space} from 'antd'

const {header, phoneButton, navbar} = styles
const Header = () => {
    return (
        <div className={header}>
            <a href="/"><img src={logo} alt="TRANSLOGISTICS"/></a>

            <div className={navbar}>
                <Space wrap>

                    <Button href="#auto" type="text">Автомобили</Button>
                    <Button href="#calculate" type="text">Калькулятор</Button>
                    <Button href="#prices" type="text">Цены</Button>
                    <Button href="#contactUs" type="text">О нас</Button>

                    <Button
                        className={phoneButton}
                        type="primary"
                        shape="round"
                        href="tel:88005003272"
                    >8-800-500-32-72</Button>
                </Space>
            </div>

        </div>
    )
}

export default Header
