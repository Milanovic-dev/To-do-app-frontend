import { createSelector } from "reselect";

const getAuthReducer = (state) => state.authReducer;

export const authErrorSelector = createSelector(
    getAuthReducer,
    (authReducer) => authReducer.authError
);
