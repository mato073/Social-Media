import React from 'react'
import './rightbar.css'
import Online from '../Online/Online'
import { useHistory } from "react-router-dom";

const Righbar = ({ profile, followers, online }) => {
    console.log('ici', online);
    const history = useHistory();

    const goPublicProfile = (userId) => {
        history.push(`/publicProfile/${userId}`)
    }

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
                        online?.map(user => (
                            <Online key={user.userId} user={user} />
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
                <h4 className="rightbarTitle" >Followers</h4>
                <div className="rightbarFollowings">
                    {
                        followers?.map(follower => {
                            return (
                                <div className="rightbarFollowing">
                                    <img className="rightbarFollowingImg" src={follower.profilePicture} alt="" onClick={() => goPublicProfile(follower.userId)} />
                                    <span className="rightbarFollowingName">{follower.fistname} {follower.lastname}</span>
                                </div>
                            )
                        })
                    }
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
