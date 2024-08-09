import { ReactNode } from "react";
import { SessionProvider, useSession } from "next-auth/react";

export default function AuthProvider({
  children
}: {
  children: ReactNode;
}): ReactNode {
  return <SessionProvider>{children}</SessionProvider>;
}
