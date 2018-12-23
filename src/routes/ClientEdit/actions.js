import {
    GET_CLIENT_ACTION, SEND_CLIENT_ACTION, SEND_CLIENT_FAIL_ACTION, SEND_CLIENT_SUCCESS_ACTION,
    SET_CLIENT_ACTION
} from "../../constants/types";

export const getClientAction = (id) => ({
    type: GET_CLIENT_ACTION,
    id
});

export const setClientAction = (data) => ({
    type: SET_CLIENT_ACTION,
    data
});

    export const sendClientAction = (data) => ({
    type: SEND_CLIENT_ACTION,
    data
});

export const sendClientSuccessAction = () => ({
    type: SEND_CLIENT_SUCCESS_ACTION,
});

export const sendClientFailAction = (error) => ({
    type: SEND_CLIENT_FAIL_ACTION,
    error
});