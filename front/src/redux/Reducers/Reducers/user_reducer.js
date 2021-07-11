const initialState = {
    user: null,
    err: false
};

function User_reducer(state = initialState, action) {
    switch (action.type) {
        case "USER":
            return {
                ...state,
                user: action.user
            };
        case "USER_ERR":
            return {
                ...state,
                err: true
            };
        default:
            return state;
    }
}

export default User_reducer;