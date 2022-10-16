import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("registration")) || {
    name: "",
    password: "",
    isAutentificated: false,
  },
};

const SignUp = createSlice({
  name: "signup",
  initialState,
  reducers: {
    Signup: (state, action) => {
      if (
        action.payload.name === "dyikan@gmail.com" &&
        action.payload.password === "123456"
      ) {
        state.user.isAutentificated = true;
        localStorage.setItem(
          "registration",
          JSON.stringify({
            name: action.payload.name,
            password: action.payload.password,
            isAutentificated: true,
          })
        );
        return;
      }
      state.isAutentificated = false;
    },
    Logout: (state) => {
      state.user.isAutentificated = false;
      state.user.name = "";
      state.user.password = "";
    },
  },
});
export const SignupEnter = SignUp.actions;
export default SignUp;
