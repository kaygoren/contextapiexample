import React, {useContext, useState} from 'react';
import './WholeList.css';
import {VideoContext} from "./VideoContext";

const PersonalList = () => {

    const [videos, setVideos] = useContext(VideoContext);

    return (
        <div>
            <h1>PersonalList</h1>
            {
                videos.selectedVideos.map(video => (
                    <li key={video.id}> <b>{video.category}</b> {video.name} </li>
                ))
            }

        </div>
    );
};
export default PersonalList;