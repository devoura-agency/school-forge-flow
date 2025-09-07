import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/layout/Header';
import { Navigation } from '@/components/layout/Navigation';
import { HomePage } from '@/components/home/HomePage';
import { StudentModule } from '@/components/modules/StudentModule';
import { TeacherModule } from '@/components/modules/TeacherModule';

export function Dashboard() {
  const { user } = useAuth();
  const [activeModule, setActiveModule] = useState('home');

  const renderModuleContent = () => {
    if (activeModule === 'home') {
      return <HomePage />;
    }

    switch (user?.role) {
      case 'student':
        return <StudentModule activeSubModule={activeModule} />;
      case 'teacher':
        return <TeacherModule activeSubModule={activeModule} />;
      case 'administrator':
        return <div className="flex items-center justify-center h-64 text-muted-foreground">Administrator module coming soon...</div>;
      case 'head_of_institute':
        return <div className="flex items-center justify-center h-64 text-muted-foreground">Head of Institute module coming soon...</div>;
      default:
        return <HomePage />;
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