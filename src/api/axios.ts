import axios from 'axios';
import storage from 'redux-persist/lib/storage';
import { URL } from 'helpers/constants';

export const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = URL;

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    const storagePersist: string | null = await storage.getItem('persist:auth');
    if (storagePersist) {
      const data = JSON.parse(JSON.parse(storagePersist).auth);
      if (data?.accessToken && config.url !== 'auth/refresh') {
        config.headers = {
          Authorization: `Bearer ${data.accessToken}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        };
      }
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    console.log(error);
    try {
      if (
        error.response.status === 401 &&
        !originalRequest._retry &&
        'http://localhost:8080/auth/refresh'
      ) {
        window.location.href = '?Unauthorized=true';
      }
      if (error.response.status === 401 && !originalRequest._retry) {
        const storagePersist: string | null = await storage.getItem(
          'persist:auth'
        );
        if (storagePersist) {
          const result = JSON.parse(JSON.parse(storagePersist).auth);
          if (result?.refreshToken) {
            originalRequest._retry = true;
            axiosApiInstance.defaults.headers.common.Authorization =
              'Bearer ' + result.refreshToken;

            const response = await axiosApiInstance.post('auth/refresh');
            window.location.href =
              '?accessToken=' +
              response.data.data.accessToken +
              '&refreshToken=' +
              response.data.data.refreshToken +
              '&sid=' +
              response.data.data.sid;
          }
        }
        return await axiosApiInstance(originalRequest);
      }
    } catch (e) {
      console.log(e);
    }

    return Promise.reject(error);
  }
);
