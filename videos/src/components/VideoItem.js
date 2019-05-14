import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    const onSelect = () => {
        onVideoSelect(video)
    }

    return ( 
        <div className="video-item item" onClick={onSelect}>
            <img 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>           
            </div>          
        </div>
    )
};

export default VideoItem;