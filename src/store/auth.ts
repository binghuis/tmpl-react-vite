import { StorageKeys } from '@/constant/storage';
import { LoginForm } from '@/pages/login';
import { StateCreator, create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface User {
  name: string;
  id: number;
}

type AuthState = {
  token?: string;
  user: User | null;
  login: (params: LoginForm) => Promise<'success' | undefined>;
  logout: () => Promise<'success' | undefined>;
};

const defaultUser = { name: 'test', id: -1 };

const middlewares = (initializer: StateCreator<AuthState>) =>
  devtools(
    persist(initializer, {
      name: StorageKeys.Auth,
      storage: createJSONStorage(() => sessionStorage),
    }),
  );

export const useAuthStore = create<AuthState>()(
  middlewares((set) => ({
    token: '',
    user: defaultUser,
    login: async (params) => {
      // 执行登录
      set({ user: { name: 'admin', id: 1 }, token: '123456' });
      return 'success';
    },
    logout: async () => {
      set({ user: defaultUser });
      return 'success';
    },
  })),
);
