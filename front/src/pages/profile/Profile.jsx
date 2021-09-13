import React, { useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './profile.css'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { send_user_posts_request } from '../../redux/Actions/Actions'
import { get_user_state, get_user_posts_state } from '../../redux/Saga/selectors/selector'

const Profile = () => {
    const disptach = useDispatch();

    const {
        posts,
        user
    } = useSelector(
        state => ({
            posts: get_user_posts_state(state),
            user: get_user_state(state)
        }),
        shallowEqual
    );
    useEffect(() => {
        disptach(send_user_posts_request());
        return (() => { send_user_posts_request() })
    }, []);

    console.log("value =", posts, user);
    if (posts != null && user.user.user != null /* && posts.loading === false */) {
        return (
            <>
                <Topbar />
                <div className="profileContainer">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img
                                    className="profileCoverImg"
                                    src={user.user.user.coverPicture}
                                    alt=""
                                />
                                <img
                                    className="profileUserImg"
                                    src={user.user.user.profilePicture}
                                    alt=""
                                />
                            </div >
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{user.user.user.firstname} {user.user.user.lastname}</h4>
                                <span className="profileInfoDesc">I hope you love my videos !</span>
                            </div>
                        </div >
                        <div className="profileRightBottom">
                            <Feed posts={posts} />
                            <Rightbar profile followers={user.user.user.followers} />
                        </div>
                    </div >
                </div >
            </>
        )
    }
    if (!posts?.data || !user?.user.user || posts?.loading === true) {
        return <div>Loading...</div>
    }
    if (posts.error && !posts.sucess) {
        return <div>Error...</div>
    }

}
export default Profile;