export type UserRole = 'student' | 'teacher' | 'administrator' | 'head_of_institute';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  name: string;
  email?: string;
  // Role-specific data
  studentClass?: string;
  assignedClasses?: string[];
  admissionNumber?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}