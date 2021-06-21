const initialState = {
    token: []
};

function Token_reducer(state = initialState, action) {
    switch (action.type) {
        case "TOKEN":
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
}

export default Token_reducer;