import { createSlice } from "@reduxjs/toolkit";

export const jobsReducer = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
  },
  reducers: {
    setJobs: (state, action) => {
      return { jobs: action.payload };
    },
    resetJobs: (state, action) => {
      return { jobs: [] };
    },
  },
});

export const { setJobs, resetJobs } = jobsReducer.actions;

export default jobsReducer.reducer;
