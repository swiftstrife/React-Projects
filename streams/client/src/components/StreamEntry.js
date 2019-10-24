import React from 'react';

const StreamEntry = ({ stream, correctUser }) => {
    return (
        <div className="item">
            {renderAdmin(correctUser)}
            <i className="large middle aligned icon camera" />
            <div className="content">
                {stream.title}
                <div className="description">
                    {stream.description}        
                </div>
            </div>
        </div>
    );
}

const renderAdmin = (correctUser) => {
    if (correctUser) {
        return (
            <div className="right floated content">
                <button className="ui button primary">
                    Edit
                </button>
                <button className="ui button negative">
                    Delete
                </button>
            </div>
        );
    }
}

export default StreamEntry;
