import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { UserProfile } from '@/components/layout/UserProfile';
import { StudentModule } from '@/components/modules/StudentModule';
import { TeacherModule } from '@/components/modules/TeacherModule';
import { AdminModule } from '@/components/modules/AdminModule';
import { HeadModule } from '@/components/modules/HeadModule';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();
  const [activeModule, setActiveModule] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Set default module based on user role
  React.useEffect(() => {
    if (user?.role && !activeModule) {
      switch (user.role) {
        case 'student':
          setActiveModule('attendance');
          break;
        case 'teacher':
          setActiveModule('upload-attendance');
          break;
        case 'administrator':
          setActiveModule('create-student');
          break;
        case 'head_of_institute':
          setActiveModule('approvals');
          break;
        default:
          setActiveModule('');
      }
    }
  }, [user?.role, activeModule]);

  const renderModuleContent = () => {
    switch (user?.role) {
      case 'student':
        return <StudentModule activeSubModule={activeModule} />;
      case 'teacher':
        return <TeacherModule activeSubModule={activeModule} />;
      case 'administrator':
        return <AdminModule activeSubModule={activeModule} />;
      case 'head_of_institute':
        return <HeadModule activeSubModule={activeModule} />;
      default:
        return (
          <div className="flex items-center justify-center h-64 text-muted-foreground">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Welcome to EduManage</h2>
              <p>Please contact your administrator for access.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Mobile Hamburger Button */}
        <div className="lg:hidden fixed top-20 left-4 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="bg-background shadow-md"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Sidebar Navigation */}
        <div className="hidden lg:block lg:w-64 flex-shrink-0">
          <Navigation 
            activeModule={activeModule} 
            onModuleChange={setActiveModule}
            isOpen={true}
            onClose={() => {}}
          />
        </div>

        {/* Mobile Navigation */}
        <Navigation 
          activeModule={activeModule} 
          onModuleChange={setActiveModule}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          className="lg:hidden"
        />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* User Profile Section */}
          <UserProfile />
          
          {/* Module Content */}
          <div className="flex-1 p-6 overflow-auto">
            {renderModuleContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;