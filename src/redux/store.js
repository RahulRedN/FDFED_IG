import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobseekerReducer from "./jobseekerReducer";
import jobsReducer from "./jobsReducer";

const rootReducer = combineReducers({
  jobseeker: jobseekerReducer,
  jobs: jobsReducer,
});

// Create Store
export default configureStore({ reducer: rootReducer });
