import './Blog.scss'
import axios from 'axios'
import moment from 'moment'
import { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";

const YoutubeSearch = () => {

    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState([])

    useEffect(() => {

    }, [])

    const handleSearchYouTube = () => {
        // axios.get('https://www.googleapis.com/youtube/v3/search', {
        //     part: 'snippet',
        //     maxResults: 20,
        //     key: 'AIzaSyA-7AXc34C1LdkmoIN2gkckkg-kIkusdK8',
        //     type: 'video',
        //     q: query
        // }).then(res => {
        //     console.log(res)
        // })

        axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyA-7AXc34C1LdkmoIN2gkckkg-kIkusdK8',
                'type': 'video',
                'q': query
            }
        }).then(res => {
            if (res && res.data.items) {
                let raw = res.data.items
                let result = []
                if (raw && raw.length > 0) {
                    raw.map(item => {
                        let object = {}
                        object.id = item.id.videoId
                        object.title = item.snippet.title
                        object.createdAt = item.snippet.publishedAt
                        object.author = item.snippet.channelTitle
                        object.description = item.snippet.description


                        result.push(object)
                    })
                }
                setVideos(result)
            }
            console.log(res)
        })
    }

    return (
        <>
            <div className="youtube-search-container">
                <div className="yt-search">
                    <input className="example"
                        type="text"
                        placeholder="Search.."
                        name="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button className="example"
                        type="submit"
                        onClick={() => handleSearchYouTube()}
                    >
                        Search
                    </button>
                </div>
            </div>

            {videos && videos.length > 0 &&
                videos.map(item => {
                    return (
                        <div className="yt-result" key={item.id}>
                            <div className="left">
                                <iframe className="iframe-yt"
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <div className="right">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="created-at">
                                    Created-At : {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                                </div>
                                <div className="author">
                                    Author: {item.author}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    )
                })

            }

        </>
    )
}

export default YoutubeSearch;