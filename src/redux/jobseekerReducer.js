import { createSlice } from "@reduxjs/toolkit";

export const jobseekerReducer = createSlice({
  name: "jobseeker",
  initialState: {
    data: {},
    jobs: [],
  },
  reducers: {
    setData: (state, action) => {
      return { ...action.payload };
    },
    setFav: (state, action) => {
      return { ...state,  data: { ...state.data, fav: action.payload } };
    },
    reset: (state, action) => {
      return { data: {}, jobs: [] };
    },
  },
});

export const { setData, setFav, reset } = jobseekerReducer.actions;

export default jobseekerReducer.reducer;
