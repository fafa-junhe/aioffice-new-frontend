import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import refreshAuthLogic from './refresh';
import type { AxiosInstance } from 'axios';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

const instance = setupCache(axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
}));

// 请求拦截器
instance.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截器
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().clearAuth();
      toast.error('登录已过期，请重新登录');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// 自动刷新token已通过refresh.ts配置

export default instance;
