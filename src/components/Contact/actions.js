import {
    CREATE_CONTACT_ACTION, CREATE_CONTACT_FAIL_ACTION, CREATE_CONTACT_SUCCESS_ACTION,
    DELETE_CONTACT_ACTION, DELETE_CONTACT_FAIL_ACTION, DELETE_CONTACT_SUCCESS_ACTION,
    GET_CONTACT_ACTION, SEND_CONTACT_ACTION, SEND_CONTACT_FAIL_ACTION, SEND_CONTACT_SUCCESS_ACTION,
    SET_CONTACT_ACTION
} from "../../constants/types";

export const getContactAction = (id) => ({
    type: GET_CONTACT_ACTION,
    id
});

export const setContactAction = (data) => ({
    type: SET_CONTACT_ACTION,
    data
});

    export const sendContactAction = (data) => ({
    type: SEND_CONTACT_ACTION,
    data
});

export const sendContactSuccessAction = () => ({
    type: SEND_CONTACT_SUCCESS_ACTION,
});

export const sendContactFailAction = (error) => ({
    type: SEND_CONTACT_FAIL_ACTION,
    error
});

export const deleteContactAction = (id) => ({
    type: DELETE_CONTACT_ACTION,
    id
});

export const deleteContactSuccessAction = () => ({
    type: DELETE_CONTACT_SUCCESS_ACTION,
});

export const deleteContactFailAction = (error) => ({
    type: DELETE_CONTACT_FAIL_ACTION,
    error
});

export const createContactAction = (data) => ({
    type: CREATE_CONTACT_ACTION,
    data
});

export const createContactSuccessAction = () => ({
    type: CREATE_CONTACT_SUCCESS_ACTION,
});

export const createContactFailAction = (error) => ({
    type: CREATE_CONTACT_FAIL_ACTION,
    error
});