import React, {useEffect} from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Righbar'
import './home.css'
import { get_posts } from '../../redux/Actions/Actions'
import { useDispatch } from 'react-redux'

const Home = () => {
    const disptach = useDispatch();
    useEffect(() => {
        console.log("useEfecte");
        disptach(get_posts());
    }, []);

    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar home />
            </div>

        </>
    )
}

export default Home;