import {
    GET_CLIENT_ACTION, LOGIN_ACTION, LOGIN_FAIL_ACTION, LOGIN_SUCCESS_ACTION, LOGOUT_ACTION, LOGOUT_FAIL_ACTION,
    LOGOUT_SUCCESS_ACTION,
    SEND_CLIENT_ACTION,
    SEND_CLIENT_FAIL_ACTION,
    SEND_CLIENT_SUCCESS_ACTION,
    SET_CLIENT_ACTION
} from "../constants/types";

const INIT_STATE = {

    id: localStorage.getItem('user_id'),
    loading: false,

};

export default (state = INIT_STATE, action) => {


    switch (action.type) {

        case LOGIN_ACTION :
            return {...state, loading: true}

        case LOGIN_SUCCESS_ACTION :

            return {...state, id : action.id, loading: false}

        case LOGIN_FAIL_ACTION :
            return {...state, ...action.error, loading: false}

        case LOGOUT_ACTION :
            return {...state, loading: true}

        case LOGOUT_SUCCESS_ACTION :
            return {...state, id: null, loading: false}

        case LOGOUT_FAIL_ACTION :
            return {...state, loading: false}

        default:
            return {...state};
    }

}
