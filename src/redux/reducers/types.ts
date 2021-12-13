export type TypeUserRole = 'super' | 'admin' | 'user';

export interface User {
  email: string;
  role: TypeUserRole;
  vacation: number;
  sick_leaves: number;
  id: number;
  isBlocked: boolean;
  dates: TypeUserDates[];
  first_name: string;
  last_name: string;
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
  users: User[];
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

export interface TypeUserDates {
  start_day: string;
  end_day: string;
  type: string;
  status: string;
  userId: number;
}
