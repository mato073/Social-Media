import React from 'react'
import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import { connect } from 'react-redux';

const Share = ({ user }) => {
    if (user === null || user === undefined) {
        return (
            <p>Loadin...</p>
        )
    } {
        return (
            <div className="shareContainer">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img className="shareProfileImg" src={user.profilePicture} alt="" />
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
}

const mapStateToProps = (state) => ({
    user: state.User_reducer.user.user

});
export default connect(mapStateToProps)(Share);
