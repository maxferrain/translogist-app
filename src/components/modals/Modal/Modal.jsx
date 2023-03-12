import styles from './Modal.module.scss'
import {Fragment} from "react";
import closeModal from '../../../assets/icons/cancel.svg'

const {modalField, modalWindow, closeModalImg} = styles

export const Modal = (props) => {
    return (
        <Fragment>
            <div className={modalField} onClick={props.closeModal}></div>
            <div className={modalWindow}>
                <div className={closeModalImg} onClick={props.closeModal}><img src={closeModal} alt='close'/></div>
                <label>{props.title}</label>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Modal
