import { axiosApiInstance } from '../../api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, Auth } from './types';

interface LoginUser {
  email: string;
  password: string;
}
interface ResponseUser {
  data: Auth;
  user: User;
}
type Error = {
  message: string;
};

export const onLogin = createAsyncThunk<
  ResponseUser,
  LoginUser,
  { rejectValue: Error }
>('login/action', async (user: LoginUser, thunkAPI) => {
  try {
    const response = await axiosApiInstance.post<ResponseUser>(
      'auth/login',
      user
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});
export const onLogout = createAsyncThunk<{ rejectValue: Error }>(
  'logout/action',
  async (_, thunkAPI) => {
    try {
      const response = await axiosApiInstance.post('auth/logout');
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue({ message: 'error' });
    }
  }
);
export const onRefresh = createAsyncThunk<{ rejectValue: Error }>(
  'refresh/action',
  async (_, thunkAPI) => {
    try {
      const response = await axiosApiInstance.post('auth/refresh');
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue({ message: 'error' });
    }
  }
);

interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: string;
}
type TokenValue = string;

export const onCurrentUser = createAsyncThunk<
  CurrentUser,
  TokenValue,
  { rejectValue: Error }
>('getCurrentUser/action', async (token: TokenValue, thunkAPI) => {
  try {
    const { data } = await axiosApiInstance.get<CurrentUser>('users/current');
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});
