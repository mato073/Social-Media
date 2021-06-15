import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

const imglink = 'https://lh3.googleusercontent.com/proxy/kwmYenYFq4b3Y_WoDaR5--ECs1hl3Adp1bAB27XywLPd9jZM9i8jA2_BilVautZxxkcv1depb6c-qOY7CLRWUe8xtuBSEe3cOhBpIz1lAsgz5N4mxVSvX1P9CdDjad7v0OxOQDRkSMFEANaZzx-uOdHEV_6666NlgEtQFDD2Ux2SHZReqUrsnphVA22_ynu7T1k_6U62O1J3'
const other = '/assets/person/1.jpeg'
const Topbar = () => {
    return (
        <div className="Container">
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
