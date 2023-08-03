import { LoginForm } from '@/pages/login';
import { createBrowserHistory } from 'history';
import { StateCreator, create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
interface User {
  name: string;
  id: number;
  avatar?: string;
}

type State = {
  token?: string;
  user: User | null;
  login: (params: LoginForm) => Promise<'success' | undefined>;
  logout: () => Promise<'success' | undefined>;
};

const defaultUser: User = { name: '', id: -1 };
const history = createBrowserHistory();
const middlewares = (initializer: StateCreator<State>) =>
  devtools(
    persist(initializer, {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage),
    }),
  );

export const useAuthStore = create<State>()(
  middlewares((set) => ({
    token: '',
    user: defaultUser,
    login: async (params) => {
      // 执行登录
      set({ user: { name: 'binghuis', id: 9102 }, token: `${Date.now()}` });
      return 'success';
    },
    logout: async () => {
      set({ user: defaultUser, token: '' });
      history.push('/');
      return 'success';
    },
  })),
);
