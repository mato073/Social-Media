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
                <img src="/assets/ad.png"  alt=""></img>
            </div>
        </div>
    )
}

export default Righbar
