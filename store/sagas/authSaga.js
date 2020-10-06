import { call, put, takeLatest, all } from "redux-saga/effects";
import { REQUEST_LOGIN, REQUEST_REGISTER } from "../actionTypes";
import { setAuthError } from "../actions/authActions";
import { setLoading } from "../actions/loaderActions";
import AuthService from "../../http/services/authService";
import { Router } from "../../i18n";

function* login({ payload }) {
    try {
        yield put(setAuthError(""));
        yield put(setLoading(true));
        yield call(AuthService.login, payload);
        Router.push("/");
    } catch (error) {
        if (error.response.status === 401) {
            yield put(setAuthError("Wrong email or password"));
        }
    } finally {
        yield put(setLoading(false));
    }
}

function* register({ payload }) {
    try {
        yield put(setAuthError(""));
        yield put(setLoading(true));
        yield call(AuthService.register, payload);
        yield put(Router.push, "/login");
    } catch (error) {
        console.log(error);
        if (error.response.status === 409) {
            yield put(setAuthError("Sorry, that email is already in use."));
        }
    } finally {
        yield put(setLoading(false));
    }
}

export default function* authSaga() {
    yield all([
        yield takeLatest(REQUEST_LOGIN, login),
        yield takeLatest(REQUEST_REGISTER, register),
    ]);
}
