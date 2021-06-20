const initialState = {
    planning: []
};

function Planning_reducer(state = initialState, action) {
    switch (action.type) {
        case "PLANNING":
            return {
                ...state,
                planning: [...state.planning, action.planning]
            };
        default:
            return state;
    }
}

export default Planning_reducer;