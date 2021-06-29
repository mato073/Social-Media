import axiosInstance from '../helper/axiosInterseptor'
const { REACT_APP_BASE_URL } = process.env;


export async function followUser(id) {
    const url = `${REACT_APP_BASE_URL}/users/follow/${id}`
    
    try {
        await axiosInstance().put(url);
        return true;
    } catch (err) {
        return false;
    }
}

export async function unFollowUser(id) {
    const url = `${REACT_APP_BASE_URL}/users/unfollow/${id}`
    try {
        await axiosInstance().put(url);
        return true;
    } catch (err) {
        return false;
    }
}