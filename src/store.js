import { createStore, applyMiddleware } from 'redux';


import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/sagas';

import rootReducer from './reducers/index';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);


export default store;

