import { createSelector } from "reselect";
import authReducer from "../reducers/authReducer";

const getAuthReducer = (state) => state.authReducer;

export const authErrorSelector = createSelector(
    getAuthReducer,
    (authReducer) => authReducer.authError
);

export const userSelector = createSelector(
    getAuthReducer,
    (authReducer) => authReducer.user
);
