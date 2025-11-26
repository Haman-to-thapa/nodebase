// 'use client'

// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import { Client } from "./client"
// // import { useQuery } from "@tanstack/react-query";
// // import { useTRPC } from "./trpc/client"
// import { caller, getQueryClient, trpc } from "./trpc/server"
// import { Suspense } from "react";


// type Props = {}

// const Page = async () => {
//   // const users = await caller.getUsers()

//   const queryClient = getQueryClient();

//   void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

//   // const trpc = useTRPC();

//   // const { data: users } = useQuery(trpc.getUsers.queryOptions());
//   return (
//     <div className='text-red-500 min-h-screen min-w-screen flex items-center justify-center'>
//       {/* {JSON.stringify(users)} */}
//       <HydrationBoundary state={dehydrate(queryClient)}>
//         <Suspense fallback={
//           <p>
//             ...loading
//           </p>
//         }>
//           <Client />
//         </Suspense>

//       </HydrationBoundary>

//     </div>
//   )
// }

// export default Page




// import { Button } from '@/components/ui/button'
// import { authClient } from '@/lib/auth-client'
// import { createAuthClient } from 'better-auth/react'
// import React from 'react'

// type Props = {}

// const page = (props: Props) => {

//   const { data } = authClient.useSession()

//   return (
//     <div className='min-h-screen min-w-screen flex items-center justify-center'>
//       {JSON.stringify(data)}
//       {data && (
//         <Button onClick={() => authClient.signOut()}>
//           Logout
//         </Button>
//       )}
//     </div>
//   )
// }

// export default page



import React from 'react'
import { requireAuth } from '@/lib/auth-utils'
import { caller } from './trpc/server';
import { LogoutButton } from './logout';

type Props = {}

const Page = async (props: Props) => {

  await requireAuth();

  const data = await caller.getUsers();



  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      Protected server component
      <div className="">
        {JSON.stringify(data, null, 2)}
      </div>
      <LogoutButton />
    </div>
  )
}

export default Page