import { all } from "redux-saga/effects";
import authSaga from "./sagas/authSaga";
import todoSaga from "./sagas/todoSaga";

export default function* rootSaga() {
    yield all([authSaga(), todoSaga()]);
}
