"use client";

import { trpc } from "@/lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { ReactNode, useState } from "react";

export function TRPCProvider({ children }: { children?: ReactNode }) {
   const [queryClient] = useState(() => new QueryClient());
   const [trpcClient] = useState(() =>
      trpc.createClient({
         links: [
            httpBatchLink({
               url: "http://localhost:3000/trpc",

               // You can pass any HTTP headers you wish here
               // async headers() {
               // 	return {
               // 		authorization: getAuthCookie()
               // 	}
               // }
            }),
         ],
      })
   );

   return (
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
         <QueryClientProvider client={queryClient}>
            {children}
         </QueryClientProvider>
      </trpc.Provider>
   );
}
