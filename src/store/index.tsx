import { configureStore } from "@reduxjs/toolkit";
import creditSlice from "./credit-slice";
import infoSlice from "./info-slice";

const store = configureStore({
  reducer: { credit: creditSlice, info: infoSlice },
});

export default store;
