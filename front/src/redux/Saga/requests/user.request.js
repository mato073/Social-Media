import axiosInstance from "../../../helper/axiosInterseptor";
const { REACT_APP_BASE_URL } = process.env;

export function request_get_user() {

    const url = `${REACT_APP_BASE_URL}/users`

    return axiosInstance().request({
        method: 'get',
        url: url
    });
}