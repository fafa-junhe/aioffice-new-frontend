import createRefresh from 'axios-auth-refresh';
import axios from './axios';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

const refreshAuthLogic = createRefresh(
  axios,
  async () => {
    try {
      const response = await axios.post('/auth/refresh', {
        refreshToken: localStorage.getItem('refreshToken')
      });
      
      const { token } = response.data;
      useAuthStore.getState().setToken(token);
      return Promise.resolve();
    } catch (error) {
      useAuthStore.getState().clearAuth();
      toast.error('会话已过期，请重新登录');
      window.location.href = '/login';
      return Promise.reject(error);
    }
  },
  {
    statusCodes: [401],
    skipWhileRefreshing: true
  }
);

export default refreshAuthLogic;
