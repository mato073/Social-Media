import { combineReducers } from 'redux'
import Rooms_reducer from './Reducers/Rooms_reducer';
import Equipements_reducer from './Reducers/Equipements_reducer'
import Planning_reducer from './Reducers/planning_reducer'


export default combineReducers({
    Rooms_reducer,
    Equipements_reducer,
    Planning_reducer
})