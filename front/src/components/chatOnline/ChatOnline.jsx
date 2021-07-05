import React from 'react'
import './chatOnline.css'

const ChatOnline = () => {
    return (
        /*       <div className="chatOnlineFollowings">
                  <div className="chatOnlineImgContainer">
                      <img src="https://static.rabbitfinder.com/photos/35887/194248.jpg?1310126633" alt="" className="chatOnlineImg" />
                  </div>
                  <div className="chatOnlineBadge">
      
                  </div>
                  <div className="chatOnlineName">
                      Matt Stone
                  </div>
              </div> */
        < div className="chatOnline" >
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src="https://static.rabbitfinder.com/photos/35887/194248.jpg?1310126633"
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Jack Black</span>
            </div>
        </div >

    )
}

export default ChatOnline