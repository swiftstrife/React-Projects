import React from 'react';

const DeleteCard = (props) => {

    return (
        <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
            <div className="header">{props.header}</div>
            <div className="content">
                {props.message}
            </div>
            <div className="actions">
                {props.actions}
            </div>
        </div>
    );
}

export default DeleteCard;