import axiosInstance from '../helper/axiosInterseptor'
const { REACT_APP_BASE_URL } = process.env;

export async function newPost(image, desc) {
    const url = `${REACT_APP_BASE_URL}/post`
    const data = {
        "desc": desc,
        "img": image
    }
    console.log(data);
     try {
        const result = await axiosInstance().post(url, data);
        return result;
    } catch (err) {
        return err;
    }
}