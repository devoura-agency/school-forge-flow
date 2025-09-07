import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { HomePage } from '@/components/home/HomePage';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { LoginForm } from '@/components/auth/LoginForm';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export function Welcome() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header showLoginButton={!user} />
      <div className="container mx-auto px-4 py-8">
        <HomePage />
      </div>
    </div>
  );
}

export default Welcome;