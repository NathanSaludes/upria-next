import { LoginForm } from "@/components/Forms/LoginForm";
import { SingleSignOnButton } from "@/components/SingleSignOnButton";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import AppleIcon from "@public/icon_apple.svg";
import FacebookIcon from "@public/icon_facebook.svg";
import GoogleIcon from "@public/icon_google.svg";
import { X } from "lucide-react";
import Link from "next/link";

export default function Login() {
   return (
      <>
         <main className="h-dvh bg-[url('/hero-image.avif')] bg-cover bg-no-repeat pt-14">
            <div className="container grid min-h-[800px] max-w-[1366px] grid-cols-[1.6fr_1fr] gap-4 rounded-3xl bg-white p-4 shadow-lg">
               {/* Left Container */}
               <div className="flex rounded-xl">
                  <div className="flex flex-col overflow-hidden rounded-xl bg-[url('/sample-property.jpg')] bg-cover bg-no-repeat">
                     <p className="m-9 mb-auto block text-lg font-medium tracking-tight text-white">
                        &lt;insert logo&gt;
                     </p>
                     <div className="mt-auto flex h-full flex-col justify-end space-y-3 bg-gradient-to-t from-black/50 from-30% to-transparent p-9">
                        <p className="text-lg font-medium leading-8 tracking-tight text-white">
                           “It transformed my overwhelming first-time homebuying
                           experience into an enjoyable and stress-free journey,
                           helping me find my dream home in just a few weeks!”
                        </p>
                        <p className="text-sm font-light tracking-wide text-white/80">
                           Tim Henson, Proud Homeowner
                        </p>
                     </div>
                  </div>
               </div>

               {/* Right Container */}
               <div className="relative flex flex-1 items-center justify-center">
                  <Link
                     href="/"
                     className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "absolute right-0 top-0 rounded-xl"
                     )}
                  >
                     <X className="text-slate-500" />
                  </Link>
                  <div className="space-y-8">
                     <div className="space-y-2">
                        <h1 className="font-sans-manrope text-3xl font-black tracking-tighter text-primary">
                           Welcome back!
                        </h1>
                        <p className="tracking-tight text-slate-400">
                           Start managing your properties and make better deals
                        </p>
                     </div>
                     <div className="space-y-6">
                        <div className="flex flex-col gap-2">
                           <SingleSignOnButton
                              icon={GoogleIcon}
                              iconAltText="Sign in with Google"
                              text="Sign In with Google"
                           />
                           <SingleSignOnButton
                              icon={AppleIcon}
                              iconAltText="Sign In with Apple ID"
                              text="Sign In with Apple ID"
                           />
                           <SingleSignOnButton
                              icon={FacebookIcon}
                              iconAltText="Sign In with Facebook"
                              text="Sign In with Facebook"
                           />
                        </div>
                        <div className="flex items-center gap-6 text-xs font-semibold text-slate-300">
                           <Separator className="flex-1" />
                           <span>OR</span>
                           <Separator className="flex-1" />
                        </div>
                        <LoginForm />
                     </div>
                     <p className="text-center text-sm text-slate-400">
                        Don&apos;t have an account?{" "}
                        <Link
                           href="/signup"
                           className="font-medium text-slate-700 hover:underline hover:underline-offset-2"
                        >
                           Sign Up
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
            <div className="container p-3">
               <p className="text-center text-sm text-white">
                  &copy; 2024 UPRIA, Inc. | All Rights Reserved
               </p>
            </div>
         </main>
      </>
   );
}
