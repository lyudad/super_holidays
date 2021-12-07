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
          Accept: 'application/json'
        };
      }
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
