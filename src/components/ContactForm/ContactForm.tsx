import styles from './ContactForm.module.scss'
import React, {useCallback, useState} from 'react'
import {Alert, Button, Checkbox, Form, Input, Select} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {send} from 'emailjs-com'

// @ts-ignore
import ru from 'react-phone-number-input/locale/ru'
import {E164Number} from 'libphonenumber-js/types'
import PolicyModal from '../modals/PolicyModal/PolicyModal'

const {contactsFormTitle, contactsForm, companyName, messageArea, submitButton, agreement} = styles

interface IContactForm {
    phone?: string
    name: string
    city?: string
    email: string
    company?: string
    message?: string
    agreement: boolean
}
const ContactForm = () => {

    const [form] = Form.useForm()
    const [isSuccessSent, setSuccessSent] = useState(false)
    const [isFailSent, setFailSent] = useState(false)
    const [isModal, setModal] = useState(false)

    const toggleModal = useCallback(() => setModal(prevState => !prevState), [])
    const onFinish = (values: IContactForm) => {
        values.phone = valuePhone
        console.log('Success:', values)

        // @ts-ignore
        send('service_xoi7yzm', 'template_ynlmsas', values, 'bAOkGC6KWuAmTjFxo')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
                form.resetFields()
                setPhoneValue('')
                setSuccessSent(true)
            })
            .catch((err) => {
                console.log('FAILED...', err)
                setFailSent(true)
            })

    }

    const [valuePhone, setPhoneValue] = useState<E164Number | undefined>()

    return (<>
            {isModal && <PolicyModal toggleModal={toggleModal}/>}

            <h2 className={contactsFormTitle}>Оставьте заявку</h2>

            <Form className={contactsForm} form={form} onFinish={onFinish}>
                <div>
                    <Form.Item name="name" rules={[{required: true, message: 'Обязательное поле'}]}>
                        <Input placeholder="Имя"/>
                    </Form.Item>

                    <Form.Item name="city">
                        <Select placeholder="Ваш город" className={styles.citySelector}>
                            <Select.Option value="Москва">Москва</Select.Option>
                            <Select.Option value="Санкт-Петербург">Санкт-Петербург</Select.Option>
                            <Select.Option value="Екатеринбург">Екатеринбург</Select.Option>
                            <Select.Option value="Другой">Другой</Select.Option>
                        </Select>
                    </Form.Item>

                </div>

                <div>
                    <Form.Item name="email" rules={[{required: true, message: 'Обязательное поле'}]}>
                        <Input placeholder="Email"/>
                    </Form.Item>

                    <Form.Item>
                        <PhoneInput className='antInput' labels={ru} placeholder="Номер телефона"
                                    value={valuePhone} onChange={setPhoneValue}/>
                    </Form.Item>
                </div>

                <Form.Item name="company">
                    <Input placeholder="Компания" className={companyName}/>
                </Form.Item>


                <Form.Item name="message">
                    <TextArea placeholder="Сообщение" className={messageArea}/>
                </Form.Item>

                <Form.Item name="agreement" valuePropName="checked" className={agreement}
                           rules={[{
                               validator: (_, value) => value ? Promise.resolve()
                                       : Promise.reject(new Error('Необходимо согласие на обработку персональных данных'))}]}>
                    <div>
                        <Checkbox>Даю согласие на </Checkbox>
                        <span className="link" onClick={toggleModal}>обработку персональных данных</span>
                    </div>
                </Form.Item>

                {isSuccessSent && <Alert message="Спасибо, скоро с Вами свяжемся!" type="success" showIcon closable/>}
                {isFailSent && <Alert message="Возникла ошибка при отправке формы" type="error" showIcon closable/>}

                <Button type="primary" htmlType="submit" className={submitButton}>Отправить</Button>
            </Form>
        </>
    )
}

export default ContactForm
