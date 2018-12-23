import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import clientsReducer from './ClientsReducer'
import clientReducer from './ClientReducer'
import contactReducer from './ContactReducer'
import authReducer from './AuthReducer'

const rootReducer = combineReducers(
    {
        routing: routerReducer,
        clients: clientsReducer,
        client: clientReducer,
        contact: contactReducer,
        auth: authReducer
    }
);

export default rootReducer;
