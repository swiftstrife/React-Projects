import React from 'react';
import ReactDOM from 'react-dom';
import DeleteCard from './DeleteCard'

const Modal = (props) => {

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
                <DeleteCard 
                    header={props.title}
                    message={props.message}
                    actions={props.actions}
                />
        </div>,
        document.querySelector("#modal")
    );

}

export default Modal;