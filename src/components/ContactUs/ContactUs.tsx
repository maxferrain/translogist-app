import styles from './ContactUs.module.scss'
import truck from '../../assets/icons/truck.png'
import {motion, Variants} from 'framer-motion'
import React from 'react'
import 'react-phone-number-input/style.css'

import ContactForm from '../ContactForm/ContactForm'

const {contactsBlock, truckImg} = styles


const cardVariants: Variants = {
    offscreen: {
        y: -200,
        x: 600
    },
    onscreen: {
        x: 0,
        y: 20,
        transition: {
            duration: 1.5
        }
    }
}

function Card() {
    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.8}}
        >
            <motion.div className="card" variants={cardVariants}>
                <img className={truckImg} src={truck} alt=""/>
            </motion.div>
        </motion.div>
    )
}

const ContactUs = () => {

    return (
        <div className={contactsBlock} id="contactUs">
            <ContactForm/>
            <Card/>
        </div>
    )
}

export default ContactUs

