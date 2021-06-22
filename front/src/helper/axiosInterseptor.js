import axios from 'axios'
import Store from '../redux/Store'
export default () => {

    const storeData = Store.getState();
    let headers = {};
    if (storeData.Token_reducer.token.Token) {
        headers.Authorization = `Bearer ${storeData.Token_reducer.token.token}`;
    }

    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use(
        config => {
             const token = storeData.Token_reducer.token.token;
            if (token) {
                config.headers['Authorization'] = 'Bearer ' + token;
            }
            return config;
        },
        error => {
            Promise.reject(error)
        });

    axiosInstance.interceptors.response.use((response) => {
        return response
    }, async function (error) {
        const originalRequest = error.config;
        /*  const refresh = storeData.UserToken_reducer.token.refreshToken; */
        if (error.response.status === 401 && !originalRequest._retry) {
            console.log('token not good');
            /*            originalRequest._retry = true;
                       const access_token = await refreshToken(refresh);
                       Store.dispatch(send_token(access_token));
                       console.log('old =', originalRequest);
                       axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token.accessToken;
                       originalRequest.headers['Authorization'] = 'Bearer ' + access_token.accessToken;
                       console.log('new =', originalRequest);
                       return axios(originalRequest); */
        }
        return Promise.reject(error);
    });

    return axiosInstance;
};