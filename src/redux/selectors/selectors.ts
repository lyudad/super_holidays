import { Selector } from './types';

const selectors: Selector = {
  getState: state => state,
  getUser: state => state.user,
  getIsLoggedIn: state => state.isLoggedIn,
  getAllUsers: state => state.users
};

export default selectors;
