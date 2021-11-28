import { Selector } from './types';

const selectors: Selector = {
  getState: state => state,
  getUser: state => state.user,
  getIsLoggedIn: state => state.isLoggedIn,
  getUserData: state => state.UserData
};

export default selectors;
