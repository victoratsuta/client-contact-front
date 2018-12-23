import {call, fork, put, takeEvery} from 'redux-saga/effects';
import {
    CREATE_CLIENT_ACTION,
    CREATE_CONTACT_ACTION,
    DELETE_CLIENT_ACTION,
    DELETE_CLIENTS_ACTION,
    DELETE_CONTACT_ACTION,
    GET_CLIENT_ACTION,
    GET_CLIENTS_ACTION, LOGIN_ACTION, LOGOUT_ACTION,
    SEND_CLIENT_ACTION,
    SEND_CONTACT_ACTION,
    UPDATE_WITH_CSV_CLIENT_ACTION
} from "../constants/types";
import {
    deleteClientFailAction,
    deleteClientSuccessAction,
    getClientsAction,
    setClientsAction
} from "../routes/Clients/actions";
import axios from 'axios'
import {sendClientFailAction, sendClientSuccessAction, setClientAction} from "../routes/ClientEdit/actions";
import {
    createContactFailAction,
    createContactSuccessAction,
    deleteContactFailAction,
    deleteContactSuccessAction,
    sendContactFailAction,
    sendContactSuccessAction
} from "../components/Contact/actions";
import {createClientFailAction, createClientSuccessAction} from "../routes/ClientCreate/actions";
import {updateWithCsvClientFailAction, updateWithCsvClientSuccessAction} from "../components/AddWithCsv/actions";
import {loginFailAction, loginSuccessAction, logoutFailAction, logoutSuccessAction} from "../routes/Login/actions";
import TokenService from "../services/TokenService";

function getClientsRequest(page) {

    const tokenService = new TokenService

    return tokenService.get('clients' + '?page=' + ++page)

}

function getClientRequest(id) {

    const tokenService = new TokenService

    return tokenService.get('clients/' + id)

}

function sendClientRequest(data) {

    const tokenService = new TokenService

    return tokenService.put('clients/' + data.id, data)

}

function sendContactRequest(data) {

    const tokenService = new TokenService

    return tokenService.put('contacts/' + data.id, data)

}

function deleteContactRequest(id) {

    const tokenService = new TokenService

    return tokenService.delete('contacts/' + id)

}

function createContactRequest(data) {

    const tokenService = new TokenService

    return tokenService.post('contacts', data)

}

function deleteClientRequest(id) {

    const tokenService = new TokenService

    return tokenService.delete('clients/' + id)

}

function createClientRequest(data) {

    const tokenService = new TokenService

    return tokenService.post('clients', data)

}

function updateWithCsvClientRequest(csv) {

    const tokenService = new TokenService

    return tokenService.post('scv', {csv})

}

function loginRequest(data) {

    const tokenService = new TokenService

    return tokenService.post('login', data)

}

function logoutRequest(data) {

    const tokenService = new TokenService

    return tokenService.post('logout')

}



function* callGetClients({page}) {

    const result = yield call(getClientsRequest, page);

    console.log(result)

    yield put(setClientsAction(result.data));
}

function* callGetClient({id}) {

    const result = yield call(getClientRequest, id);

    console.log(result)

    yield put(setClientAction(result.data));
}

function* callSendClient({data}) {

    const result = yield call(sendClientRequest, data);

    if (result.data !== undefined) {

        yield put(setClientAction(result.data));
        yield put(sendClientSuccessAction());

    } else {

        yield put(sendClientFailAction('error'));

    }


}

function* callSendContact({data}) {

    const result = yield call(sendContactRequest, data);

    if (result.data !== undefined) {

        yield put(sendContactSuccessAction());

    } else {

        yield put(sendContactFailAction('error'));

    }


}

function* callDeleteContact({id}) {

    const result = yield call(deleteContactRequest, id);

    if (result.data !== undefined) {

        yield put(setClientAction(result.data));
        yield put(deleteContactSuccessAction());

    } else {

        yield put(deleteContactFailAction('error'));

    }
}

function* callCreateContact({data}) {

    const result = yield call(createContactRequest, data);

    if (result.data !== undefined) {

        yield put(setClientAction(result.data));
        yield put(createContactSuccessAction());

    } else {

        yield put(createContactFailAction('error'));

    }
}

function* callDeleteClient({id, page}) {

    const result = yield call(deleteClientRequest, id);

    if (result.data !== undefined) {

        yield put(getClientsAction(--page));
        yield put(deleteClientSuccessAction());

    } else {

        yield put(deleteClientFailAction('error'));

    }
}

function* callCreateClient({data, history}) {

    const result = yield call(createClientRequest, data);

    if (result.data !== undefined) {

        history.push('/client/' + result.data.id)

        yield put(createClientSuccessAction());

    } else {

        yield put(createClientFailAction('error'));

    }
}

function* callUpdateWithCsvClient({csv}) {

    const result = yield call(updateWithCsvClientRequest, csv);

    if (result.data !== undefined) {

        yield put(getClientsAction());

        yield put(updateWithCsvClientSuccessAction());

    } else {

        yield put(updateWithCsvClientFailAction('error'));

    }
}

function* callLogin({data, history}) {

    try {

        const result = yield call(loginRequest, data);

        if (result.data.data !== undefined && result.data.data.id !== undefined) {

            yield put(loginSuccessAction(result.data.data.id));

            localStorage.setItem('user_id', result.data.data.id);
            localStorage.setItem('auth_token', result.data.data.auth_token);

            history.push('/clients')

        } else {

            yield put(loginFailAction('error'));

        }

    } catch (error){

        console.log(error)

        alert('Error')

    }
}

function* callLogout({history}) {

    const result = yield call(logoutRequest);

    if (result.data !== undefined) {

        yield put(logoutSuccessAction());

        localStorage.removeItem('user_id');
        localStorage.removeItem('auth_token');

        history.push('/login')


    } else {

        yield put(logoutFailAction('error'));

    }
}

function* getClientsSaga() {
    yield takeEvery(GET_CLIENTS_ACTION, callGetClients);
}


function* getClientSaga() {
    yield takeEvery(GET_CLIENT_ACTION, callGetClient);
}

function* sendClientSaga() {
    yield takeEvery(SEND_CLIENT_ACTION, callSendClient);
}

function* sendContactSaga() {
    yield takeEvery(SEND_CONTACT_ACTION, callSendContact);
}

function* deleteContactSaga() {
    yield takeEvery(DELETE_CONTACT_ACTION, callDeleteContact);
}

function* createContactSaga() {
    yield takeEvery(CREATE_CONTACT_ACTION, callCreateContact);
}

function* deleteClientSaga() {
    yield takeEvery(DELETE_CLIENTS_ACTION, callDeleteClient);
}

function* createClientSaga() {
    yield takeEvery(CREATE_CLIENT_ACTION, callCreateClient);
}

function* updateWithCsvClientSaga() {
    yield takeEvery(UPDATE_WITH_CSV_CLIENT_ACTION, callUpdateWithCsvClient);
}

function* loginSaga() {
    yield takeEvery(LOGIN_ACTION, callLogin);
}

function* logoutSaga() {
    yield takeEvery(LOGOUT_ACTION, callLogout);
}

export default function* root() {
    yield [
        fork(getClientsSaga),
        fork(getClientSaga),
        fork(sendClientSaga),
        fork(sendContactSaga),
        fork(deleteContactSaga),
        fork(createContactSaga),
        fork(deleteClientSaga),
        fork(createClientSaga),
        fork(updateWithCsvClientSaga),
        fork(loginSaga),
        fork(logoutSaga),
    ];
}
