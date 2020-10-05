import { REQUEST_LOGIN, AUTH_ERROR } from "../actionTypes";

const initialState = {
    authError: "",
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ERROR:
            return { ...state, authError: action.payload };
        default:
            return state;
    }
};

export default authReducer;
