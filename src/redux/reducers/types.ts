export type TypeUserRole = 'super' | 'admin' | 'employee';

export interface User {
  _id: string;
  name: string;
  role: TypeUserRole;
}
export interface TypeUserState {
  readonly isLoggedIn: boolean;
  readonly user: User | null;
}
