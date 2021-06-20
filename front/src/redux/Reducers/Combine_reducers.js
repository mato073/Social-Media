import { combineReducers } from 'redux'
import Rooms_reducer from './Reducers/Rooms_reducer';
import User_reducer from './Reducers/user_reducer'
import Planning_reducer from './Reducers/planning_reducer'


export default combineReducers({
    Rooms_reducer,
    User_reducer,
    Planning_reducer
})