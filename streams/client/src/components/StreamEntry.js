import React from 'react';
import { Link } from 'react-router-dom';

const StreamEntry = ({ stream, correctUser }) => {
    return (
        <div className="item">
            {renderAdmin(correctUser, stream.id)}
            <i className="large middle aligned icon camera" />
            <div className="content">
                <Link to={`/streams/show/${stream.id}`} className="header">
                    {stream.title}
                </Link>
                <div className="description">
                    {stream.description}        
                </div>
            </div> 
        </div>
    );
}

const renderAdmin = (correctUser, streamId) => {
    if (correctUser) {
        return (
            <div className="right floated content">
                <Link to={`/streams/edit/${streamId}`} className="ui button primary">
                    Edit
                </Link>
                <Link to={`/streams/delete/${streamId}`} className="ui button negative">
                    Delete
                </Link>
            </div>
        );
    }
}

export default StreamEntry;
