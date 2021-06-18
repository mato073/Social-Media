import React from 'react'
import './rightbar.css'
import { Users } from '../../dummydata'
import Online from '../Online/Online'

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
                    {
                        Users.map(user => (
                            <Online key={user.id} user={user} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Righbar
