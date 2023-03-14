import styles from './Services.module.scss'
import React from 'react'

import ServiceCard from './ServiceCard/ServiceCard'
import {servicesData} from '../../infoData/servicesData'

const {questionsBlock, title} = styles
const Services = () => {
    return (
        <div className='container' id="services">
            <div className={questionsBlock}>
                <h2 className={title}>Главные преимущества</h2>

                <div>
                    {servicesData.map(({name, img, description,  id}) =>
                        <ServiceCard key={id} name={name} img={img} description={description}/>)}
                </div>
            </div>
        </div>
    )
}

export default Services
