import Login from '@/components/Login';
import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';
import React from 'react'

export const metadata = {
  title: "Journal - Dashboard",
};

export default function DashboardPage() {

  const isAuthenticated = true

  let children = (
    <Login />
  )

  if (isAuthenticated) {
    children = (
      <Dashboard />
    )
  }
  
  return (
    <Main>
      {children}
    </Main>
  )
}
