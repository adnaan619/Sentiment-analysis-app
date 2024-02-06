import { combineReducers } from "@reduxjs/toolkit";
import sentimentReducer from "./submitReviewReducer";

const rootReducer = combineReducers({
    sentimentReducer,
});

export default rootReducer;