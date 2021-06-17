import React from 'react'
import './feed.css'
import Share from '../../components/share/Share'
import Post from "../../components/post/Post"

const Feed = () => {
    return (
        <div className="feed" >
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed
