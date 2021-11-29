import { userSlice } from './slice';
import { AppDispatch } from './../store';
import { axiosApiInstance } from '../../api/axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, Auth } from './types';

interface LoginUser {
  email: string;
  password: string;
}
interface ResponseUser {
  data: Auth;
  user: User;
}
// type Error = {
//   message: string;
// };

// eslint-disable-next-line
export const onRefresh = (data: Auth) => async (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.userRefreshing);
  try {
    await dispatch(userSlice.actions.userRefreshSuccess(data));
  } catch (e) {
    dispatch(userSlice.actions.userRefreshError('error refresh'));
    console.log(e);
  }
};
// eslint-disable-next-line
export const onLogin = (user: LoginUser) => async (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.onLoginRequest);
  try {
    const response = await axiosApiInstance.post<ResponseUser>(
      'auth/login',
      user
    );
    dispatch(userSlice.actions.onLoginSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.onLoginError('login error'));
    console.log(e);
  }
};
// eslint-disable-next-line
export const onLogout = () => async (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.onLogoutRequest);
  try {
    await axiosApiInstance.post('auth/logout');
    dispatch(userSlice.actions.onLogoutSuccess);
  } catch (e) {
    dispatch(userSlice.actions.onLogoutError('logout error'));
    console.log(e);
  }
};
// export const onLogin = createAsyncThunk<
//   ResponseUser,
//   LoginUser,
//   { rejectValue: Error }
// >('login/action', async (user: LoginUser, thunkAPI) => {
//   try {
//     const response = await axiosApiInstance.post<ResponseUser>(
//       'auth/login',
//       user
//     );
//     return response.data;
//   } catch (e) {
//     console.log(e);
//     return thunkAPI.rejectWithValue({ message: 'error' });
//   }
// });
// export const onLogout = createAsyncThunk<{ rejectValue: Error }>(
//   'logout/action',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axiosApiInstance.post('auth/logout');
//       return response.data;
//     } catch (e) {
//       console.log(e);
//       return thunkAPI.rejectWithValue({ message: 'error' });
//     }
//   }
// );

// export const onCurrentUser = createAsyncThunk<
//   CurrentUser,
//   TokenValue,
//   { rejectValue: Error }
// >('getCurrentUser/action', async (token: TokenValue, thunkAPI) => {
//   try {
//     const { data } = await axiosApiInstance.get<CurrentUser>('users/current');
//     return data;
//   } catch (e) {
//     console.log(e);
//     return thunkAPI.rejectWithValue({ message: 'error' });
//   }
// });
// eslint-disable-next-line
export const onCurrentUser = () => async (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.onCurrentUserRequest);
  try {
    const response = await axiosApiInstance.get<User>('users/current');
    dispatch(userSlice.actions.onCurrentUserSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.onCurrentUserError('current user error'));
    console.log(e);
  }
};
