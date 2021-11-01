import { TypeUserState, User } from '../reducers/types';
export interface Selector {
  getState(state: TypeUserState): TypeUserState;
  getUser(state: TypeUserState): User | null;
  getIsLoggedIn(state: TypeUserState): TypeUserState | boolean;
}
