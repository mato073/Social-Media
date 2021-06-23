import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './profile.css'
import { connect } from 'react-redux';

const Profile = (props) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const user = props.user;
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
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Riley Reid</h4>
                            <span className="profileInfoDesc">I hope you love my videos !</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    user: state.User_reducer.user.user

});
export default connect(mapStateToProps)(Profile);