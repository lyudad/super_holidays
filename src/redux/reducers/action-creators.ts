import { axiosApiInstance } from 'api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, Auth, Token, TypeUserDates } from './types';

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
export const onCurrentBooking = createAsyncThunk<
  [TypeUserDates],
  Token,
  { rejectValue: Error }
>('getBooking/action', async (token: Token, thunkAPI) => {
  try {
    const data = await axiosApiInstance.get<[TypeUserDates]>('booking');
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});

// enum TypeBooking {
//   'sick leave',
//   'vacation',
//   'own expense'
// }
// enum StatusBooking {
//   'pending',
//   'approved',
//   'rejected'
// }

interface OnSubmit {
  start_day: string;
  end_day: string;
  type: string;
  status: string;
  userId: number | null;
}

export const onCreateBookingFromUser = createAsyncThunk<
  TypeUserDates,
  OnSubmit,
  { rejectValue: Error }
>('createBooking/action', async (user: OnSubmit, thunkAPI) => {
  try {
    const { data } = await axiosApiInstance.post<TypeUserDates>(
      'booking',
      user
    );
    return data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue({ message: 'error' });
  }
});
