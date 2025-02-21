import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loggedIn: localStorage.getItem("logged_in") === "true" ? true : false,
  username: localStorage.getItem("username"),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    doLogin(state, action) {
      const username = action.payload.username;
      state.loggedIn = true;
      localStorage.setItem("logged_in", true);
      localStorage.setItem("username", username);
    },
    doLogout(state) {
      state.loggedIn = false;
      localStorage.setItem("logged_in", false);
      localStorage.setItem("username", null);
    },
  },
});

export const { doLogin, doLogout } = authSlice.actions;

export default authSlice.reducer;
