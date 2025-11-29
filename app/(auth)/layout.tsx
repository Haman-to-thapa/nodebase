import AuthLayout from '@/features/auth/components/auth_layout'
import React from 'react'

type Props = {}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (

    <AuthLayout>
      {children}
    </AuthLayout>


  )
}

export default Layout