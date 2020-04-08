import React, {useContext} from 'react';
import './WholeList.css';
import {VideoContext} from "./VideoContext";


const WholeList = props => {

    const [videos, setVideos] = useContext(VideoContext);

    const removeVideo = (id) => {
        const selected_item = videos.allVideos.filter(item => item.id === id)[0];
        console.log(selected_item);

        const new_all_vidoes = videos.allVideos.filter(item => item.id !== id);

        setVideos({
            allVideos: new_all_vidoes,
            selectedVideos: [...videos.selectedVideos, selected_item]
        })
    };


    const listItems = videos.allVideos.map((video) => <li key={video.id} onClick={removeVideo.bind(this, video.id)}><b>{video.category}</b> {video.name}</li>);

    return (
        <div>
            <h1>WholeList</h1>
            <ul className="wholeList">{listItems}</ul>
        </div>
    );
};
export default WholeList;