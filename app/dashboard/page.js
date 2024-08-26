import Login from '@/components/Login';
import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import Loading from '@/components/loading';

export const metadata = {
  title: "Journal - Dashboard",
};

export default function DashboardPage() {

  
  return (
    <Main>
      <Dashboard />
    </Main>
  )
}
