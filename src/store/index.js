import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducers from "./user/user-reducers";

const rootReducer = combineReducers({
  userReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
