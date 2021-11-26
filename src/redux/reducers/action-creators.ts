import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, Auth } from './types';
import { URL } from 'helpers/constants';

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
axios.defaults.baseURL = URL;

export const onLogin = createAsyncThunk<
  ResponseUser,
  LoginUser,
  { rejectValue: Error }
>('login/action', async (user: LoginUser, thunkAPI) => {
  try {
    const response = await axios.post<ResponseUser>('auth/login', user);
    return response.data;
  } catch (e) {
    console.log('hello');
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});

interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: string;
}
type TOkenValue = string;

export const onCurrentUser = createAsyncThunk<
  CurrentUser,
  TOkenValue,
  { rejectValue: Error }
>('getCurrentUser/action', async (token: TOkenValue, thunkAPI) => {
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const { data } = await axios.get<CurrentUser>('users/current');
    console.log(data);
    return data;
  } catch (e) {
    console.log('hello');
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});
