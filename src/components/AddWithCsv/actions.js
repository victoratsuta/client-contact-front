import {
    UPDATE_WITH_CSV_CLIENT_ACTION,
    UPDATE_WITH_CSV_CLIENT_FAIL_ACTION,
    UPDATE_WITH_CSV_CLIENT_SUCCESS_ACTION
} from "../../constants/types";

export const updateWithCsvClientAction = (csv) => ({
    type: UPDATE_WITH_CSV_CLIENT_ACTION,
    csv
});

export const updateWithCsvClientSuccessAction = () => ({
    type: UPDATE_WITH_CSV_CLIENT_SUCCESS_ACTION,
});

export const updateWithCsvClientFailAction = (error) => ({
    type: UPDATE_WITH_CSV_CLIENT_FAIL_ACTION,
    error
});
