import React from 'react'
import './friend.css'
import { useHistory } from "react-router-dom";


const Friend = ({ user }) => {
    const history = useHistory();

    const goPublicProfile = (userId) => {
        history.push(`/publicProfile/${userId}`)
    }

    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" onClick={() => goPublicProfile(user.userId) } />
            <span className="sidebarFriendName">{user.firstname} {user.lastname}</span>
        </li>
    )
}

export default Friend
