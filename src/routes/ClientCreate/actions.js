import {CREATE_CLIENT_ACTION, CREATE_CLIENT_FAIL_ACTION, CREATE_CLIENT_SUCCESS_ACTION} from "../../constants/types";

export const createClientAction = (data, history) => ({
    type: CREATE_CLIENT_ACTION,
    data,
    history
});

export const createClientSuccessAction = () => ({
    type: CREATE_CLIENT_SUCCESS_ACTION,
});

export const createClientFailAction = (error) => ({
    type: CREATE_CLIENT_FAIL_ACTION,
    error
});