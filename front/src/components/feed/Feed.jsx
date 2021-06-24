import React, { useEffect } from 'react'
import './feed.css'
import Share from '../../components/share/Share'
import Post from "../../components/post/Post"
/* import { Posts } from '../../dummydata' */
import { get_posts, get_user_posts } from '../../redux/Actions/Actions'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'

const Feed = ({ posts, user_posts, profile }) => {
    const disptach = useDispatch();
    console.log(user_posts);
    useEffect(() => {
        if (!profile) {
            disptach(get_posts());
        } else {
            disptach(get_user_posts());
        }
    }, []);

    if (!posts && !profile) {
        return (
            <div>Loading...</div>
        )
    } else if (!user_posts && profile) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <div className="feed" >
                <div className="feedWrapper">
                    <Share />
                    {
                        profile ?
                            user_posts.map(post => (
                                <Post key={post._id} post={post} />
                            ))
                            :
                            posts.map(post => (
                                <Post key={post._id} post={post} />
                            ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.Posts_reducer.posts,
    user_posts: state.Posts_reducer.user_posts,
});
export default connect(mapStateToProps)(Feed);