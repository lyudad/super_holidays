import id from "date-fns/locale/id";

export type TypeUserRole = 'super' | 'admin' | 'user';

export interface User {
  email: string;
  name: string;
  role: TypeUserRole;
  vacation: number;
  sick_leaves: number;
  id: number;
}
export interface TypeUserState {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  total_sick_leaves: number;
  total_vacations: number;
  isBlocked: boolean;
  roles: string;
  createdAt: string;
  updatedAt: string;
  dates: [];
}