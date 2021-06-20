import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './Reducers/Combine_reducers';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const Store = createStore(persistedReducer, applyMiddleware(thunk));

export default Store