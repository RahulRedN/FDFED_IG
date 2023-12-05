import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobseekerReducer from "./jobseekerReducer";

const rootReducer = combineReducers({
  jobseeker: jobseekerReducer,
});

// Create Store
export default configureStore({ reducer: rootReducer });
