import { REQUEST_LOGIN, REQUEST_REGISTER, AUTH_ERROR } from "../actionTypes";

export const login = (payload) => ({ type: REQUEST_LOGIN, payload });

export const register = (payload) => ({ type: REQUEST_REGISTER, payload });

export const setAuthError = (payload) => ({ type: AUTH_ERROR, payload });
