import React from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummydata'

const Post = (props) => {

    const { desc, photo, date, like, comment, userId } = props.post
    const user = Users.filter((user) => user.id === userId);

    return (
        <div className="postContainer">
            <div className="postWapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img className="postProfileImg" alt="" src={user[0].profilePicture} ></img>
                        <span className="postUserName"> {user[0].username} </span>
                        <span className="postDate"> {date} </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    {desc !== undefined && (<span className="postText">{desc}</span>)}
                    <img className="postImg" src={photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src='/assets/like.png' alt="" />
                        <img className="likeIcon" src='/assets/heart.png' alt="" />
                        <span className="likeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
