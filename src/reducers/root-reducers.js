import LoginReducer from "./login-reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: LoginReducer,
});

export default rootReducer;