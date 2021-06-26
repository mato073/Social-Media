import React, { useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './home.css'
import { get_user, get_posts } from '../../redux/Actions/Actions'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux';
const Home = (props) => {
    const disptach = useDispatch();
    console.log('posts =', props.posts);
    useEffect(() => {
        disptach(get_user());
        disptach(get_posts());
    }, []);
    if (!props.posts) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <Topbar />
                <div className="homeContainer">
                    <Sidebar />
                    <Feed posts={props.posts} />
                    <Rightbar home />
                </div>

            </>
        )
    }
}
const mapStateToProps = (state) => ({
    posts: state.Posts_reducer.posts,
});
export default connect(mapStateToProps)(Home);