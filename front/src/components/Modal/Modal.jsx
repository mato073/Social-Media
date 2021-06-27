import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './modal.css'

const Modal = ({ open, children, onClose }) => {
    const [modal, setModal] = useState(open);

    const closeModal = () => {
        onClose();
    }

    const checkDiv = (value) => {
       
        /* if (value === 'main')
            onClose(); */
    }
    if (!open) return null;
    return ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={closeModal} />
            <div className="modalCotainer" onClick={() => checkDiv('main')} >
                <div className="content" onClick={() => checkDiv('content')}>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
