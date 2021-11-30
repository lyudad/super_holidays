export type TypeUserRole = 'super' | 'admin' | 'user';

export interface User {
  email: string;
  name: string;
  role: TypeUserRole;
  vacation: number;
  sick_leaves: number;
}

export type Token = string;

export interface Auth {
  accessToken: string;
  refreshToken: string;
  sid: string;
}
export interface TypeUserState {
  isLoggedIn: boolean;
  user: User | null;
  auth: Auth | null;
  isLoading: boolean;
  error: string | null;
}
