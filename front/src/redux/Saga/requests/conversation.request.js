import axiosInstance from "../../../helper/axiosInterseptor";
const { REACT_APP_BASE_URL } = process.env;

export function request_get_conversations() {

  const url = `${REACT_APP_BASE_URL}/conversation`

  return axiosInstance().request({
    method: 'get',
    url: url
  });
}