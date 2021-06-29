import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './publicProfile.css'
import { useParams } from "react-router-dom";
import axios from 'axios'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Chat } from '@material-ui/icons'
import { connect } from 'react-redux';
import { followUser, unFollowUser } from '../../services/follow.service'

const { REACT_APP_BASE_URL } = process.env;

const PublicProfile = ({ followings }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const { id } = useParams();
    const [followed, serFollowed] = useState(false);


    useEffect(() => {
        const fetchUser = async () => {
            const data = await axios.get(`${REACT_APP_BASE_URL}/post/publicTimeligne/${id}`);
            setUser(data.data.user);
            const post = data.data.post.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
            setPosts(post);
        }
        const data = followings.filter((user) => user.userId === id);
        if (data.length !== 0)
            serFollowed(true);
        fetchUser();
    }, [])

    const newFollow = async () => {
        const status = await followUser(user.id);
        if (status === true)
            serFollowed(true);

    }
    const newUnFollow = async () => {
        const status = await followUser(user.id);
        if (status === true)
            serFollowed(false);
    }

    if (!user) {
        return <div>Loading...</div>
    }
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
                                src={user?.coverPicture}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={user?.profilePicture}
                                alt=""
                            />
                        </div>
                        <div className="FollowUserButtonList">
                            {followed ?
                                <button className="followUserButtonFollow" onClick={newUnFollow}>
                                    <GroupAddIcon />
                                    <span className="followUserButtonFollowSpan" >Unfollow</span>
                                </button>
                                :
                                <button className="followUserButtonFollow" onClick={newFollow}>
                                    <GroupAddIcon />
                                    <span className="followUserButtonFollowSpan" >Follow</span>
                                </button>
                            }
                            <button className="followUserButtonChat">
                                < Chat />
                                <span className="followUserButtonChatSpan" >Message</span>
                            </button>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.firstname} {user.lastname}</h4>
                            <span className="profileInfoDesc">I hope you love my videos !</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed posts={posts} notuser />
                        <Rightbar profile followers={user.followers} />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    followings: state.User_reducer.user.user.followings,

});
export default connect(mapStateToProps)(PublicProfile);