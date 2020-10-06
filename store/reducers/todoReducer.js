import { SAVE_TODOS, TODO_ERROR } from "../actionTypes";

const initialState = { todos: [], todoError: "" };

const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SAVE_TODOS:
            return { ...state, todos: payload };
        case TODO_ERROR:
            return { ...state, todoError: payload };
    }
    return state;
};

export default todoReducer;
