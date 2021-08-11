import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './Reducers/Combine_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './Saga/saga';

const persistConfig = {
    key: 'root',
    storage
}

//Persiste store
const persistedReducer = persistReducer(persistConfig, reducers)

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middlewar = [thunk, sagaMiddleware]

const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewar)))
sagaMiddleware.run(watcherSaga)
export default Store