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
      if (data?.accessToken) {
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
    console.log(response);
    return response;
  },
  async function (error) {
    console.log(error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      const storagePersist: string | null = await storage.getItem(
        'persist:auth'
      );
      if (storagePersist) {
        const result = JSON.parse(JSON.parse(storagePersist).auth);
        if (result?.refreshToken) {
          console.log(result.refreshToken);
          axiosApiInstance.defaults.headers.common.Authorization =
            'Bearer ' + result.refreshToken;
          originalRequest._retry = true;
          const { data } = await axiosApiInstance.post('auth/refresh');
          await storage.setItem('persist:auth', data);
        }
      }

      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
