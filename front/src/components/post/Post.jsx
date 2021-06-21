import React from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummydata'

const Post = (props) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { desc, img, date, likes, comment, userId, user } = props.post
    const [liked, setLiked] = React.useState(false);
    const [likeNumber, setLikeNumber] = React.useState(likes);

    const likePost = () => {
        setLikeNumber(liked ? likeNumber - 1 : likeNumber + 1);
        setLiked(!liked);
    }

    return (
        <div className="postContainer">
            <div className="postWapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img className="postProfileImg" alt="" src={user.userphoto} ></img>
                        <span className="postUserName"> {`${user.firstname} ${user.lastname}`} </span>
                        <span className="postDate"> {date} </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    {desc !== undefined && (<span className="postText">{desc}</span>)}
                    <img className="postImg" src={img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}/like.png`} alt="" onClick={likePost} />
                        <img className="likeIcon" src={`${PF}/heart.png`} alt="" onClick={likePost} />
                        <span className="likeCounter">{likeNumber}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
