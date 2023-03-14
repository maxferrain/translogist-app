import logo from '../../assets/icons/translogo.png'
import styles from './Header.module.scss'
import React from 'react'
import {Anchor, Button, Space} from 'antd'

const {header, phoneButton, navbar} = styles
const Header = () => {
    return (
        <div className={header}>
            <a href="/"><img src={logo} alt="TRANSLOGISTICS"/></a>

            <div className={navbar}>
                <Space wrap>

                    {/*<Button href="#auto" type="text">Автомобили</Button>*/}
                    {/*<Button href="#calculate" type="text">Калькулятор</Button>*/}
                    {/*<Button href="#prices" type="text">Цены</Button>*/}
                    {/*<Button href="#contactUs" type="text">О нас</Button>*/}


                    <Anchor
                        targetOffset={80}
                        direction='horizontal'
                        items={[
                            {
                                key: 'features',
                                href: '#features',
                                title: 'Услуги',
                            },
                            {
                                key: 'containers',
                                href: '#containers',
                                title: 'Контейнеры',
                            },
                            {
                                key: 'services',
                                href: '#services',
                                title: 'Преимущества',
                            },
                            {
                                key: 'qa',
                                href: '#qa',
                                title: 'Q&A',
                            },
                            {
                                key: 'reviews',
                                href: '#reviews',
                                title: 'Отзывы',
                            },
                            {
                                key: 'contactUs',
                                href: '#contactUs',
                                title: 'О нас',
                            },

                        ]}
                    />

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
