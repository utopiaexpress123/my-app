
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/component/nav-bar";
import { Suspense } from "react";
import { FooterV2 } from "@/components/component/footer-v2";
import Script from "next/script";
import { Metadata } from 'next'; 
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: 'Utopia Express',
    description: 'Bring to life your AI Clone',
    url: 'https://utopia.express',
    siteName: 'Utopia Express',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 480,
        height: 507,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SCVCC4H9TG"
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
          `}
        </Script>
       
      </head>
      <body className="scroll-smooth overflow-x-hidden	min-h-screen bg-background bg-fixed font-sans antialiased bg-gradient-to-tl from-fuchsia-50 to-slate-300">
      
        <section>
            <Suspense fallback={<div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />}>
              <NavBar />
            </Suspense>
        </section>
        <main>
        {children}
        <FooterV2/>
        </main>
      </body>
    </html>
  );
}
