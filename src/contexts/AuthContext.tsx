import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, AuthContextType } from '@/types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration - replace with Supabase integration
const mockUsers: Record<string, { password: string; user: User }> = {
  'STU001': {
    password: 'student123',
    user: {
      id: '1',
      username: 'STU001',
      role: 'student',
      name: 'John Doe',
      email: 'john.doe@school.edu',
      admissionNumber: 'STU001',
      studentClass: 'Grade 10-A'
    }
  },
  'TCH001': {
    password: 'teacher123',
    user: {
      id: '2',
      username: 'TCH001',
      role: 'teacher',
      name: 'Ms. Sarah Wilson',
      email: 'sarah.wilson@school.edu',
      assignedClasses: ['Grade 10-A', 'Grade 10-B']
    }
  },
  'ADM001': {
    password: 'admin123',
    user: {
      id: '3',
      username: 'ADM001',
      role: 'administrator',
      name: 'Mr. David Brown',
      email: 'david.brown@school.edu'
    }
  },
  'HEAD001': {
    password: 'head123',
    user: {
      id: '4',
      username: 'HEAD001',
      role: 'head_of_institute',
      name: 'Dr. Emily Johnson',
      email: 'emily.johnson@school.edu'
    }
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('schoolUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userRecord = mockUsers[username];
    if (userRecord && userRecord.password === password) {
      setUser(userRecord.user);
      localStorage.setItem('schoolUser', JSON.stringify(userRecord.user));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('schoolUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}