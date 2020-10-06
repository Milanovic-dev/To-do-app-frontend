import { createSelector } from "reselect";
import { getTodos } from "../actions/todoActions";

const getTodoReducer = (state) => state.todoReducer;

export const todoSelector = createSelector(
    getTodoReducer,
    (todoReducer) => todoReducer.todos
);

export const todoErrorSelector = createSelector(
    getTodoReducer,
    (todoReducer) => todoReducer.todoError
);
