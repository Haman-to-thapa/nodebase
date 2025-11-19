import { caller } from "./trpc/server"


type Props = {}

const Page = async () => {
  const users = await caller.getUsers()
  return (
    <div className='text-red-500 min-h-screen min-w-screen flex items-center justify-center'>
      {JSON.stringify(users)}
    </div>
  )
}

export default Page