import Login from '@/components/Login';
import Main from '@/components/Main';
import React from 'react'

export const metadata = {
  title: "Journal - Dashboard",
};

export default function Dashboard() {

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
