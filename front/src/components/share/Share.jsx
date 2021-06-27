import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import { connect } from 'react-redux';
import Modal from '../Modal/Modal'
import { useState } from 'react';

const Share = ({ user }) => {

    const [open, setOpen] = useState(false);
    if (user === null || user === undefined) {
        return (
            <p>Loadin...</p>
        )
    } {

        const MyModal = () => {
            return (
                <div className="modalContainer">
                    <div className="headerShareModal">
                        <span className="headerShareModalSpan">Create a new post</span>
                        <button className="closeModalButton" onClick={() => setOpen(false)}>
                            <span className="closeModalIcon">X</span>
                        </button>
                    </div>
                    <hr className="customHrHeaderModal"></hr>
                    <div className="bodyShareModal">
                        <div className="modalNameImg">
                            <img className="shareProfileImg" src={user.profilePicture} alt="" />
                            <span className="modalNameImgSpan" >{user.firstname} {user.lastname}</span>
                        </div>
                        <input type="text" placeholder="Share your day" className="modalshareInput" />
                    </div>
                    <div className="bottomShareModal">
                        <hr className="customHrHeaderModal"></hr>
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
                            <button className="shareButton" onClick={() => setOpen(true)} >Share</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="shareContainer">
                <Modal open={open} onClose={() => setOpen(false)}>
                    <MyModal />
                </Modal>
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
                        <button className="shareButton" onClick={() => setOpen(true)} >Share</button>
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
