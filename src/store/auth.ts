import { StorageKeys } from '@/constant/storage';
import { StateCreator, create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface State {
  token: string;
  user: Partial<User>;
}

interface User {
  name: string;
  id: number;
}

const middlewares = (initializer: StateCreator<State>) =>
  devtools(
    persist(initializer, {
      name: StorageKeys.Auth,
      storage: createJSONStorage(() => sessionStorage),
    }),
  );

export const useAuthStore = create<State>()(
  middlewares(() => ({
    token: '',
    user: { name: 'test', id: -1 },
  })),
);

export const setToken = (token: string) => useAuthStore.setState({ token });

export const setUser = (user: Partial<User>) => useAuthStore.setState({ user });
