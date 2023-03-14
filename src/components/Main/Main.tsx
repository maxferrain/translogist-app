import React from 'react'
import bgCars from '../../assets/icons/backgroundCars.png'
import locatorImg from '../../assets/icons/locator1.png'
import styles from './Main.module.scss'
import {Button} from 'antd'
import {motion, Variants} from 'framer-motion'

const {mainBg, mainText, mainImg, mainButtons, locatorContainer, locator} = styles


const card1Variants: Variants = {
    offscreen: {
        y: -1500,
        x: 180
    },
    onscreen: {
        x: 180,
        y: -260,
        transition: {
            duration: 0.7
        }
    }
}
const card2Variants: Variants = {
    offscreen: {
        y: -1500,
        x: 690
    },
    onscreen: {
        x: 690,
        y: -660,
        transition: {
            duration: 1.6
        }
    }
}
const card3Variants: Variants = {
    offscreen: {
        y: -1500,
        x: 670
    },
    onscreen: {
        x: 720,
        y: -300,
        transition: {
            duration: 1.2
        }
    }
}

const Main = () => {
    return (
        <div className={mainBg}>

            <div className={mainText}>
                <h1>Международные перевозки из Китая</h1>
                <p>Доставляем товары из Китая регулярными морскими,
                    железнодорожными и интермодальными сервисами</p>

                <div className={mainButtons}>
                    <Button href="#contactUs" type="primary" size="large">Оставить заявку</Button>
                    <Button href="#features" size="large">Наши услуги</Button>
                </div>
            </div>

            <div className={mainImg}>
                <img src={bgCars} alt=""/>
                <motion.div
                    className={locatorContainer}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true}}
                >
                    <motion.div className={locator} variants={card1Variants}>
                        <img src={locatorImg} alt=""/>
                    </motion.div>
                    <motion.div className={locator} variants={card2Variants}>
                        <img src={locatorImg} alt=""/>
                    </motion.div>
                    <motion.div className={locator} variants={card3Variants}>
                        <img src={locatorImg} alt=""/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Main
