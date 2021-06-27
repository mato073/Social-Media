import { useState } from 'react'
import './newPostModal.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'
import { newPost } from '../../services/post.service';

const NewPostModal = ({ setOpen, user }) => {

    const [openPhoto, setOpenPhoto] = useState(false);
    const [imageLink, setImgeLink] = useState("");
    const [desc, setDesc] = useState("");

    const sendPost = async () => {
        await newPost(imageLink, desc)
    }

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
                <input type="text" placeholder="Share your day" className="modalshareInput" onChange={(e) => setDesc(e.target.value)} />
            </div>
            <hr className="customHrHeaderModal"></hr>
            <div className="modalChooseParm">
                {openPhoto ?
                    <div className="modalChooseParmImag">
                        <input value={imageLink} className="modalChooseParmImagSpan" placeholder="Past a image link her" type="link" onChange={(e) => setImgeLink(e.target.value)} />
                        <button className="modalChooseParmImagBtn" onClick={() => setOpenPhoto(false)}>Ok</button>
                    </div>
                    :
                    <span>Choosen image: {imageLink}</span>
                }

            </div>
            <div className="bottomShareModal">
                <hr className="customHrHeaderModal"></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption" onClick={() => setOpenPhoto(true)}>
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
                    <button className="shareButton" onClick={sendPost} >Share</button>
                </div>
            </div>
        </div>
    )
}

export default NewPostModal
