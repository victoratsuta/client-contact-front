import {
    GET_CLIENT_ACTION, SEND_CLIENT_ACTION, SEND_CLIENT_FAIL_ACTION, SEND_CLIENT_SUCCESS_ACTION,
    SET_CLIENT_ACTION
} from "../constants/types";

const INIT_STATE = {
    loading: false
};

export default (state = INIT_STATE, action) => {


    switch (action.type) {

        case GET_CLIENT_ACTION :
            return {...state, loading: true}

        case SET_CLIENT_ACTION :
            return {...action.data, loading: false}

        case SEND_CLIENT_ACTION :
            return {...state, loading: true}

        case SEND_CLIENT_SUCCESS_ACTION :
            return {...state, loading: false}

        case SEND_CLIENT_FAIL_ACTION :
            return {...state, ...action.error, loading: false}

        default:
            return {...state};
    }

}
