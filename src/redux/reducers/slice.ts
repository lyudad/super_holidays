import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, TypeUserState, Auth, TypeUserDates } from './types';
import {
  onLogin,
  onCurrentUser,
  onLogout,
  onGetAllUsers,
  onUpdateUser,
  onCreateBookingFromUser,
  onCurrentBooking,
  onUpdateStatus
} from './action-creators';

const initialState: TypeUserState = {
  user: null,
  isLoggedIn: false,
  auth: null,
  isLoading: false,
  error: null,
  dates: [],
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
    [onCurrentBooking.pending.type]: state => {
      state.isLoading = true;
    },
    [onCurrentBooking.fulfilled.type]: (
      state,
      action: PayloadAction<[TypeUserDates]>
    ) => {
      state.dates = action.payload.reverse();
      state.isLoading = false;
    },
    [onCurrentBooking.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
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
    },
    [onUpdateUser.pending.type]: state => {
      state.isLoading = true;
    },
    [onUpdateUser.fulfilled.type]: state => {
      state.isLoading = false;
    },
    [onUpdateUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    [onCreateBookingFromUser.pending.type]: state => {
      state.isLoading = true;
    },
    [onCreateBookingFromUser.fulfilled.type]: (
      state,
      action: PayloadAction<TypeUserDates>
    ) => {
      state.dates = [action.payload, ...state.dates];
      state.isLoading = false;
    },
    [onCreateBookingFromUser.rejected.type]: state => {
      state.isLoading = false;
    },
    [onGetAllUsers.pending.type]: state => {
      state.isLoading = true;
    },
    [onGetAllUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [onGetAllUsers.rejected.type]: state => {
      state.isLoading = false;
    },
    [onUpdateStatus.pending.type]: state => {
      state.isLoading = true;
    },
    [onUpdateStatus.fulfilled.type]: state => {
      state.isLoading = false;
    },
    [onUpdateStatus.rejected.type]: state => {
      state.isLoading = false;
    }
  }
});

export default userSlice.reducer;
