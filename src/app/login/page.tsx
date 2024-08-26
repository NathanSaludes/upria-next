import { LoginForm } from "@/components/forms/LoginForm";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import AppleIcon from "@public/icon_apple.svg";
import FacebookIcon from "@public/icon_facebook.svg";
import GoogleIcon from "@public/icon_google.svg";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: string;
  iconAltText: string;
  size?: number;
  children: React.ReactNode;
};
const SocialLoginButton = ({ icon, iconAltText, size, children }: Props) => (
  <Button
    className="min-h-11 rounded-md font-medium text-slate-500"
    variant="outline"
  >
    <Image
      src={icon}
      alt={iconAltText}
      width={size || 18}
      height={size || 18}
      className={`mr-2 h-[${size}px] w-[${size}px]`}
    />
    {children}
  </Button>
);

export default function Login() {
  return (
    <>
      <main className="flex min-h-dvh items-center bg-[url('/hero-image.avif')] bg-cover bg-no-repeat p-10">
        <div className="container flex min-h-[800px] max-w-[1366px] gap-4 rounded-3xl bg-white p-4 shadow-lg">
          {/* Hero Image */}
          <div className="flex flex-[1.4] flex-col overflow-hidden rounded-xl bg-[url('/sample-property.jpg')] bg-cover bg-no-repeat">
            <p className="m-9 mb-auto block text-lg font-medium text-white">
              &lt;insert logo&gt;
            </p>
            {/* Customer Testimonial */}
            <div className="mt-auto flex h-full flex-col justify-end space-y-3 bg-gradient-to-t from-black/50 from-30% to-transparent p-9">
              <p className="text-lg font-medium leading-8 text-white">
                “It transformed my overwhelming first-time homebuying experience
                into an enjoyable and stress-free journey, helping me find my
                dream home in just a few weeks!”
              </p>
              <p className="text-sm font-medium text-white">
                Tim Henson, Proud Homeowner
              </p>
            </div>
          </div>
          {/* Login Form */}
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
                <h1 className="text-3xl font-black tracking-tighter text-primary">
                  Welcome back!
                </h1>
                <p className="font-medium text-slate-400">
                  Start managing your properties and make better deals
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <SocialLoginButton
                    icon={GoogleIcon}
                    iconAltText="Sign in with Google"
                  >
                    Sign In with Google
                  </SocialLoginButton>
                  <SocialLoginButton
                    icon={AppleIcon}
                    iconAltText="Sign In with Apple ID"
                  >
                    Sign In with Apple ID
                  </SocialLoginButton>
                  <SocialLoginButton
                    icon={FacebookIcon}
                    iconAltText="Sign In with Facebook"
                  >
                    Sign In with Facebook
                  </SocialLoginButton>
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
                  className="font-semibold text-slate-700 hover:underline hover:underline-offset-2"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
