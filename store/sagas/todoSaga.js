import { call, put, takeLatest, all } from "redux-saga/effects";
import { GET_USER_TODOS } from "../actionTypes";
import { saveTodos, setTodoError } from "../actions/todoActions";
import { setLoading } from "../actions/loaderActions";
import TodoService from "../../http/services/todoService";
import { Router } from "../../i18n";

function* fetchTodos({ payload }) {
    try {
        yield put(setLoading(true));
        const data = yield call(TodoService.getTodos, payload);
        yield put(saveTodos(data));
    } catch (error) {
        if (error.response.status === 403) {
            Router.push("/");
        }
        yield put(setTodoError("Failed to fetch todos."));
    } finally {
        yield put(setLoading(false));
    }
}

export default function* authSaga() {
    yield all([yield takeLatest(GET_USER_TODOS, fetchTodos)]);
}
