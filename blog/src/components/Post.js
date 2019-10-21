import React from 'react';
import UserHeader from './UserHeader';

const Post = (props) => {

    const { data } = props;

    return (
        <div className='item'>
            <i className='large middle aligned icon user' />
            <div className='content'>
                <div className='description'>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </div>
                <UserHeader userId={data.userId} />
            </div>
        </div>
    );
}

export default Post;