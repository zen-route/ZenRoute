import {IStateLocationProp} from '../constantT/location.type';

export interface IAuthStore {
  isLoggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
  userLocation: IStateLocationProp | null;
  setUserLocation: (location: IStateLocationProp) => void;
}
