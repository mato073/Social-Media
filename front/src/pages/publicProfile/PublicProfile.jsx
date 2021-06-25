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
    const [user, setUser] = useState();
    const { id } = useParams();


    useEffect(() => {
        const fetchUser = async () => {
            const data = await axios.get(`${REACT_APP_BASE_URL}/post/publicTimeligne/${id}`);
            console.log();
            setUser(data.data);
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
                                src={user.user.coverPicture}
                                /* src={`${PF}/post/rileyreidpose.jpg`} */
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={user.user.profilePicture}
                                /* src={`${PF}/person/RileyReid.jpg`} */
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.user.firstname} {user.user.lastname}</h4>
                            <span className="profileInfoDesc">I hope you love my videos !</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                         <Feed publicposts={user.post} />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PublicProfile;