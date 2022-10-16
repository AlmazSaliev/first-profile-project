import { configureStore } from "@reduxjs/toolkit";
import AllDataApartment from "./slice/AllDataApartment";
import SignUp from "./slice/SignUp";

const store = configureStore({
  reducer: {
    user: SignUp.reducer,
    allapartmnet: AllDataApartment.reducer,
  },
});
export default store;
