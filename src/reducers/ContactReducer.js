import {
    CREATE_CONTACT_ACTION, CREATE_CONTACT_FAIL_ACTION, CREATE_CONTACT_SUCCESS_ACTION,
    DELETE_CONTACT_ACTION, DELETE_CONTACT_FAIL_ACTION, DELETE_CONTACT_SUCCESS_ACTION,
    GET_CONTACT_ACTION,
    SEND_CONTACT_ACTION,
    SEND_CONTACT_FAIL_ACTION,
    SEND_CONTACT_SUCCESS_ACTION,
    SET_CONTACT_ACTION
} from "../constants/types";

const INIT_STATE = {
    loading: false
};

export default (state = INIT_STATE, action) => {


    switch (action.type) {

        case GET_CONTACT_ACTION :
            return {...state, loading: true}

        case SET_CONTACT_ACTION :
            return {...action.data, loading: false}

        case SEND_CONTACT_ACTION :
            return {...state, loading: true}

        case SEND_CONTACT_SUCCESS_ACTION :
            return {...state, loading: false}

        case SEND_CONTACT_FAIL_ACTION :
            return {...state, ...action.error, loading: false}

        case DELETE_CONTACT_ACTION :
            return {...state, loading: true}

        case DELETE_CONTACT_SUCCESS_ACTION :
            return {...state, loading: false}

        case DELETE_CONTACT_FAIL_ACTION :
            return {...state, ...action.error, loading: false}

        case CREATE_CONTACT_ACTION :
            return {...state, loading: true}

        case CREATE_CONTACT_SUCCESS_ACTION :
            return {...state, loading: false}

        case CREATE_CONTACT_FAIL_ACTION :
            return {...state, ...action.error, loading: false}

        default:
            return {...state};
    }

}
