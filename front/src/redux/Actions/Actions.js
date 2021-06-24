import axios from 'axios';
import axiosInstance from '../../helper/axiosInterseptor'

const { REACT_APP_BASE_URL } = process.env;

export function send_posts(posts) {
    return {
        type: 'POSTS',
        posts: posts
    }
}

export function send_user_posts(posts) {
    return {
        type: 'USER_POSTS',
        user_posts: posts
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
    return async (dispatch) => {
        try {
            const result = await axiosInstance().get(url);
            const post = result.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
            return dispatch(send_posts(post));
        } catch (err) {

            return dispatch(send_token_err(err));
        }
    }
}

export function get_user_posts() {
    const url = `${REACT_APP_BASE_URL}/post/timeligne/user`
    return async (dispatch) => {
        try {
            const result = await axiosInstance().get(url);
            const post = result.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
            return dispatch(send_user_posts(post));
        } catch (err) {

            return dispatch(send_token_err(err));
        }
    }
}

export function get_user() {
    const url = `${REACT_APP_BASE_URL}/users`
    return async (dispatch) => {
        try {
            const result = await axiosInstance().get(url);

            return dispatch(send_user(result.data));
        } catch (err) {

            return dispatch(send_user_err(err));
        }
    }
}

/* export function get_notifications() {
    const data = user;
    return async (dispatch) => {
        dispatch(send_user(data));
    }
} */