const initialState = {
    posts: [],
    user_posts: []
};

function Posts_reducer(state = initialState, action) {
    switch (action.type) {
        case "POSTS":
            return {
                ...state,
                posts: action.posts
            };
        case "USER_POSTS":
            return {
                ...state,
                user_posts: action.user_posts
            };
        default:
            return state;
    }
}

export default Posts_reducer;