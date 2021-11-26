import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { onLogin, onCurrentUser } from './action-creators';
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
    [onCurrentUser.pending.type]: state => {
      state.isLoading = true;
    },
    [onCurrentUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [onCurrentUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export default userSlice.reducer;
