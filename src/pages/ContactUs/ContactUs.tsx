import styles from './ContactUs.module.scss'
import truck from '../../assets/icons/truck.png'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import React, {useEffect} from 'react'
import {Button, Checkbox, Form, Input, Select} from 'antd'
import TextArea from 'antd/es/input/TextArea'

const {contactsBlock, truckImg, contactsFormTitle, contactsForm} = styles

const boxVariant = {
    visible: {
        x: -100,
        y: -450,
        transition: {
            duration: 4
        }
    },
    hidden: {
        x: 500,
        y: -700
    }
}

const Box = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start("visible")
        }
        // else {
        //     control.start("hidden");
        // }
    }, [control, inView])

    return (
        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            // initial={'scroll', {x: 300, y:-300}}
            // initial='scroll'
            initial="hidden"
            animate={control}>
            <img className={truckImg} src={truck} alt=""/>
        </motion.div>

    )
}

function ContactForm() {
    return (<>
            <h2 className={contactsFormTitle}>Оставьте заявку</h2>

            <Form className={contactsForm}
                  wrapperCol={{span: 25}}
                  layout="horizontal"
                // onValuesChange={onFormLayoutChange}
                  style={{maxWidth: 420}}
            >

                <Input placeholder="Имя"/>
                <Input placeholder="Email"/>
                <Input placeholder="Компания"/>

                <Select placeholder="Ваш город" className={styles.citySelector}>
                    <Select.Option value="msc">Москва</Select.Option>
                    <Select.Option value="spb">Санкт-Петербург</Select.Option>
                    <Select.Option value="ekt">Екатеринбург</Select.Option>
                    <Select.Option value="no">Другой</Select.Option>
                </Select>

                <TextArea placeholder="Сообщение" rows={4}/>

                <Form.Item name="disabled" valuePropName="checked">
                    <Checkbox>Даю согласие на обработку персональных данных</Checkbox>
                </Form.Item>

                <Button>Отправить</Button>
            </Form>
        </>
    )
}

const ContactUs = () => {

    return (
        <div className={contactsBlock} id="contactUs">

            <ContactForm/>
            <Box/>
        </div>
    )
}

export default ContactUs

