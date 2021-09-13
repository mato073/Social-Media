import React, { useEffect } from 'react'
import './feed.css'
import Share from '../../components/share/Share'
import Post from "../../components/post/Post"

const Feed = ({ posts, notuser }) => {
    if (posts.loading === true) {
        return (
            <div>Loading...</div>
        )
    } else if (posts.error) {
        return (
            <div>An error as ocured !</div>
        )
    } else if (posts?.data !== null && posts.loading !== true) {
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
    } else {
        return null
    }
}

export default Feed;