import axiosInstance from '../helper/axiosInterseptor'
const { REACT_APP_BASE_URL } = process.env;

export async function newPost(image, desc) {
    const url = `${REACT_APP_BASE_URL}/post`
    const data = {
        "desc": desc,
        "img": image
    }
    try {
        const result = await axiosInstance().post(url, data);
        return result;
    } catch (err) {
        return err;
    }
}

export async function likePost(PostId) {
    const url = `${REACT_APP_BASE_URL}/post/like/${PostId}`
    try {
        await axiosInstance().put(url);
    } catch (err) {
        console.log('err', err);
    }
}