
import { GET_USER_POSTS, GET_POSTS } from '../../Actions/Actions'

const initialState = {
    posts: {
        data: null,
        loading: false,
        success: false,
        error: null,
    },
};


export function Posts_reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS.REQUEST:
            return {
                ...state,
                posts: {
                    data: null,
                    loading: true,
                    success: false,
                    error: null,
                },
            };
        case GET_POSTS.SUCCESS:
            return {
                ...state,
                posts: {
                    data: action.posts,
                    loading: false,
                    success: true,
                    error: false,
                },
            };
        case GET_POSTS.FAILURE:
            return {
                ...state,
                posts: {
                    data: null,
                    loading: false,
                    success: false,
                    error: true,
                },
            };
        default:
            return state;
    }
}

const initialStateUser = {
    user_posts: {
        data: null,
        loading: false,
        success: false,
        error: null,
    }
};

export function User_posts_reducer(state = initialStateUser, action) {
    switch (action.type) {
        case GET_USER_POSTS.REQUEST:
            return {
                ...state,
                user_posts: {
                    data: null,
                    loading: true,
                    success: false,
                    error: null,
                },
            };
        case GET_USER_POSTS.SUCCESS:
            return {
                ...state,
                user_posts: {
                    data: action.data,
                    loading: false,
                    success: true,
                    error: false,
                },
            };
        case GET_USER_POSTS.FAILURE:
            return {
                ...state,
                user_posts: {
                    data: null,
                    loading: false,
                    success: false,
                    error: true,
                },
            };

        default:
            return state;
    }
}