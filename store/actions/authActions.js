import {
    REQUEST_LOGIN,
    REQUEST_REGISTER,
    AUTH_ERROR,
    SAVE_USER,
    GET_USER,
    DELETE_USER,
    LOGOUT,
} from "../actionTypes";

export const login = (payload) => ({ type: REQUEST_LOGIN, payload });
export const register = (payload) => ({ type: REQUEST_REGISTER, payload });
export const logout = () => ({ type: LOGOUT });
export const setAuthError = (payload) => ({ type: AUTH_ERROR, payload });
export const getUser = (payload) => ({ type: GET_USER, payload });
export const saveUser = (payload) => ({ type: SAVE_USER, payload });
export const deleteUser = () => ({ type: DELETE_USER });
