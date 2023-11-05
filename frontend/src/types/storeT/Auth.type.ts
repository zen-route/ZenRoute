import {IStateLocationProp} from '../constantT/location.type';

export interface IAuthStore {
  isLoggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
  userLocation: IStateLocationProp | null;
  setUserLocation: (location: IStateLocationProp) => void;
  paths: any;
  setPaths: (path: any) => void;
  source: string;
  setSource: (source: string) => void;
  destination: string;
  setDestination: (destination: string) => void;
}
