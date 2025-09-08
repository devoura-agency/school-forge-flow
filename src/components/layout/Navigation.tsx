import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
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
  Settings,
  X
} from 'lucide-react';

interface NavigationProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Navigation({ activeModule, onModuleChange, isOpen, onClose, className }: NavigationProps) {
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

  const handleModuleClick = (moduleId: string) => {
    onModuleChange(moduleId);
    onClose(); // Close mobile menu after selection
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Navigation Sidebar */}
      <nav 
        className={cn(
          "bg-sidebar border-r border-sidebar-border min-h-screen transition-all duration-300 ease-in-out z-50",
          "lg:static lg:translate-x-0 lg:w-64",
          "fixed left-0 top-0 w-80 transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {/* Mobile Header with Close Button */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="text-lg font-semibold text-sidebar-foreground">Menu</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-2">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule === module.id;
            
            return (
              <Button
                key={module.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                  isActive && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                )}
                onClick={() => handleModuleClick(module.id)}
              >
                <Icon className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="truncate">{module.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>
    </>
  );
}