import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { 
  BookOpen, 
  Calendar, 
  CreditCard, 
  Image, 
  Bell, 
  Upload, 
  GraduationCap,
  Users,
  FileText,
  Camera,
  UserCheck,
  Settings
} from 'lucide-react';

interface NavigationProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

export function Navigation({ activeModule, onModuleChange }: NavigationProps) {
  const { user } = useAuth();

  const getModules = () => {
    switch (user?.role) {
      case 'student':
        return [
          { id: 'attendance', label: 'Attendance', icon: Calendar },
          { id: 'scores', label: 'Test Scores', icon: BookOpen },
          { id: 'fees', label: 'Fee Status', icon: CreditCard },
          { id: 'gallery', label: 'Photo Gallery', icon: Image },
          { id: 'notifications', label: 'Notifications', icon: Bell },
        ];
      case 'teacher':
        return [
          { id: 'upload-attendance', label: 'Upload Attendance', icon: Calendar },
          { id: 'upload-scores', label: 'Upload Scores', icon: Upload },
          { id: 'my-classes', label: 'My Classes', icon: GraduationCap },
        ];
      case 'administrator':
        return [
          { id: 'create-student', label: 'Create Student Profile', icon: Users },
          { id: 'create-teacher', label: 'Create Teacher Profile', icon: UserCheck },
          { id: 'upload-photos', label: 'Upload Event Photos', icon: Camera },
          { id: 'upload-circulars', label: 'Upload Circulars', icon: FileText },
        ];
      case 'head_of_institute':
        return [
          { id: 'approvals', label: 'Pending Approvals', icon: UserCheck },
          { id: 'admin-management', label: 'Admin Management', icon: Settings },
          { id: 'overview', label: 'System Overview', icon: BookOpen },
        ];
      default:
        return [];
    }
  };

  const modules = getModules();

  return (
    <nav className="bg-card border-r border-border w-64 min-h-screen p-4">
      <div className="space-y-2">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Button
              key={module.id}
              variant={activeModule === module.id ? 'professional' : 'ghost'}
              className="w-full justify-start"
              onClick={() => onModuleChange(module.id)}
            >
              <Icon className="w-4 h-4 mr-2" />
              {module.label}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}