import React, { useEffect } from 'react'
import './feed.css'
import Share from '../../components/share/Share'
import Post from "../../components/post/Post"

const Feed = ({ posts, notuser }) => {
    if (!posts) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div className="feed" >
                <div className="feedWrapper">
                    {!notuser && (<Share />)}
                    {
                        posts.map(post => {
                            return <Post key={post._id} post={post} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Feed;