import React from 'react'
import './feed.css'
import Share from '../../components/share/Share'
import Post from "../../components/post/Post"
/* import { Posts } from '../../dummydata' */
import { connect} from 'react-redux';



const Feed = ({posts}) => {
    return (
        <div className="feed" >
            <div className="feedWrapper">
                <Share />
                {
                    posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.Posts_reducer.posts,

});
export default connect(mapStateToProps)(Feed);