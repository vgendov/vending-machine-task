import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentCredit: '0.00' };

const creditSlice = createSlice({
  name: "credit",
  initialState: initialState,
  reducers: {
    incrementCredit(state, action) {
      state.currentCredit = (parseFloat(state.currentCredit) + action.payload.addedCredit).toFixed(2);
    },
    decrementCredit(state, action) {
        state.currentCredit = (parseFloat(state.currentCredit) - action.payload.addedCredit).toFixed(2);
    },
    resetCredit(state) {
        state.currentCredit = initialState.currentCredit;
    }
  },
});

export const creditActions = creditSlice.actions;

export default creditSlice.reducer;
