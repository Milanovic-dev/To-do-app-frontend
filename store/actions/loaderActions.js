import { SET_LOADING } from "../actionTypes";

const setLoading = (active) => {
    return {
        type: SET_LOADING,
        payload: active,
    };
};

export default setLoading;
