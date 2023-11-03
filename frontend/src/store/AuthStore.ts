import {create} from 'zustand';
import {IAuthStore} from '../types/storeT/Auth.type';

const useAuthStore = create<IAuthStore>(() => ({
  isLoggedIn: false,
}));

export default useAuthStore;
