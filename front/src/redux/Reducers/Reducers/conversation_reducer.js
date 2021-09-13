import { GET_CONVERSATION } from '../../Actions/Actions'

const initialState = {
  data: null,
  loading: false,
  success: false,
  error: null,
};

function Conversation_reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONVERSATION.REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_CONVERSATION.SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        success: true
      };
    case GET_CONVERSATION.FAILURE:
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

export default Conversation_reducer;