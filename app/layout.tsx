
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/component/nav-bar";

import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Utopia Clone",
  description: "Generate awesome portraits in minutes using AI",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background bg-fixed font-sans antialiased bg-gradient-to-tl from-fuchsia-50 to-slate-300">
      
        <section>
            <Suspense fallback={<div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />}>
              <NavBar />
            </Suspense>
        </section>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
