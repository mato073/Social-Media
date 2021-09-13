import React from 'react'
import './messages.css'
import { format } from 'timeago.js';

const Messages = ({ message, user }) => {
    console.log(user)
    return (
        <div className={message.sender === user._id ? 'message own' : 'message'}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src={user._id === message.sender ? user?.profilePicture || "https://static.rabbitfinder.com/photos/35887/194248.jpg?1310126633" : "https://lignesdeforce.files.wordpress.com/2018/09/capture-d_ecc81cran-2018-08-30-acc80-18-12-37.png?w=252&h=300"}
                    alt=""
                />
                <p className="messageText">{message.text}</p>
            </div>
            <span className="messageBottom">
                {format(message.createdAt)}
            </span>
        </div>
    )
}

export default Messages
