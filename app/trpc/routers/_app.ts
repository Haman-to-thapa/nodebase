
import { inngest } from '@/app/inngest/client';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { email } from 'zod';
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ctx}) => {
    console.log({userId:ctx.auth.user.id})

    return prisma.workflow.findMany()
  }),

  createWorkflow: protectedProcedure.mutation( async () => {

    await inngest.send({
      name:"test/hello.world",
      data:{
        email:"haman@gmail.com"
      }
    });

    // return prisma.workflow.create({
    //   data:{
    //     name:"test-workflow"
    //   }
    // })
    
    return {success:true, message:"Job queued"}
  
  })

   
});
// export type definition of API
export type AppRouter = typeof appRouter;