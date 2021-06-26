import React from 'react'
import './sidebar.css'
import Friend from '../Friend/Friend'
import { connect } from 'react-redux';

const Sidebar = ({ followings }) => {
    return (
        <div className="sidebar" >
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img src="/assets/icon/feed.png" className="sidebarIconFeed" alt="" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/icon/chat.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/icon/video.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/icon/groupe.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/icon/bookmark.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/icon/weather.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Weather</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/icon/friends.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/icon/event.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {
                        followings?.map(user => (
                            <Friend key={user.id} user={user} />
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    followings: state.User_reducer.user.user.followings

});
export default connect(mapStateToProps)(Sidebar);

