import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, TypeUserState } from './types';

const initialState: TypeUserState = {
  user: { _id: 'lskjvnslv', name: 'User', role: 'employee' },
  isLoggedIn: true
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    signOut: state => {
      state.user = null;
      state.isLoggedIn = false;
    }
  }
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
