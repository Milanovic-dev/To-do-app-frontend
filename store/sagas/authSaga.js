import { call, put, takeLatest, all } from "redux-saga/effects";
import { REQUEST_LOGIN, REQUEST_REGISTER } from "../actionTypes";
import { setAuthError } from "../actions/authActions";
import { setLoading } from "../actions/loaderActions";
import AuthService from "../../http/services/authService";
import { Router } from "../../i18n";

function* login(action) {
    try {
        yield put(setLoading(true));
        yield call(AuthService.login, action.payload);
        yield put(setAuthError(""));
        Router.push("/");
    } catch (error) {
        if (error.response.status === 401) {
            yield put(setAuthError("Wrong email or password"));
        }
    } finally {
        yield put(setLoading(false));
    }
}

function* register() {}

export default function* authSaga() {
    yield all([
        yield takeLatest(REQUEST_LOGIN, login),
        yield takeLatest(REQUEST_REGISTER, register),
    ]);
}
