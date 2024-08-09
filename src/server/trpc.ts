import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

/**
 * Unprotected procedure
 **/
export const router = t.router;
export const publicProcedure = t.procedure;
