import axios from 'axios';
import axiosInstance from '../../helper/axiosInterseptor'

const { REACT_APP_BASE_URL } = process.env;

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


export const GET_TOKEN = {
    REQUEST: 'GET_TOKEN/REQUEST',
    SUCCESS: 'GET_TOKEN/SUCCESS',
    FAILURE: 'GET_TOKEN/FAILURE',
};

export const GET_USER = {
    REQUEST: 'GET_USER/REQUEST',
    SUCCESS: 'GET_USER/SUCCESS',
    FAILURE: 'GET_USER/FAILURE',
};

// POSTS REQUEST \\
export function send_posts_request() {
    return {
        type: GET_POSTS.REQUEST,
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
        type: GET_POSTS.FAILURE,
    }
}
// POSTS REQUEST \\

// USER POSTS REQUEST \\
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
// USER POSTS REQUEST \\

// USER TOKEN REQUEST \\
export function send_token_request() {
    return {
        type: GET_TOKEN.FAILURE,
    }
}
export function send_token_success(token) {
    return {
        type: GET_TOKEN.SUCCESS,
        token
    }
}
export function send_token_error() {
    return {
        type: GET_TOKEN.REQUEST,
    }
}
// USER TOKEN REQUEST \\

// USER REQUEST \\
export function send_user_request() {
    return {
        type: GET_USER.REQUEST,
    }
}
export function send_user_success(user) {
    return {
        type: GET_USER.SUCCESS,
        user
    }
}
export function send_user_error(error) {
    return {
        type: GET_USER.FAILURE,
        error
    }
}
// USER REQUEST \\

/* export function get_notification(planning) {
    return {
        type: 'NOTIFICATIONS',
        planning: planning
    }
} */

export function get_token(email, password) {
    const url = `${REACT_APP_BASE_URL}/auth/login`
    const data = {
        "email": email,
        "password": password
    }
    return async (dispatch) => {
        try {
            const result = await axios.post(url, data);
            return dispatch(send_token_success(result.data));
        } catch (err) {
            console.log(err);
            //return dispatch(send_token_error());
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
            console.log('user =', result.data);
            console.log(result.data);
            return dispatch(send_user_success(result.data));
        } catch (error) {
            console.log('error =', error);
            return dispatch(send_user_error(error));
        }
    }
}

/* export function get_notifications() {
    const data = user;
    return async (dispatch) => {
        dispatch(send_user(data));
    }
} */