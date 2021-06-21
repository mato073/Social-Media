import axios from 'axios';
import axiosInstance from '../../helper/axiosInterseptor'

const { REACT_APP_BASE_URL } = process.env;

export function send_posts(posts) {
    return {
        type: 'POSTS',
        posts: posts
    }
}

export function send_posts_err(err) {
    return {
        type: 'POSTS_ERR',
        err: err
    }
}

export function send_user(user) {
    return {
        type: 'USER',
        user: user
    }
}

export function send_user_err(err) {
    return {
        type: 'USER_ERR',
        err: err
    }
}

export function send_token(token) {
    return {
        type: 'TOKEN',
        token: token
    }
}

export function send_token_err(err) {
    return {
        type: 'TOKEN_ERR',
        err: err
    }
}

export function get_notification(planning) {
    return {
        type: 'NOTIFICATIONS',
        planning: planning
    }
}

export function get_token(email, password) {
    const url = `${REACT_APP_BASE_URL}/auth/login`
    const data = {
        "email": email,
        "password": password
    }
    return async (dispatch) => {
        try {
            const result = await axios.post(url, data);
            return dispatch(send_token(result.data));
        } catch (err) {
            return dispatch(send_token_err(err));
        }
    }
}

export function get_posts() {
    const url = `${REACT_APP_BASE_URL}/post/timeligne/all`
    console.log('ici');
    return async (dispatch) => {
        try {
            const result = await axiosInstance().get(url);
            console.log(result.data);
            return dispatch(send_posts(result.data));
        } catch (err) {
            console.log(err);
            return dispatch(send_token_err(err));
        }
    }
}

/* export function get_notifications() {
    const data = user;
    return async (dispatch) => {
        dispatch(send_user(data));
    }
} */