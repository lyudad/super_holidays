import { AppDispatch } from '../store';
import axios from 'axios';
import { loginError, loginFetching, loginSuccess } from './slice';
import { User } from './types';

interface LoginUser {
  email: string;
  password: string;
}
interface ResponseUser {
  token: string;
  user: User;
}
axios.defaults.baseURL = 'http://localhost:8080/';
export const onLogin = (user: LoginUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginFetching());
    const response = await axios.post<ResponseUser, any>('auth/login', user);
    console.log(response);

    dispatch(loginSuccess(response.data));
  } catch (e: any) {
    dispatch(loginError(e.message));
  }
};
