import { createSlice } from "@reduxjs/toolkit";

const initialState = { message: 'Please, insert coins.' };

const infoSlice = createSlice({
  name: "info",
  initialState: initialState,
  reducers: {
    selectItem(state){
      state.message = 'Please, select item.';
    },
    notEnoughCredit(state) {
      state.message = 'Not enough credit!';
    },
    resetInfo(state) {
        state.message = initialState.message;
    }
  },
});

export const infoActions = infoSlice.actions;

export default infoSlice.reducer;
