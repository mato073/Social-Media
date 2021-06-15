import React from 'react'
import './sidebar.css'
import { RssFeed } from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">This is a test</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">This is a test</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">This is a test</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">This is a test</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">This is a test</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">This is a test</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">This is a test</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
