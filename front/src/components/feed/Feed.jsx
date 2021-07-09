import React, { useEffect } from 'react'
import './feed.css'
import Share from '../../components/share/Share'
import Post from "../../components/post/Post"

const Feed = ({ posts, notuser }) => {
    console.log('posts', posts);
    if (posts?.data == null || posts == null) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div className="feed" >
                <div className="feedWrapper">
                    {!notuser && (<Share />)}
                    {
                        posts?.data.map((post, key) => {
                            return <Post key={key} post={post} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Feed;