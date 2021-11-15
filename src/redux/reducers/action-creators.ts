// import { AppDispatch } from '../store';
import axios from 'axios';
// import { loginError, loginFetching, loginSuccess } from './slice';
import { User } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
axios.defaults.baseURL = 'http://localhost:8080/';
// export const onLogin = (user: LoginUser) => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(loginFetching());
//     const response = await axios.post<ResponseUser>('auth/login', user);
//     dispatch(loginSuccess(response.data));
//   } catch (e: any) {
//     dispatch(loginError(e.message));
//   }
// };
// console.log(process.env.URL);

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
