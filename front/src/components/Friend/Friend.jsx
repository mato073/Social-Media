import React from 'react'
import './friend.css'

const Friend = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.firstname} {user.lastname}</span>
        </li>
    )
}

export default Friend
