import { GET_USER_TODOS, SAVE_TODOS, TODO_ERROR } from "../actionTypes";

export const getTodos = (payload) => ({ type: GET_USER_TODOS, payload });

export const saveTodos = (payload) => ({ type: SAVE_TODOS, payload });

export const setTodoError = (payload) => ({ type: TODO_ERROR, payload });
