import { REQUEST_LOGIN, REQUEST_REGISTER, AUTH_ERROR } from "../actionTypes";

export const login = (payload) => {
    return { type: REQUEST_LOGIN, payload };
};

export const register = (payload) => {
    return { type: REQUEST_REGISTER, payload };
};

export const setAuthError = (payload) => {
    return { type: AUTH_ERROR, payload };
};
