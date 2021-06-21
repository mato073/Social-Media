const initialState = {
    posts: []
};

function Posts_reducer(state = initialState, action) {
    switch (action.type) {
        case "POSTS":
            return {
                ...state,
                posts: action.posts
            };
        default:
            return state;
    }
}

export default Posts_reducer;