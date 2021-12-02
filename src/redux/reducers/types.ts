export type TypeUserRole = 'super' | 'admin' | 'user';

export interface User {
  email: string;
  name: string;
  role: TypeUserRole;
  vacation: number;
  sick_leaves: number;
  id: number;
  isBlocked: boolean;
  dates: TypeUserDates[];
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
  dates: TypeUserDates[];
}

export interface TypeUserDates {
  createdAt: string;
  end_day: string;
  id: number;
  start_day: string;
  status: string;
  type: string;
  updatedAt: string;
  userId: number;
}
