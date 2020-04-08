import React, {createContext, useState} from "react";

export const VideoContext = createContext();

export const VideoProvider = props => {

    const [videos, setVideos] = useState(
        {
            allVideos: [
                {
                    id: 1,
                    category: "Software Architecture",
                    name: "Software Architecture Monday",
                    link: "https://www.youtube.com/playlist?list=PLdsOZAx8I5umhnn5LLTNJbFgwA3xbycar",
                    type: "Playlist"
                },
                {
                    id: 2,
                    category: "Software Architecture",
                    name: "Domain Driven Design and Microservices",
                    link: "https://www.youtube.com/watch?v=Km1fZ108UXU",
                    type: "Video"
                },
                {
                    id: 3,
                    category: "Software Architecture",
                    name: "Microservices love Domain-Driven Design, why and how?",
                    link: "https://www.youtube.com/watch?v=ZJiFlgimHss",
                    type: "Video"
                },
                {
                    id: 4,
                    category: "Software Architecture",
                    name: "Greg Young — A Decade of DDD, CQRS, Event Sourcing",
                    link: "https://www.youtube.com/watch?v=LDW0QWie21s",
                    type: "Video"
                },
                {
                    id: 5,
                    category: "Machine Learning",
                    name: "Dataschool.io",
                    link: "https://www.youtube.com/user/dataschool",
                    type: "User"
                },
                {
                    id: 6,
                    category: "JavaScript",
                    name: "Dave Ed",
                    link: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q",
                    type: "User"
                },
                {
                    id: 7,
                    category: "English",
                    name: "EnglishAnyone",
                    link: "https://www.youtube.com/user/EnglishAnyone/",
                    type: "User"
                },
                {
                    id: 8,
                    category: "English",
                    name: "EWA: Learn English",
                    link: "https://www.youtube.com/channel/UC0mpRLFvHChkfD9m4paaN-Q",
                    type: "User"
                }
            ],
            selectedVideos: []
        }
    );

    return(
        <VideoContext.Provider value={[videos, setVideos]}>
            {props.children}
        </VideoContext.Provider>
    );
};