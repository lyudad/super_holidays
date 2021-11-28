import { TypeUserState, User, UserData } from '../reducers/types';
export interface Selector {
  getState(state: TypeUserState): TypeUserState;
  getUser(state: TypeUserState): User | null;
  getIsLoggedIn(state: TypeUserState): TypeUserState | boolean;
  getUserData(state: UserData): UserData;
}
