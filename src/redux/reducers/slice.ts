import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, TypeUserState, Auth } from './types';

const initialState: TypeUserState = {
  user: null,
  isLoggedIn: false,
  auth: null,
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRefreshing(state) {
      state.isLoading = true;
    },
    userRefreshSuccess(state, action: PayloadAction<Auth>) {
      state.isLoading = false;
      state.auth = action.payload;
    },
    userRefreshError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.user = null;
      state.auth = null;
      state.error = action.payload;
    },
    onLoginRequest(state) {
      state.isLoading = true;
    },
    onLoginSuccess(state, action: PayloadAction<{ user: User; data: Auth }>) {
      state.user = action.payload.user;
      state.auth = action.payload.data;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    onLoginError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    onLogoutRequest(state) {
      state.isLoading = true;
    },
    onLogoutSuccess(state) {
      state.user = null;
      state.auth = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    onLogoutError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    onCurrentUserRequest(state) {
      state.isLoading = true;
    },
    onCurrentUserSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    onCurrentUserError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export default userSlice.reducer;
