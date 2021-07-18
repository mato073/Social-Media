import React, { useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './home.css'
import { get_user, get_posts, send_posts_request, send_user_request } from '../../redux/Actions/Actions'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux';

const Home = ({ posts, user }) => {
    const disptach = useDispatch();
    useEffect(() => {
        disptach(send_user_request());
        disptach(get_user());
        disptach(send_posts_request())
        disptach(get_posts());
    }, []);
    if (posts.data == null || user.user == null) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <Topbar />
                <div className="homeContainer">
                    <Sidebar />
                    <Feed posts={posts} />
                    <Rightbar home online={user.user?.followings} />
                </div>

            </>
        )
    }
}
const mapStateToProps = (state) => ({
    posts: state.Posts_reducer.posts,
    user: state.User_reducer.user
});
export default connect(mapStateToProps)(Home);