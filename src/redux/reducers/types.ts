export type TypeUserRole = 'super' | 'admin' | 'user';

export interface User {
  email: string;
  name: string;
  role: TypeUserRole;
  vacation: number;
  sick_leaves: number;
}

export interface Auth {
  accessToken: string;
  refreshToken: string;
  sid: number;
}
export interface TypeUserState {
  isLoggedIn: boolean;
  user: User | null;
  auth: Auth | null;
  isLoading: boolean;
  error: string | null;
}
