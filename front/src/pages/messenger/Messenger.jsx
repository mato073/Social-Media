import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'

//Import Components
import Conversation from '../../components/conversiations/Conversation'
import Messages from '../../components/messages/Messages'
import ChatOnline from '../../components/chatOnline/ChatOnline'

const Messenger = () => {
    return (
        <>
            <Topbar />
            <div className="messengerContainer">
                <div className="chatMenu">
                    <div className="chatMenuWraper">
                        <input className="chatMenuInput" placeholder="Chat with your followers" />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWraper">
                        <div className="chatBoxTop">
                            <Messages own />
                            <Messages />
                            <Messages own />
                            <Messages />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea
                                className="chatMessageInput"
                                placeholder="write something..."
                            ></textarea>
                            <button className="chatSubmitButton">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWraper">
                        < ChatOnline />
                        < ChatOnline />
                        < ChatOnline />
                        < ChatOnline />
                        < ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
