export type TypeUserRole = 'super' | 'admin' | 'user';

export interface User {
  id: number;
  email: string;
  name: string;
  role: TypeUserRole;
  isBlocked: boolean;
  vacation: number;
  sick_leaves: number;
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
  dates: TypeUserDates[];
}

export interface TypeUserDates {
  start_day: string;
  end_day: string;
  type: string;
  status: string;
  userId: number;
}

export interface TypeUsersState {
  users: User[];
  createdAt: string;
  end_day: string;
  id: number;
  start_day: string;
  status: string;
  type: string;
  updatedAt: string;
  userId: number;
}

export enum Status {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export enum VacationType {
  SICK_LEAVE = 'sick_leave',
  VACATION = 'vacation',
  OWN_EXPENSE = 'own expense'
}
