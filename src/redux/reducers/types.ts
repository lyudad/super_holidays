export type TypeUserRole = 'super' | 'admin' | 'user';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: TypeUserRole;
  isBlocked: boolean;
  vacation: number;
  sick_leaves: number;
  dates: [TypeUserDates];
}

export interface UserUpdate {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  role?: TypeUserRole;
  isBlocked?: boolean;
  vacation?: number;
  sick_leaves?: number;
  dates?: [TypeUserDates];
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
  users: User[];
}

export interface TypeUserDates {
  start_day: string;
  end_day: string;
  type: string;
  status: string;
  userId: number;
}
