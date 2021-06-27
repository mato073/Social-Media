import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './publicProfile.css'
import { useParams } from "react-router-dom";
import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env;

const PublicProfile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        const fetchUser = async () => {
            const data = await axios.get(`${REACT_APP_BASE_URL}/post/publicTimeligne/${id}`);
            setUser(data.data.user);
            const post = data.data.post.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
            setPosts(post);
        }
        fetchUser();
    }, [])

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
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.firstname} {user.lastname}</h4>
                            <span className="profileInfoDesc">I hope you love my videos !</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed posts={posts}  notuser/>
                        <Rightbar profile followers={user.followers} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PublicProfile;