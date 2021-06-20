const initialState = {
    equipements: []
};

function Equipements_reducer(state = initialState, action) {
    switch (action.type) {
        case "EQUIPEMENTS":
            return {
                ...state,
                equipements: action.equipements
            };
        default:
            return state;
    }
}

export default Equipements_reducer;