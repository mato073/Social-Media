import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

const other = '/assets/person/1.jpeg'
const Topbar = () => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">The best</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img /* src={imglink} */ src={other} alt="" className="topbarImg" />
            </div>
        </div>
    )
}

export default Topbar
