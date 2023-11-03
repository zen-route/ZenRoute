export interface IAuthStore {
  isLoggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
}
