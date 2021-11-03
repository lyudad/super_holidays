import { User } from '../redux/reducers/types';

interface AccessUser {
  admin: string;
  superAdmin: string;
  employee: string;
  login: string;
}

export const accessUser: AccessUser = {
  admin: 'admin',
  superAdmin: 'super',
  employee: 'employee',
  login: '/'
};

export function getUserAccess(user: User | null): string {
  if (!user) {
    return accessUser.login;
  }
  switch (user.role) {
    case accessUser.admin:
      return accessUser.admin;
    case accessUser.superAdmin:
      return accessUser.admin;
    case accessUser.employee:
      return accessUser.employee;
    default:
      return accessUser.login;
  }
}
