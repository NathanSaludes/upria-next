"use client";

import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ButtonProps, buttonVariants } from "./ui/button";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "./ui/navigation-menu";

// Sub-components
const CustomButtonLink = React.forwardRef<
   React.ElementRef<typeof Link>,
   React.ComponentPropsWithoutRef<typeof Link> &
      Pick<ButtonProps, "variant" | "size">
>(({ className, variant, size, children, ...props }, ref) => (
   <Link
      {...props}
      ref={ref}
      className={cn(
         buttonVariants({ variant, size }),
         "min-w-20 rounded-lg text-sm",
         className
      )}
   >
      {children}
   </Link>
));

CustomButtonLink.displayName = "CustomButtonLink";

const CustomMenuLink = React.forwardRef<
   React.ElementRef<typeof Link>,
   React.ComponentPropsWithoutRef<typeof Link>
>(({ className, children, ...props }, ref) => (
   <Link
      {...props}
      ref={ref}
      className={cn(
         "inline-block w-full rounded p-2 px-3 text-sm text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground",
         className
      )}
   >
      {children}
   </Link>
));

CustomMenuLink.displayName = "CustomMenuLink";

type User = {
   uuid: string;
   firstName: string;
   lastName: string;
};

// Main component
type Props = {
   user?: User | null;
};

export const Header: React.FunctionComponent<Props> = () => {
   return (
      <header className="container relative flex justify-center font-sans">
         <div className="container fixed z-50 flex justify-between rounded-b-2xl border border-t-0 bg-white px-4 py-4 shadow-sm">
            <Link
               href="/"
               prefetch={true}
               className="inline-block transition duration-200 hover:brightness-105"
            >
               <Image
                  src="/upria-logo.svg"
                  alt="Upria logo"
                  width={71.09}
                  height={37}
               />
            </Link>
            <NavigationMenu>
               <NavigationMenuList>
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>
                        Buy Real Estate
                     </NavigationMenuTrigger>
                     <NavigationMenuContent>
                        <ul className="flex min-w-[200px] flex-col p-3 pb-2.5">
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    House and Lot
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    Condominiums
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    Apartments
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    Townhouses
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    All For Sale Properties
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                        </ul>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>
                        Rental Properties
                     </NavigationMenuTrigger>
                     <NavigationMenuContent></NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                     <NavigationMenuContent>
                        <ul className="flex min-w-[200px] flex-col p-3 pb-2.5">
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="/components" prefetch>
                                    Developer Docs
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    News & Blog
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    Careers
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    About Us
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                           <li>
                              <NavigationMenuLink asChild>
                                 <CustomMenuLink href="#">
                                    Help Center
                                 </CustomMenuLink>
                              </NavigationMenuLink>
                           </li>
                        </ul>
                     </NavigationMenuContent>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
            <div className="inline-flex gap-0.5">
               <CustomButtonLink href="/login" variant="ghost">
                  <User size={14} className="-ml-1 mr-1.5" />
                  Sign In
               </CustomButtonLink>
               <CustomButtonLink href="/signup">Sign Up</CustomButtonLink>
            </div>
         </div>
      </header>
   );
};
