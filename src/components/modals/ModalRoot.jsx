import {useMemo} from "react";
import ReactDOM from 'react-dom';
import {Navigate} from "react-router-dom";

export const ModalRoot = ({children, showModal, toggleModal}) => {

    const containerElement = useMemo(
        () => document.getElementById('modal-root'),
        []
    );
    return showModal
        ? ReactDOM.createPortal(children, containerElement)
        : <Navigate to='/'/>
}
