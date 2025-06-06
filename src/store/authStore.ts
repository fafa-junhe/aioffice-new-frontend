import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: {
    email: string;
    name: string;
  } | null;
  setToken: (token: string) => void;
  setUser: (user: { email: string; name: string }) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token });
  },
  setUser: (user) => set({ user }),
  clearAuth: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));
