import { createSlice } from "@reduxjs/toolkit";

export const jobseekerReducer = createSlice({
  name: "jobseeker",
  initialState: {
    data: {},
  },
  reducers: {
    setData: (state, action) => {
      return { ...action.payload };
    },
    setFav: (state, action) => {
      return { data: { ...state.data, fav: action.payload } };
    },
    reset: (state, action) => {
      return { data: {} };
    },
  },
});

export const { setData, setFav, reset } = jobseekerReducer.actions;

export default jobseekerReducer.reducer;
