
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/component/nav-bar";
import { Suspense } from "react";
import { Footer } from "@/components/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Utopia",
  description: "Generate awesome portraits with AI",
};
export const openGraphImage = { images: ['https://i.postimg.cc/5tfZMbmK/1.png'] };

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden	min-h-screen bg-background bg-fixed font-sans antialiased bg-gradient-to-tl from-fuchsia-50 to-slate-300">
      
        <section>
            <Suspense fallback={<div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />}>
              <NavBar />
            </Suspense>
        </section>
        <main>
        {children}
        <Footer/>
        </main>
      </body>
    </html>
  );
}
