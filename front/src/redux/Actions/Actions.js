import axios from 'axios';

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

export function get_notification(planning) {
    return {
        type: 'NOTIFICATIONS',
        planning: planning
    }
}

export function get_posts(token) {
    const url = `${REACT_APP_BASE_URL}/auth/token`
    const data = {
        token: token
    }
    return async (dispatch) => {
        try {
            const result = await axios.post(url, data);
            return dispatch(send_posts(result.data));
        } catch (err) {
            return dispatch(send_posts_err(err));
        }
    }
}

export function get_user(email, password) {
    const url = `${REACT_APP_BASE_URL}/auth/login`
    const data = {
        "email": email,
        "password": password
    }
    return async (dispatch) => {
        try {
            const result = await axios.post(url, data);
            return dispatch(send_user(result.data));
        } catch (err) {
            return dispatch(send_user_err(err.data));
        }
    }
}

/* export function get_notifications() {
    const data = user;
    return async (dispatch) => {
        dispatch(send_user(data));
    }
} */