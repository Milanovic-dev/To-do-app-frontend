import { createSelector } from "reselect";

const getLoadingReducer = (state) => state.loaderReducer;

export const loadingSelector = createSelector(
    getLoadingReducer,
    (loaderReducer) => loaderReducer.loading
);
