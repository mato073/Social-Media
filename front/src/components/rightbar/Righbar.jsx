import React from 'react'
import './rightbar.css'

const Righbar = () => {
    return (
        <div className="rightbarContainer" >
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="bithdayImg" src="/assets/gift.png" alt=""></img>
                    <span className="bithdayText" ><b>Bravo</b> and <b>3 other frind</b> hav a birthday today</span>
                </div>
                <img src="/assets/ad.png" className="rightbarAd" alt=""></img>
                <h4 className="rightbarTitlte">Online friends</h4>
                <ul className="rightbarFriendsList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/RileyReid.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Riley Reid</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Righbar
