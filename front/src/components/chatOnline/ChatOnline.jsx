import React from 'react'
import './chatOnline.css'

const ChatOnline = ({ user }) => {
    return (
        <div>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src={user.profilePicture || "https://static.rabbitfinder.com/photos/35887/194248.jpg?1310126633"}
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{user?.firstname} {user?.lastname}</span>
            </div>
        </div >

    )
}

export default ChatOnline