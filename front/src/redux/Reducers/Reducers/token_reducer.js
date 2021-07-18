import { GET_TOKEN } from '../../Actions/Actions'

const initialState = {
    token: null,
    loading: false,
    success: false,
    error: null,
};

function Token_reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN.SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false,
                success: true,
                error: false,

            };
        case GET_TOKEN.REQUEST:
            return {
                ...state,
                token: null,
                loading: true,
                success: false,
                error: null,

            };
        case GET_TOKEN.FAILURE:
            return {
                ...state,
                token: null,
                loading: false,
                success: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default Token_reducer;