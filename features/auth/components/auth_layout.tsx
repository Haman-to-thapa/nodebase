import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted items-center flex min-h-svh min-w-screen flex-col justify-center gap-6 md:p-10">
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Link
          href='/'
          className='flex items-center gap-2 self-center font-medium'
        >

          <Image
            src='/logos/logo.svg'
            alt='Nodebase'
            width={30}
            height={30}
          />
          Nodebase
        </Link>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout