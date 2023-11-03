import {create} from 'zustand';
import {IAuthStore} from '../types/storeT/Auth.type';

const useAuthStore = create<IAuthStore>(set => ({
  isLoggedIn: false,
  signIn: () => set({isLoggedIn: true}),
  signOut: () => set({isLoggedIn: false}),
}));

export default useAuthStore;
