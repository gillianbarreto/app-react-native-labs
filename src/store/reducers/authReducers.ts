import { createReducer } from "@reduxjs/toolkit";

import { loginAction, logoutAction } from "../actions/authActions";
import { UserStore } from "@interfaces/user.interfaces";

const initialState: UserStore = {
  user: {
    id: "",
    name: "",
    image: "",
    email: "",
  },
  token: "",
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(logoutAction, () => initialState);
});
