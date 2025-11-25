// 'use client'

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client"
// import { useQuery } from "@tanstack/react-query";
// import { useTRPC } from "./trpc/client"
import { caller, getQueryClient, trpc } from "./trpc/server"
import { Suspense } from "react";


type Props = {}

const Page = async () => {
  // const users = await caller.getUsers()

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

  // const trpc = useTRPC();

  // const { data: users } = useQuery(trpc.getUsers.queryOptions());
  return (
    <div className='text-red-500 min-h-screen min-w-screen flex items-center justify-center'>
      {/* {JSON.stringify(users)} */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={
          <p>
            ...loading
          </p>
        }>
          <Client />
        </Suspense>

      </HydrationBoundary>

    </div>
  )
}

export default Page