import { combineReducers } from 'redux'
import Posts_reducer from './Reducers/posts_reducer';
import User_reducer from './Reducers/user_reducer'
import Token_reducer from './Reducers/token_reducer'


export default combineReducers({
    Posts_reducer,
    User_reducer,
    Token_reducer
})