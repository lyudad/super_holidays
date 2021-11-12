import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, TypeUserState } from './types';

const initialState: TypeUserState = {
  user: null,
  isLoggedIn: false,
  token: null,
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginFetching: state => {
      state.isLoading = true;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = null;
    }
  }
});

export const { loginFetching, loginSuccess, loginError, logout } =
  userSlice.actions;

export default userSlice.reducer;
