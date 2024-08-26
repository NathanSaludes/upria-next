import { PropsWithChildren } from "react";

export const ComponentPreview: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="rounded-lg border p-4">{children}</div>;
};
