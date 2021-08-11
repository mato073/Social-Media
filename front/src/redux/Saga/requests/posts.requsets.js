import axiosInstance from "../../../helper/axiosInterseptor";
const { REACT_APP_BASE_URL } = process.env;

export function request_get_posts() {

    const url = `${REACT_APP_BASE_URL}/post/timeligne/all`

    return axiosInstance().request({
        method: 'get',
        url: url
    });
}