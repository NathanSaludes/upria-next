"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { components } from "./components.map";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
   const path = usePathname();

   return (
      <Suspense fallback={"Loading..."}>
         <aside>
            <ScrollArea className="h-[90dvh] pr-6 text-sm">
               <div className="my-4 space-y-1">
                  <p className="text-md font-semibold text-slate-800">
                     Getting Started
                  </p>
                  <Link
                     href="/components"
                     className="block hover:underline hover:underline-offset-2"
                  >
                     Introduction
                  </Link>
               </div>
               <Separator />
               {components.map((category) => (
                  <div key={category.id}>
                     <div className="my-4 space-y-1">
                        <p className="text-md font-semibold text-slate-800">
                           {category.label}
                        </p>
                        {category.components.map((component) => (
                           <Link
                              href={component.route}
                              key={component.id}
                              className={cn(
                                 "block hover:underline hover:underline-offset-2",
                                 {
                                    "font-medium text-slate-800":
                                       path === component.route,
                                 }
                              )}
                           >
                              {component.label}
                           </Link>
                        ))}
                     </div>
                     <Separator />
                  </div>
               ))}
            </ScrollArea>
         </aside>
      </Suspense>
   );
};
