import { combineReducers } from "redux";

import todoReducer from "./reducers/todoReducer";
import loaderReducer from "./reducers/loaderReducer";

export default combineReducers({ todoReducer, loaderReducer });
