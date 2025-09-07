import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Welcome } from '@/pages/Welcome';
import { Dashboard } from '@/pages/Dashboard';

const Index = () => {
  const { user } = useAuth();

  if (!user) {
    return <Welcome />;
  }

  return <Dashboard />;
};

export default Index;
