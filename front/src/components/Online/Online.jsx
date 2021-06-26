import React from 'react'
import './online.css'
import { useHistory } from "react-router-dom";

const Online = ({ user }) => {
    const history = useHistory();

    const goPublicProfile = (userId) => {
        history.push(`/publicProfile/${userId}`)
    }
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={user.profilePicture} alt="" onClick={() => goPublicProfile(user.userId)} />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.firstname} {user.lastname}</span>
        </li>
    )
}

export default Online
