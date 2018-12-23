import {
    DELETE_CLIENTS_ACTION,
    DELETE_CLIENTS_FAIL_ACTION,
    DELETE_CLIENTS_SUCCESS_ACTION,
    GET_CLIENTS_ACTION,
    SET_CLIENTS_ACTION
} from "../constants/types";

const testState = Array(100).fill().map((e, index) => {

    return {
        'id': index,
        'first_name': 'name',
        'last_name': 'surname',
        'email': 'test@gmail.com',
    }

})

const INIT_STATE = {
    data: [],
    total: -1,
    loading: false
};

export default (state = INIT_STATE, action) => {


    switch (action.type) {

        case GET_CLIENTS_ACTION :
            return {...state, loading: true}
        case SET_CLIENTS_ACTION :
            return {...action.data, loading: false}

        case DELETE_CLIENTS_ACTION :
            return {...state, loading: true}

        case DELETE_CLIENTS_SUCCESS_ACTION :
            return {...state, loading: false}

        case DELETE_CLIENTS_FAIL_ACTION :
            return {...state, ...action.error, loading: false}

        default:
            return {...state};
    }

}
