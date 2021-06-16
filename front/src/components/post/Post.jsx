import React from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'

const link = "https://s.smutty.com/media_smutty/k/n/o/b/b/knobbyhardone-ybatq-04913c.jpg"
const link2 = "https://di.phncdn.com/videos/202005/03/309982831/original/(m=eaAaGwObaaaa)(mh=FFwMK9N6R_s6RXWD)16.jpg"
const link3 = "https://ci.phncdn.com/videos/202011/08/368267022/thumbs_5/(m=eaAaGwObaaaa)(mh=BQwlA0i3QzNVJy9h)9.jpg"

const Post = () => {
    return (
        <div className="postContainer">
            <div className="postWapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img className="postProfileImg" src={link} alt="" /*src='/assets/person/1.jpeg'*/ ></img>
                        <span className="postUserName"> Slutty nurse </span>
                        <span className="postDate"> 5 minutes ago </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">I love my tits do you do to ?</span>
                    <img className="postImg" src={link3}  /*src='/assets/post/1.jpeg'*/ alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src='/assets/like.png' alt="" />
                        <img className="likeIcon" src='/assets/heart.png' alt="" />
                        <span className="likeCounter">1000 people like this</span>
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
