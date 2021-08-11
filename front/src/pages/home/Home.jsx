import React, { useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './home.css'
import { send_posts_request, send_user_request } from '../../redux/Actions/Actions'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { get_posts_state, get_user_state } from '../../redux/Saga/selectors/selector'

const Home = () => {
    const disptach = useDispatch();

    const {
        posts,
        user
    } = useSelector(
        state => ({
            posts: get_posts_state(state),
            user: get_user_state(state)
        }),
        shallowEqual
    );

    useEffect(() => {
        disptach(send_user_request());
        disptach(send_posts_request())
    }, []);
    if (posts.data == null || posts.loading === true || user.user == null) {
        return <div>Loading...</div>
    }
    if (posts.data !== null && posts.loading !== true) {
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
    if (!posts.success || !user.success) {
        return <div>Error !</div>
    }
}
export default Home