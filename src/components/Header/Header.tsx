import logo from '../../assets/icons/translogo.png'
import styles from './Header.module.scss'
import React from 'react'
import {Anchor, Button, Menu, MenuProps, Space} from 'antd'
import {AppstoreOutlined} from '@ant-design/icons'

const {header, phoneButton, navbar, navMobile, logoImg} = styles

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [

    getItem('', 'sub2', <AppstoreOutlined />, [
        getItem(<Button href="#features" type='text'>Услуги</Button>, '#features'),
        getItem(<Button href="#containers" type='text'>Контейнеры</Button>, '#containers'),
        getItem(<Button href="#services" type='text'>Преимущества</Button>, '#services'),
        getItem(<Button href="#qa" type='text'>Q&A</Button>, '#qa'),
        getItem(<Button href="#reviews" type='text'>Отзывы</Button>, '#reviews'),
    ]),
];
const Header = () => {
    return (
        <div className={header}>
            <a href="/"><img src={logo} className={logoImg} alt="TRANSLOGISTICS"/></a>

            <div className={navbar}>
                <Space wrap>
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

            <Menu className={navMobile}
                // onClick={onClick}
                style={{ width: 130 }}
                defaultOpenKeys={['sub2']}
                mode="inline"
                items={items}
            >
                {/*<Menu.Item key='features'>*/}
                {/*    <a href="#features"></a>*/}
                {/*</Menu.Item>*/}
            </Menu>

        </div>
    )
}

export default Header
