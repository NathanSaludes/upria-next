import { ReactNode, Suspense } from "react";
import { ComponentsPageHeader } from "./Header";
import { Sidebar } from "./Sidebar";

export default function ComponentsLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ComponentsPageHeader />
      <main className="outline-solid container min-h-dvh pt-20 leading-relaxed">
        <div className="grid md:grid-cols-[240px_minmax(0,1fr)]">
          <div className="hidden md:block">
            <div className="fixed w-[240px]">
              <Sidebar />
            </div>
          </div>
          <div className="min-h-[200dvh] flex-1 p-4">
            <Suspense>{children}</Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
