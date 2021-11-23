import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './types';
import { URL } from 'helpers/constants';
import { useSelector } from 'react-redux';
import selectors from 'redux/selectors';

interface LoginUser {
  email: string;
  password: string;
}
interface ResponseUser {
  token: string;
  user: User;
}
interface UserBookingData {
  id: number;
  month: string;
  start_day: number;
  end_day: number;
  type: string;
  status: string;
  userId: number;
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
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log('hello');
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});

// const userState = useSelector(selectors.getState);
// let userAuthToken = userState.token;
const userBookingUrl = 'http://localhost:8080/booking';

export const getUserData = axios.get(userBookingUrl).then(function (response) {
  console.log(response.data);
});

// export const getUserData = createAsyncThunk<
//   ResponseUser,
//   LoginUser,
//   { rejectValue: LoginError }
// >('login/booking', async (user: UserBookingData, thunkAPI) => {
//   try {
//     const response = await axios.get(userBookingUrl);
//     console.log(response.data);
//     return response.data;
//   } catch (e) {
//     console.log('hello');
//     return thunkAPI.rejectWithValue({ message: 'error' });
//   }
// });
