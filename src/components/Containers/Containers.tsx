import styles from './Containers.module.scss'
import React, {useState} from 'react'
import Container from './Container/Container'
import "react-multi-carousel/lib/styles.css"
import {containersData} from '../../infoData/containersData'
import cn from 'classnames'
import {Button} from 'antd'

const {containersBlock, title, containers, shawAllButton} = styles

const Containers = () => {
    const [isAllContainersShowing, toggleShowing] = useState(false)

    const toggleAllContainers = () => toggleShowing(s => !s)

    console.log(isAllContainersShowing, containersData)
    return (
        <div className={containersBlock} id="containers">
            <h2 className={title}>Типы контейнеров</h2>
            <div className={cn('container', containers)}>
                {isAllContainersShowing
                    ? containersData.map(({id, name, image, length, width, height}) =>
                        <Container key={id} name={name} height={height} length={length} image={image} width={width}/>)
                    : containersData.slice(0, 6).map(({id, name, image, length, width, height}) =>
                        <Container key={id} name={name} height={height} length={length} image={image} width={width}/>)
                }
            </div>
            <Button
                className={shawAllButton}
                type="text"
                onClick={toggleAllContainers}
            >{!isAllContainersShowing ? 'Показать все' : 'Скрыть'}</Button>
        </div>
    )
}

export default Containers
