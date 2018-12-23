import {
    DELETE_CLIENTS_ACTION,
    DELETE_CLIENTS_FAIL_ACTION,
    DELETE_CLIENTS_SUCCESS_ACTION,
    GET_CLIENTS_ACTION,
    SET_CLIENTS_ACTION
} from "../../constants/types";

export const getClientsAction = (page = 1) => ({
    type: GET_CLIENTS_ACTION,
    page
});

export const setClientsAction = (data) => ({
    type: SET_CLIENTS_ACTION,
    data
});

export const deleteClientAction = (id, page) => ({
    type: DELETE_CLIENTS_ACTION,
    id,
    page
});

export const deleteClientSuccessAction = () => ({
    type: DELETE_CLIENTS_SUCCESS_ACTION,
});

export const deleteClientFailAction = (error) => ({
    type: DELETE_CLIENTS_FAIL_ACTION,
    error
});