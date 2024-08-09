import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  helloWorld: publicProcedure.query(async () => "Hello, World from TRPC")
});

export type AppRouter = typeof appRouter;
