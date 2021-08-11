import axiosInstance from "../../../helper/axiosInterseptor";
const { REACT_APP_BASE_URL } = process.env;

export function request_get_user_posts() {

    const url = `${REACT_APP_BASE_URL}/post/timeligne/user`

    return axiosInstance().request({
        method: 'get',
        url: url
    });
}