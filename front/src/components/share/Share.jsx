import React from 'react'
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

const link = 'https://lh3.googleusercontent.com/proxy/DnluxTqRa1k7mHq_1ZrNzIlAkxMpSG6ZEUTA_U8X6bkLQjsf_zJDosEdhqDXTPX2V-8Y_EumsAl76PfbQE1PX0OqeFq6qEIVFK2ZvBjUMlA'
const Share = () => {
    return (
        <div className="shareContainer">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={link} /*  src='/assets/person/1.jpeg' */ alt="" />
                    <input type="text" placeholder="Share your day" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText" >Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText" >Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText" >Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText" >Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton" >Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
