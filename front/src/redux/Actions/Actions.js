import axios from 'axios';
import axiosInstance from '../../helper/axiosInterseptor'

const { REACT_APP_BASE_URL } = process.env;

const POSTS = "POSTS";
export const GET_POSTS = {
    REQUEST: 'GET_POSTS/REQUEST',
    SUCCESS: 'GET_POSTS/SUCCESS',
    FAILURE: 'GET_POSTS/FAILURE',
}

export const GET_USER_POSTS = {
    REQUEST: 'GET_USER_POSTS/REQUEST',
    SUCCESS: 'GET_USER_POSTS/SUCCESS',
    FAILURE: 'GET_USER_POSTS/FAILURE',
};

export function send_posts_request() {
    return {
        type: GET_POSTS.FAILURE,
    }
}

export function send_posts_success(posts) {
    return {
        type: GET_POSTS.SUCCESS,
        posts
    }
}


export function send_posts_error() {
    return {
        type: GET_POSTS.REQUEST,
    }
}


export function send_user_posts_request() {
    return {
        type: GET_USER_POSTS.FAILURE,
    }
}

export function send_user_posts_success(posts) {
    return {
        type: GET_USER_POSTS.SUCCESS,
        posts
    }
}


export function send_user_posts_error() {
    return {
        type: GET_USER_POSTS.REQUEST,
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
            console.log('token =', result.data);
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
            dispatch(send_posts_request());
            const result = await axiosInstance().get(url);
            const post = result.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
            return dispatch(send_posts_success(post));
        } catch (err) {

            return dispatch(send_posts_error());
        }
    }
}

export function get_user_posts() {
    const url = `${REACT_APP_BASE_URL}/post/timeligne/user`
    return async (dispatch) => {
        try {
            dispatch(send_user_posts_request());
            const result = await axiosInstance().get(url);
            const post = result.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
            return dispatch(send_user_posts_success(post));
        } catch (err) {

            return dispatch(send_user_posts_error());
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