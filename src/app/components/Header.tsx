import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";

export const ComponentsPageHeader = () => {
   return (
      <header className="outline-solid container fixed left-0 right-0 z-50 flex min-h-[40px] items-center justify-between bg-white p-2 text-sm text-slate-800">
         <Link
            href="/"
            className="inline-flex items-center gap-1 hover:underline hover:underline-offset-2"
         >
            <ChevronLeft size={16} />
            Home
         </Link>
         <Link href="/components">
            <h1 className="font-semibold">UPRIA Components</h1>
         </Link>
         <div>
            <Link
               href="https://github.com/Sence1-inc/upria-frontend"
               className={buttonVariants()}
            >
               <BiLogoGithub size={18} className="mr-1" />
               Github
            </Link>
         </div>
      </header>
   );
};
