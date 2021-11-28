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

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Iml2YW5vdkBnbWFpbC5jb20iLCJpZCI6MSwicm9sZXMiOiJ1c2VyIiwiaWF0IjoxNjM4MTMxMDU5LCJleHAiOjE2MzgyMTc0NTl9.g3lQ5L8mP7ajOpdzk_mJTVkEo5qrh-kWrKOuxZ9sldg';
const getUserUrl = 'http://localhost:8080/users';
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const getUserData = createAsyncThunk('data/getUserData', async () => {
  try {
    const userData = await axios
      .get(getUserUrl)
      .then(responce => responce.data);
    console.log(userData);
    return userData;
  } catch (error) {
    console.log('no user data');
  }
});
