import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { StudentModule } from '@/components/modules/StudentModule';
import { TeacherModule } from '@/components/modules/TeacherModule';
import { AdminModule } from '@/components/modules/AdminModule';
import { HeadModule } from '@/components/modules/HeadModule';

export function Dashboard() {
  const { user } = useAuth();
  const [activeModule, setActiveModule] = useState('');

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
      <div className="flex">
        <div className="w-64 flex-shrink-0">
          <Navigation activeModule={activeModule} onModuleChange={setActiveModule} />
        </div>
        <main className="flex-1 p-6 overflow-x-auto">
          {renderModuleContent()}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;