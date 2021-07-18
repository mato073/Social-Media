import { GET_USER } from '../../Actions/Actions'

const initialState = {
    user: null,
    loading: false,
    success: false,
    error: null,
};

function User_reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER.REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_USER.SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
                success: true
            };
        case GET_USER.FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false
            };
        default:
            return state;
    }
}

export default User_reducer;