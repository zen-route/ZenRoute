import {create} from 'zustand';
import {IAuthStore} from '../types/storeT/Auth.type';
import {IStateLocationProp} from '../types/constantT/location.type';

const useAuthStore = create<IAuthStore>(set => ({
  isLoggedIn: false,
  userLocation: null,
  signIn: () => set({isLoggedIn: true}),
  signOut: () => set({isLoggedIn: false}),
  setUserLocation: (location: IStateLocationProp) =>
    set({userLocation: location}),
}));

export default useAuthStore;
