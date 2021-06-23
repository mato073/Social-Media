import React from 'react'
import './rightbar.css'
import { Users } from '../../dummydata'
import Online from '../Online/Online'

const Righbar = ({ profile, followers }) => {

    const HomeRightBar = () => {
        return (
            <>
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
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle" >User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Loxahatchee</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">London</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Job:</span>
                        <span className="rightbarInfoValue">Pornographic actress</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Web site: </span>
                        <span className="rightbarInfoValue" ><a href="https://reidmylips.com">https://reidmylips.com</a></span>
                    </div>
                </div>
                <h4 className="rightbarTitle" >Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/1.jpeg" alt="" />
                        <span className="rightbarFollowingName">Brase Bob</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/7.jpeg" alt="" />
                        <span className="rightbarFollowingName">Brase Bob</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/3.jpeg" alt="" />
                        <span className="rightbarFollowingName">Brase Bob</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/4.jpeg" alt="" />
                        <span className="rightbarFollowingName">Brase Bob</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/5.jpeg" alt="" />
                        <span className="rightbarFollowingName">Brase Bob</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className="rightbarFollowingImg" src="/assets/person/6.jpeg" alt="" />
                        <span className="rightbarFollowingName">Brase Bob</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbarContainer" >
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}

export default Righbar
