import { PropsWithChildren } from "react";

export const ComponentDescription: React.FC<PropsWithChildren> = ({
  children
}) => {
  return <div className="space-y-3 pb-2 text-slate-500">{children}</div>;
};
