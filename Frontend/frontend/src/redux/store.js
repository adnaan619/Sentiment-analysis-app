import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers can be added here
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
