import axios from 'axios';
import axiosInstance from '../../helper/axiosInterseptor'

const { REACT_APP_BASE_URL } = process.env;

const actionCreatotHeader = (type) => {
    return {
        REQUEST: `${type}/REQUEST`,
        SUCCESS: `${type}/SUCCESS`,
        FAILURE: `${type}/FAILURE`,
    }
}

export const GET_POSTS = actionCreatotHeader('GET_POSTS');
export const GET_USER = actionCreatotHeader('GET_USER');
export const GET_USER_POSTS = actionCreatotHeader('GET_USER_POSTS');
export const GET_CONVERSATION = actionCreatotHeader('GET_CONVERSATION');

export const GET_TOKEN = {
    REQUEST: 'GET_TOKEN/REQUEST',
    SUCCESS: 'GET_TOKEN/SUCCESS',
    FAILURE: 'GET_TOKEN/FAILURE',
};

export const Action = {
    GET_POSTS,
    GET_USER,
    GET_USER_POSTS,
    GET_CONVERSATION
}

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
export function send_posts_error(error) {
    return {
        type: GET_POSTS.FAILURE,
        error
    }
}
// POSTS REQUEST \\

// USER POSTS REQUEST \\
export function send_user_posts_request() {
    return {
        type: GET_USER_POSTS.REQUEST,
    }
}
export function send_user_posts_success(data) {
    return {
        type: GET_USER_POSTS.SUCCESS,
        data
    }
}
export function send_user_posts_error() {
    return {
        type: GET_USER_POSTS.FAILURE,
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


// CONVERSATION REQUEST \\
export function send_conversation_request() {
    return {
        type: GET_CONVERSATION.REQUEST,
    }
}
export function send_conversation_success(data) {
    return {
        type: GET_CONVERSATION.SUCCESS,
        data
    }
}
export function send_conversation_error(error) {
    return {
        type: GET_CONVERSATION.FAILURE,
        error
    }
}
// CONVERSATION REQUEST \\

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

export function get_user_posts() {
    const url = `${REACT_APP_BASE_URL}/post/timeligne/user`
    return async (dispatch) => {
        try {
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
            return dispatch(send_user_success(result.data));
        } catch (error) {
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