import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'
import Conversation from '../../components/conversiations/Conversation'

const Messenger = () => {
    return (
        <>
            <Topbar />
            <div className="messengerContainer">
                <div className="chatMenu">
                    <div className="chatMenuWraper">
                        <input className="chatMenuInput" placeholder="Chat with your followers" />
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWraper">
                        BOx
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWraper">
                        online
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
