import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { components } from "./components.map";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";

export const Sidebar = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <aside>
        <ScrollArea className="h-[90dvh] pr-6 text-sm">
          {components.map((category) => (
            <>
              <div key={category.id} className="my-4 space-y-1">
                <p className="text-md font-semibold text-slate-800">
                  {category.label}
                </p>
                {category.components.map((component) => (
                  <Link
                    href={component.route}
                    key={component.id}
                    className="block hover:underline hover:underline-offset-2"
                  >
                    {component.label}
                  </Link>
                ))}
              </div>
              <Separator />
            </>
          ))}
          {/* {Array.from({ length: 5 }).map((item, index) => (
            <>
              <div key={index} className="my-4 space-y-1">
                <p className="text-md font-semibold text-slate-800">Category</p>
                {Array.from({ length: 5 }).map((component, index) => (
                  <Link
                    href={"#"}
                    key={index}
                    className="block hover:underline hover:underline-offset-2"
                  >
                    &lt;Component Name&gt;
                  </Link>
                ))}
              </div>
              <Separator />
            </>
          ))} */}
        </ScrollArea>
      </aside>
    </Suspense>
  );
};
