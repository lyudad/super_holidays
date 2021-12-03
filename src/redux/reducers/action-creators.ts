import { axiosApiInstance } from 'api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, Auth, Token, UserUpdate } from './types';

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

export const onCurrentUser = createAsyncThunk<
  User,
  Token,
  { rejectValue: Error }
>('getCurrentUser/action', async (token: Token, thunkAPI) => {
  try {
    const { data } = await axiosApiInstance.get<User>('users/current');
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});

export const onGetAllUsers = createAsyncThunk<
  User[],
  Token,
  { rejectValue: Error }
>('getAllUsers/action', async (token: Token, thunkAPI) => {
  try {
    const { data } = await axiosApiInstance.get<User[]>('users');
    // console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});

export const onUpdateUser = createAsyncThunk<
  User,
  UserUpdate,
  { rejectValue: Error }
>('update/action', async (user: UserUpdate, thunkAPI) => {
  console.log('отправили', user);
  const { id } = user;
  try {
    const { data } = await axiosApiInstance.patch<User>(`users/${id}`, user);
    console.log('приняли', data);
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});
