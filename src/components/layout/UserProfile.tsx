import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Mail, User, GraduationCap } from 'lucide-react';

export function UserProfile() {
  const { user } = useAuth();

  if (!user) return null;

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student':
        return 'bg-success text-success-foreground';
      case 'teacher':
        return 'bg-primary text-primary-foreground';
      case 'administrator':
        return 'bg-warning text-warning-foreground';
      case 'head_of_institute':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'student':
        return 'Student';
      case 'teacher':
        return 'Teacher';
      case 'administrator':
        return 'Administrator';
      case 'head_of_institute':
        return 'Head of Institute';
      default:
        return role;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
            {getInitials(user.name)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-bold text-foreground truncate">
              {user.name}
            </h2>
            <Badge className={`${getRoleColor(user.role)} font-medium`}>
              {getRoleLabel(user.role)}
            </Badge>
          </div>
          
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="truncate">{user.email}</span>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <User className="h-4 w-4" />
              <span>ID: {user.username}</span>
            </div>
            
            {user.role === 'student' && user.studentClass && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="h-4 w-4" />
                <span>{user.studentClass}</span>
              </div>
            )}
            
            {user.role === 'teacher' && user.assignedClasses && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="h-4 w-4" />
                <span>Classes: {user.assignedClasses.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}