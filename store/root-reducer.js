import { combineReducers } from "redux";

import todoReducer from "./reducers/todoReducer";
import loaderReducer from "./reducers/loaderReducer";
import authReducer from "./reducers/authReducer";

export default combineReducers({ todoReducer, loaderReducer, authReducer });
