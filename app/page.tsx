import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='text-red-500 min-h-screen min-w-screen flex items-center justify-center'>
      <Button variant='outline'>
        Click me
      </Button>
    </div>
  )
}

export default Page