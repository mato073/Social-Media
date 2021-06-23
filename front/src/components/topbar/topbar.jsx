import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const Topbar = ({ user }) => {

    const history = useHistory();
    const goToProfile = () => {
        history.push(`profile/${user.firstname}/${user.lastname}`)
    }

    if (!user) {
        return (<p>Loagin...</p>)
    } else {
        return (
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <span className="logo">The best</span>
                    </Link>
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
                    <img /* src={imglink} */ src={user.profilePicture} alt="" className="topbarImg" onClick={goToProfile} />
                </div >
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.User_reducer.user.user,

});
export default connect(mapStateToProps)(Topbar);
