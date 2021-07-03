import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'

const Messenger = () => {
    return (
        <>
            <Topbar />
            <div className="messengerContainer">
                <div className="chatMenu">
                    <div className="chatMenuWraper">
                        chat
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
