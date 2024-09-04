"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Info, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const formSchema = z.object({
   email: z.string(),
   password: z.string(),
});

export const LoginForm = () => {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {},
   });
   return (
      <Form {...form}>
         <form className="space-y-3">
            <Alert
               variant="destructive"
               className="flex min-h-12 items-center justify-between gap-4 rounded-md bg-red-100 py-0"
            >
               <div className="flex items-center justify-center gap-4 p-2">
                  <Info size={14} className="flex-shrink-0" />
                  <AlertDescription className="text-left">
                     Invalid email or password, please try again.
                  </AlertDescription>
               </div>
               <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="group inline-flex h-6 w-6 items-center justify-center bg-transparent text-red-500 hover:bg-transparent"
               >
                  <X size={14} className="group-hover:brightness-90" />
               </Button>
            </Alert>
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <div className="space-y-1">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        {...field}
                        type="email"
                        autoComplete="email"
                        className="min-h-11 placeholder:text-slate-400"
                        placeholder="Enter your email"
                     />
                  </div>
               )}
            />
            <FormField
               control={form.control}
               name="password"
               render={({ field }) => (
                  <div className="space-y-1 pb-2">
                     <Label htmlFor="password">Password</Label>
                     <Input
                        {...field}
                        type="password"
                        autoComplete="current-password webauthn"
                        className="min-h-11 text-lg tracking-widest placeholder:text-slate-400"
                        placeholder="••••••••••"
                     />
                  </div>
               )}
            />
            <Button type="submit" className="group relative min-h-11 w-full">
               Sign In
               <ArrowRight
                  size={16}
                  className="absolute right-4 transition-transform duration-150 group-hover:translate-x-1"
               />
            </Button>
         </form>
      </Form>
   );
};
