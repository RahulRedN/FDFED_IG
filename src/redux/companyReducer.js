import { createSlice } from "@reduxjs/toolkit";

export const companyReducer = createSlice({
  name: "company",
  initialState: {
    data: {},
    jobs: [],
  },
  reducers: {
    setCompanyData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetCompany: (state, action) => {
      return { data: {}, jobs: [] };
    },
  },
});

export const { setCompanyData, resetCompany } = companyReducer.actions;

export default companyReducer.reducer;
