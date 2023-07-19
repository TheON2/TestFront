import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum LocalStorageKey {
  Token = "token",
}

export interface UserState {
  user: {
    email: string | null;
    nickName: string | null;
    isLogged: boolean;
    token: string | null | undefined;
    logInLoading: boolean;
    logInDone: boolean;
    logInError: boolean;
  };
}

export interface UserResponse {
  email: string | null,
  nickname:string|null
}

const initialState: UserState = {
  user: {
    email: null,
    nickName: null,
    isLogged: false,
    token: null,
    logInLoading: false,
    logInDone: false,
    logInError: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGIN_USER: (state: UserState, action: PayloadAction<UserResponse>) => {
      state.user.email = action.payload.email;
      state.user.nickName = action.payload.nickname;
      //state.user.token = action.payload.token;
      //localStorage.setItem(LocalStorageKey.Token, action.payload.token);
      state.user.isLogged = true;
    },
    LOGOUT_USER: (state: UserState) => {
      state.user.email = null;
      state.user.token = null;
      state.user.isLogged = false;
      state.user.nickName = null;
      //localStorage.removeItem(LocalStorageKey.Token);
    },
    AUTH_USER: (state: UserState, action: PayloadAction<UserResponse>) => {
      state.user.email = action.payload.email;
      state.user.nickName = action.payload.nickname;
      state.user.isLogged = true;
    },
    UNAUTH_USER: (state: UserState) => {
      state.user.email = null;
      state.user.isLogged = false;
      state.user.nickName = null;
      state.user.token = undefined;
      //localStorage.removeItem(LocalStorageKey.Token);
    },
  },
});

export const { LOGIN_USER, LOGOUT_USER, AUTH_USER, UNAUTH_USER } =
  userSlice.actions;

export default userSlice.reducer;
