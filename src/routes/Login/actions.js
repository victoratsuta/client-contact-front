import {
    LOGIN_ACTION, LOGIN_FAIL_ACTION, LOGIN_SUCCESS_ACTION, LOGOUT_ACTION, LOGOUT_FAIL_ACTION,
    LOGOUT_SUCCESS_ACTION
} from "../../constants/types";

export const loginAction = (data, history) => ({
    type: LOGIN_ACTION,
    data,
    history
});

export const loginSuccessAction = (id) => ({
    type: LOGIN_SUCCESS_ACTION,
    id
});

export const loginFailAction = (error) => ({
    type: LOGIN_FAIL_ACTION,
    error
});

export const logoutAction = (history) => ({
    type: LOGOUT_ACTION,
    history
});


export const logoutSuccessAction = () => ({
    type: LOGOUT_SUCCESS_ACTION,
});

export const logoutFailAction = (error) => ({
    type: LOGOUT_FAIL_ACTION,
    error
});