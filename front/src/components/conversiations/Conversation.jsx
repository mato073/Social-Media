import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './conversation.css'
const { REACT_APP_BASE_URL } = process.env;

const Conversation = ({ conversation, curentUser, setConversation }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const fetchUser = async () => {
            const id = conversation.members.filter((item) => item != curentUser._id)
            const data = await axios.get(`${REACT_APP_BASE_URL}/post/publicTimeligne/${id}`);
            setUser(data.data.user)
        }
        fetchUser()
    }, [])
    return (
        <div className="conversationContainer" onClick={setConversation}>
            <img
                className="conversationImg"
                src={user?.profilePicture}
                alt=""
            />
            <span className="conversationText">{user?.firstname} {user?.lastname}</span>
        </div>
    )
}

export default Conversation
