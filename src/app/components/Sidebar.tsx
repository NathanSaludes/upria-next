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

   const getStatusIcon = (status: string) => {
      switch (status) {
         case "experimental":
            return "🧪";
         case "incomplete":
            return "⚠️";
         default:
            return "";
      }
   };

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
                              href={
                                 ["experimental", "stable"].includes(
                                    component.status
                                 )
                                    ? component.route
                                    : `/components/#${component.id}`
                              }
                              key={component.id}
                              className={cn("group block", {
                                 "font-medium text-slate-800":
                                    path === component.route,
                              })}
                           >
                              <span
                                 className={cn("mr-1", {
                                    "group-hover:underline group-hover:underline-offset-2":
                                       ["experimental", "stable"].includes(
                                          component.status
                                       ),
                                 })}
                              >
                                 {component.label}
                              </span>
                              {`${getStatusIcon(component.status)}`}
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
