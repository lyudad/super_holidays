import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './types';
import { URL } from 'helpers/constants';

interface LoginUser {
  email: string;
  password: string;
}
interface ResponseUser {
  token: string;
  user: User;
}
type LoginError = {
  message: string;
};
axios.defaults.baseURL = URL;

export const onLogin = createAsyncThunk<
  ResponseUser,
  LoginUser,
  { rejectValue: LoginError }
>('login/action', async (user: LoginUser, thunkAPI) => {
  try {
    const response = await axios.post<ResponseUser>('auth/login', user);
    return response.data;
  } catch (e) {
    console.log('hello');
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});
