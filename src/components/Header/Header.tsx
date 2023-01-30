import logo from '../../assets/icons/translogo.png'
import styles from './Header.module.scss'
import React from 'react'
import {Button, Space} from 'antd'

const {header, phoneButton, navbar} = styles
const Header = () => {
    return (
        <div className={header}>
            <a href='/'>
                <img src={logo} alt='TRANSLOGISTICS'/>
            </a>

            <div className={navbar}>
                <Space wrap>
                <Button type="text">Автомобили</Button>
                <Button type="text">Калькулятор</Button>
                <Button type="text">Цены</Button>
                <Button type="text">О нас</Button>

                <Button
                    className={phoneButton}
                    type="primary"
                    shape="round"
                    href="tel:+7(499)110-34-03"
                >+7 (499) 110-34-03</Button>
                </Space>
            </div>

        </div>
    )
}

export default Header
