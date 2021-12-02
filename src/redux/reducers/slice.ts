import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, TypeUserState, Auth } from './types';
import {
  onLogin,
  onCurrentUser,
  onLogout,
  onGetAllUsers
} from './action-creators';

const initialState: TypeUserState = {
  user: null,
  isLoggedIn: false,
  auth: null,
  isLoading: false,
  error: null,
  users: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [onLogin.pending.type]: state => {
      state.isLoading = true;
    },
    [onLogin.fulfilled.type]: (
      state,
      action: PayloadAction<{ user: User; data: Auth }>
    ) => {
      state.user = action.payload.user;
      state.auth = action.payload.data;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [onLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [onLogout.pending.type]: state => {
      state.isLoading = true;
    },
    [onLogout.fulfilled.type]: state => {
      state.user = null;
      state.auth = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [onLogout.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [onCurrentUser.pending.type]: state => {
      state.isLoading = false;
    },
    [onCurrentUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [onCurrentUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [onGetAllUsers.pending.type]: state => {
      state.isLoading = false;
    },
    [onGetAllUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    [onGetAllUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export default userSlice.reducer;
