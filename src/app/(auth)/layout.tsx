import { ReactNode } from "react";
import Providers from "./providers";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40">
      <Providers>
        {children}
      </Providers>
    </main>
  );
}
