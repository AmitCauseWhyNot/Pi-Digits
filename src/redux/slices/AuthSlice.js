import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loggedIn: localStorage.getItem("logged_in"),
  username: localStorage.getItem("user_name"),
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
      localStorage.setItem("user_id", null);
    },
  },
});

export const { doLogin, doLogout } = authSlice.actions;

export default authSlice.reducer;
