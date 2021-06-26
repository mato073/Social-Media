import React, {useEffect} from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './profile.css'
import { connect } from 'react-redux';
import { get_user_posts } from '../../redux/Actions/Actions'
import { useDispatch } from 'react-redux'

const Profile = (props) => {
    const user = props.user;
    const disptach = useDispatch();

    useEffect(() => {
        disptach(get_user_posts());
    }, []);

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
                                src={user.coverPicture}
                                /* src={`${PF}/post/rileyreidpose.jpg`} */
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={user.profilePicture}
                                /* src={`${PF}/person/RileyReid.jpg`} */
                                alt=""
                            />
                        </div >
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.firstname} {user.lastname}</h4>
                            <span className="profileInfoDesc">I hope you love my videos !</span>
                        </div>
                    </div >
                    <div className="profileRightBottom">
                        <Feed posts={props.user_posts} />
                        <Rightbar profile followers={user.followers} />
                    </div>
                </div >
            </div >
        </>
    )
}
const mapStateToProps = (state) => ({
    user: state.User_reducer.user.user,
    user_posts: state.Posts_reducer.user_posts,

});
export default connect(mapStateToProps)(Profile);