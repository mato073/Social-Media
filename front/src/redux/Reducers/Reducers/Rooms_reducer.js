const initialState = {
    rooms: []
};

function Rooms_reducer(state = initialState, action) {
    switch (action.type) {
        case "ROOMS":
            return {
                ...state,
                rooms: action.rooms
            };
        default:
            return state;
    }
}

export default Rooms_reducer;