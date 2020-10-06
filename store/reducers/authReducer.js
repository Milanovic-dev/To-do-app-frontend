import {
    REQUEST_LOGIN,
    AUTH_ERROR,
    SAVE_USER,
    DELETE_USER,
} from "../actionTypes";

const initialState = {
    user: null,
    authError: "",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ERROR:
            return { ...state, authError: action.payload };
        case SAVE_USER:
            return { ...state, user: action.payload };
        case DELETE_USER:
            state = initialState;
        default:
            return state;
    }
};

export default authReducer;
